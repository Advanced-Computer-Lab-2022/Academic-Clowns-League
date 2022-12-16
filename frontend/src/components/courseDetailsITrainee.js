import React, { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { useNavigate} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')

const CourseDetailsITrainee = ({ course }) => {
  const {currency, rate} = useContext(CurrencyContext)
  const navigate = useNavigate()
  const price = Math.round(course.price * rate)
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
        <strong>Subtitles: </strong>
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
      <button
        style={{
          backgroundColor: isActive ? "salmon" : "",
          color: isActive ? "white" : "",
        }}
        onClick={handleClick}
      >
        View Details
      </button>
      <button
        style={{
          backgroundColor: isActive ? "salmon" : "",
          color: isActive ? "white" : "",
        }}
        onClick={() => {
            navigate(`/checkoutPage?id=${course._id}&title=${course.title}`);
          }}
      >
        Register for Course
      </button>
    </div>
  );
};

export default CourseDetailsITrainee;
