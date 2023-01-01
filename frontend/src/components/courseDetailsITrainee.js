import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody} from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//const cities = require('../country-json/src/country-by-currency-code.json')

const CourseDetailsITrainee = ({ course }) => {
  const {currency, rate} = useContext(CurrencyContext)
  const navigate = useNavigate()
  const [myCourse, setMyCourse] = useState("")
  const [iTrainee, setITrainee] = useState("")
  const [optSmModal, setOptSmModal] = useState(false);
  const [optSmModal1, setOptSmModal1] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);
  const toggleShow1 = () => setOptSmModal1(!optSmModal1);
  const handlePayment = async() => {
    const response = await fetch(`api/itrainee/payusingwallet/?id=${course._id}`)
    if(response.status == 200){
      if(optSmModal == true){
        toggleShow()
      }
      toggleShow1()
    }
  }

  const refresh = () => {
    window.location.reload(true)
  }
  
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`api/itrainee/getcourseinfo/?id=${course._id}`);
      const json = await response.json();
      if (response.status == 200) {
        setMyCourse(json);
      }
    };
    const fetchTrainee = async () => {
      const response = await fetch('api/itrainee/getitrainee');
      const json = await response.json();
      if (response.status == 200) {
        setITrainee(json);
      }
    }
    fetchTrainee();
    fetchCourse();
  }, []);

  let price = Math.round(myCourse.price * rate)
  let message = `Price after ${myCourse.discount}% discount is applied -- original price = ${price} ${currency}`
  let button = 'Pay for Course'
  let enoughMoney = true;
  let moneyMessage = ''
  if(myCourse.discountApplied === false){
    message = ''
  }
  if(myCourse.register === true){
    button = 'Go to Course'
  }
  if(iTrainee.wallet < Math.round(price*(100-myCourse.discount)/100)){
    enoughMoney = false
    moneyMessage = 'You do not have enough money in your wallet'
  }
  //console.log(course.exercises.length)
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="course-details">
      <div className="course-video">
      <iframe width="100" height="100" src={myCourse.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{myCourse.title}</h4>

      <p style={{display: (myCourse.hours)>=60?"true":"none"}}> <strong>Total hours: </strong> {Math.floor(myCourse.hours/60)}hrs{myCourse.hours%60}min </p>
      <p style={{display: (myCourse.hours)>=60?"none":"true"}}> <strong>Total hours: </strong> {myCourse.hours%60}min </p>

      <p>
        <strong>Rating: </strong>
        {myCourse.overallRating}
      </p>
      <p>
          <strong>Subject: </strong>
          {myCourse.subject}
        </p>
      <div
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        <p>
          <strong>Price: </strong>
          {Math.round(price*(100-myCourse.discount)/100)} {currency} <br></br>
          {message}
        </p>
        <p>
          <strong>Instructor: </strong>
          {course.instructorData.name}
        </p>
        <p>
        <strong>Course Outline: </strong>
        <ol>
        {myCourse.subtitles &&
          myCourse.subtitles.map((subtitle) => (
            <SubtitleMap subtitle={subtitle} key={subtitle._id} />
          ))}
        <li>
          {myCourse.title} Exercises - Total Questions: {course.exercises.length}
        </li>
        </ol>
        </p>
      </div>
      <div className="mydetails-buttons">
      <MDBBtn rounded
        style={{
          backgroundColor: isActive ? "#E0E0E0" : "",
          color: isActive ? "black" : "",
          height: 35,
          textAlign: "center",
          borderColor: isActive ? "black" : "#B71C1C",
          marginLeft: 65,
        }}
        onClick={handleClick}
        color="danger"
      >
        View Details
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          borderColor: "#B71C1C",
          marginLeft: 15
        }}
        onClick={() => {
          if(myCourse.register == true){
            navigate(`/iTraineeCourse?id=${myCourse._id}`)
          }
          else if(myCourse.price == 0){
            handlePayment()
          }
          else {
            toggleShow()
          }
        }}
        color="danger"
      >
        {button}
      </MDBBtn>
      </div>
      <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Payment Method</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><h6>Please choose your preferred payment method:</h6>
            <div style={{marginTop: 20}}>
                <div className="error" style={{color: "red", fontSize: "small", marginBottom: 8}} >{moneyMessage}</div>
                <MDBBtn color="danger" style={{
              marginLeft: 125
            }} onClick={handlePayment} disabled={!enoughMoney}>Wallet</MDBBtn>
            <MDBBtn color="danger" style={{
              marginLeft: 10
            }} onClick={() => {
                navigate(`/checkoutPage?id=${myCourse._id}&title=${myCourse.title}`)
              }}>Credit Card</MDBBtn>
            </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBModal show={optSmModal1} tabIndex='-1' setShow={setOptSmModal1}>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Operation Successful</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={refresh}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Course Purchased Successfully!
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
    </div>
  );
};

export default CourseDetailsITrainee;
