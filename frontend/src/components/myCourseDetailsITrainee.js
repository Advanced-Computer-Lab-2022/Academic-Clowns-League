import React, { useState } from "react";
//import {useLocation} from 'react-router-dom';
//const cities = require('../country-json/src/country-by-currency-code.json')

const MyCourseDetailsITrainee = ({ course }) => {
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
          {course.price}
        </p>
        <p>
          <strong>Subject: </strong>
          {course.subject}
        </p>
        <p>
          <strong>Instructor: </strong>
          {course.instructorData.name}
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
        onClick={() => window.location.href=`/iTraineeCourse?id=${course._id}`}
      >
        Go to Course
      </button>




    </div>
  );
};

export default MyCourseDetailsITrainee;
