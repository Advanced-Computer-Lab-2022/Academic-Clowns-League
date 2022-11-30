import React, { useState, useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import { useNavigate } from "react-router-dom";
//import {useLocation} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')

const MyCourseDetailsInstructor = ({ course }) => {
  const { currency, rate } = useContext(CurrencyContext);
  const navigate = useNavigate();
  const price = Math.round(course.price * rate);
  let message = `Price after ${course.discount}% discount is applied -- original price = ${price} ${currency}`;
  if (course.discountApplied === false) {
    message = "";
  }
  const [isActive, setIsActive] = useState(false);
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
          {Math.round((price * (100 - course.discount)) / 100)} {currency}{" "}
          <br></br>
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
              {course.title} Exercises - Total Questions:{" "}
              {course.exercises.length}
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
        onClick={() => navigate(`/instructorCourse?id=${course._id}`)}
      >
        Go to Course
      </button>
    </div>
  );
};

export default MyCourseDetailsInstructor;
