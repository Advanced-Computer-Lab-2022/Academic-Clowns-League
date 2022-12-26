import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')


const AllCourseDetailsInstructor = ({ course }) => {
  const {currency, rate} = useContext(CurrencyContext)
  const navigate = useNavigate()

  let price = Math.round(course.price * rate)
  let message = `Price after ${course.discount}% discount is applied -- original price = ${price} ${currency}`
  if(course.discountApplied === false){
    message = ''
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
      <iframe width="100" height="100" src={course.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{course.title}</h4>

      <p>
        <strong>Total hours: </strong>
        {course.hours}
      </p>
      <p>
        <strong>Rating: </strong>
        {course.overallRating}
      </p>
      <div
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        <p>
          <strong>Price: </strong>
          {Math.round(price*(100-course.discount)/100)} {currency} <br></br>
          {message}
        </p>
        
        <p>
          <strong>Subject: </strong>
          {course.subject}
        </p>
        <p>
          <strong>Instructor: </strong>
          {course.instructorData.name}
        </p>
        <p>
        <strong>Course Outline: </strong>
        <ol>
        {course.subtitles &&
          course.subtitles.map((subtitle) => (
            <SubtitleMap subtitle={subtitle} key={subtitle._id} />
          ))}
        <li>
          {course.title} Exercises - Total Questions: {course.exercises.length}
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
        onClick={handleClick} color="danger">
        View Details
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C"
        }}
        onClick={() => navigate(`/instructorCourse?id=${course._id}`)} color="danger">
        Go to Course
      </MDBBtn>
      </div>
    </div>
  );
};

export default AllCourseDetailsInstructor;