import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
//import {useLocation} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')

const MyCourseDetailsITrainee = ({ course }) => {
  const { currency, rate } = useContext(CurrencyContext);
  const navigate = useNavigate();
  const [myCourse, setMyCourse] = useState("")
  const price = Math.round(myCourse.price * rate);
  let message = `Price after ${myCourse.discount}% discount is applied -- original price = ${price} ${currency}`;
  let refundMessage = ''
  if (myCourse.discountApplied === false) {
    message = "";
  }
  const refund = myCourse.refund
  if(refund == true){
    refundMessage = 'A refund has been requested for this course'
  }
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`api/request/checkCourse/?id=${course._id}`);
      const json = await response.json();
      if (response.status == 200) {
        setMyCourse(json);
      }
    };
    fetchCourse();
  }, []);
  /*const location = useLocation();
  const  {state} = location.state
  console.log(state)
  let currency = ''
  for(let i = 0; i < cities.length; i++){
    if(cities[i].country === state){
      currency = cities[i].currency_code
      break
    }
  }*/
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="course-details">
      <div className="course-video">
      <iframe width="100" height="100" src={course.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{myCourse.title}</h4>

      <p>
        <strong>Total hours: </strong>
        {myCourse.hours}
      </p>
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
          {Math.round((price * (100 - myCourse.discount)) / 100)} {currency}{" "}
          <br></br>
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
              {myCourse.title} Exercises - Total Questions:{" "}
              {course.exercises.length}
            </li>
          </ol>
        </p>
      </div>
      <div className="mydetails-buttons">
      <div className="error" style={{color: "red", fontSize: "small", marginBottom: 8, marginLeft: 80}}>{refundMessage}</div>
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
        onClick={() => navigate(`/iTraineeCourse?id=${course._id}`)}
        color="danger"
        disabled={refund}
      >
        Go to Course
      </MDBBtn>
      </div>
      </div>
    </div>
  );
};

export default MyCourseDetailsITrainee;
