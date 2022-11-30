import React, { useMemo, useState } from "react";


const RateCourse = ({course, myId}) => {
 const [Rating, setRating] = useState(0);

  const onChangeValue =  (e) => {
    console.log(e.target.value)
   setRating(e.target.value)
  }
  console.log(Rating)

  const submitRating = async () => {
    const response = await fetch("/api/courses/rate/?id=" + course._id +"&rating=" + Rating +"&user="+myId, {method: 'PATCH'});
    
  };  

  
  
  

  return (
    <div className="">
    <div className="myDiv2">
    <h2>Rate Course</h2>
    <div class="star-rating" onChange={onChangeValue}>
    <input type="radio" id= "5-stars" name="rating" value="5"  />
          <label for="5-stars" class="star">&#9733;</label>
          <input type="radio" id="4-stars" name="rating" value="4"  />
          <label for="4-stars" class="star">&#9733;</label>
          <input type="radio" id="3-stars" name="rating" value="3"  />
          <label for="3-stars" class="star">&#9733;</label>
          <input type="radio" id="2-stars" name="rating" value="2"  />
          <label for="2-stars" class="star">&#9733;</label>
          <input type="radio" id="1-star" name="rating" value="1" />
          <label for="1-star" class="star">&#9733;</label>
          </div>
          <button class="button button3" onClick={submitRating} >
        submit rating
     </button>
     </div>
    
     </div>
  );
};



export default RateCourse;