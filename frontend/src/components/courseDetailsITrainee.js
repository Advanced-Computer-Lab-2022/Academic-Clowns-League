import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')

const CourseDetailsITrainee = ({ course }) => {
  const {currency, rate} = useContext(CurrencyContext)
  const navigate = useNavigate()
  const [myCourse, setMyCourse] = useState("")
  
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`api/itrainee/getcourseinfo/?id=${course._id}`);
      const json = await response.json();
      if (response.status == 200) {
        setMyCourse(json);
      }
    };
    fetchCourse();
  }, []);

  let price = Math.round(myCourse.price * rate)
  let message = `Price after ${myCourse.discount}% discount is applied -- original price = ${price} ${currency}`
  let button = 'Pay for Course'
  if(myCourse.discountApplied === false){
    message = ''
  }
  if(myCourse.register === true){
    button = 'Go to Course'
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

      <p>
        <strong>Total hours: </strong>
        {myCourse.hours}
      </p>
      <p>
        <strong>Rating: </strong>
        {myCourse.overallRating}
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
          <strong>Subject: </strong>
          {myCourse.subject}
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
      <MDBBtn rounded
        style={{
          backgroundColor: isActive ? "#E0E0E0" : "",
          color: isActive ? "black" : "",
          height: 35,
          textAlign: "center",
          borderColor: isActive ? "black" : "#B71C1C"
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
          marginLeft: 10,
        }}
        onClick={() => {
          if(myCourse.register == true){
            navigate(`/iTraineeCourse?id=${myCourse._id}`)
          }
          else{
            navigate(`/checkoutPage?id=${myCourse._id}&title=${myCourse.title}`)
          }
        }}
        color="danger"
      >
        {button}
      </MDBBtn>
      </div>
    </div>
  );
};

export default CourseDetailsITrainee;
