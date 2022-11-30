import { useState } from "react";
import Form from 'react-bootstrap/Form';


const Exercise = ({ exercise }) => {


  return (
    <div>
      <h2>{exercise.question}</h2>
      <div>
        <input type="radio" value= {exercise.options[0]} name = {exercise.question}/>  {exercise.options[0]} <br></br>
        <input type="radio" value= {exercise.options[1]} name = {exercise.question}/>  {exercise.options[1]}<br></br>
        <input type="radio" value= {exercise.options[2]} name = {exercise.question}/>  {exercise.options[2]}<br></br>
        <input type="radio" value= {exercise.options[3]} name = {exercise.question}/>  {exercise.options[3]}
        
        
      </div>
          
          
      


      
         


    </div>
  );
};

export default Exercise;