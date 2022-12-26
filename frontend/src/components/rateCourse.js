import React, { useMemo, useState } from "react";
import Button from 'react-bootstrap/Button';

const RateCourse = ({ course, myId }) => {
  const [Rating, setRating] = useState(0);
  const [success, setSuccess] = useState("none");
  const [double, setDouble] = useState("none");
  const [successr, setSuccessr] = useState("none");

  const onChangeValue = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };
  console.log(Rating);
  
  const rate = () => {
   if(Rating==0){
    setSuccess("");
   }
   else{
    submitRating();
   }
   }

  const submitRating = async () => {
    const response = await fetch(
      "/api/courses/rate/?id=" +
        course._id +
        "&rating=" +
        Rating +
        "&user=" +
        myId,
      { method: "PATCH" }
     
    );
    if (response.status==200){
      setSuccessr("");
      setSuccess("none");
    }
    else{
      setDouble("");
      setSuccessr("none");
      setSuccess("none");
    }
  };

  return (
    <div className="">
        <div class="star-rating" onChange={onChangeValue}>
          <input type="radio" id="5-stars" name="rating" value="5" />
          <label for="5-stars" class="star">
            &#9733;
          </label>
          <input type="radio" id="4-stars" name="rating" value="4" />
          <label for="4-stars" class="star">
            &#9733;
          </label>
          <input type="radio" id="3-stars" name="rating" value="3" />
          <label for="3-stars" class="star">
            &#9733;
          </label>
          <input type="radio" id="2-stars" name="rating" value="2" />
          <label for="2-stars" class="star">
            &#9733;
          </label>
          <input type="radio" id="1-star" name="rating" value="1" />
          <label for="1-star" class="star">
            &#9733;
          </label>
        </div>
        <p>
    <Button variant="danger" onClick={rate} >rate</Button>
    </p>
    <p style={{color:"firebrick", display:success}} >
        Please choose a rating
      </p>
      <p style={{color:"firebrick", display:double}} >
       You have already rated this course
      </p>
      <p style={{color:"firebrick", display:successr}} >
        Rating applied successfully
      </p>
    
    </div>
  );
};

export default RateCourse;
