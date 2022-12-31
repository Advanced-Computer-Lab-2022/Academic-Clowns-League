import React, { useMemo, useState } from "react";
import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';

const RateInstructor = ({ course, myId }) => {
  const [Rating2, setRating] = useState(0);
  const [success, setSuccess] = useState("none");
  const [double, setDouble] = useState("none");
  const [successr, setSuccessr] = useState("none");

  const onChangeValue2 = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };
  console.log(Rating2);

  const rate = () => {
    if(Rating2==0){
     setSuccess("");
    }
    else{
     submitRating2();
    }
    }
 

  const submitRating2 = async () => {
    const response = await fetch(
      "/api/instructor/rate/?id=" +
        course.instructor +
        "&rating=" +
        Rating2 +
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
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>

      <div class="star-rating" onChange={onChangeValue2}>
        <input type="radio" id="5.stars" name="rating2" value="5" />
         <label for="5.stars" class="star">&#9733;</label>
        <input type="radio" id="4.stars" name="rating2" value="4" />
         <label for="4.stars" class="star">&#9733;</label>
        <input type="radio" id="3.stars" name="rating2" value="3" />
         <label for="3.stars" class="star">&#9733;</label>
        <input type="radio" id="2.stars" name="rating2" value="2" />
        <label for="2.stars" class="star">&#9733;</label>
        <input type="radio" id="1.star" name="rating2" value="1" />
        <label for="1.star" class="star">&#9733;</label> 
        </div>
        <p>
    <Button variant="danger" onClick={rate}>rate</Button>
    </p>
    </Stack>
    <p style={{color:"firebrick", display:success}} >
        Please choose a rating
      </p>
      <p style={{color:"firebrick", display:double}} >
       You have already rated this instructor
      </p>
      <p style={{color:"firebrick", display:successr}} >
        Rating applied successfully
      </p>
  </div>
  );
};

export default RateInstructor;
