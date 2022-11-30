import React, { useMemo, useState } from "react";

const RateInstructor = ({ course, myId }) => {
  const [Rating2, setRating] = useState(0);

  const onChangeValue2 = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };
  console.log(Rating2);

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
  };

  return (
    <div className="">
      <div className="course-details">
        <h2>Rate Instructor</h2>
        <div class="star-rating2" onChange={onChangeValue2}>
          <input type="radio" id="5-stars" name="rating2" value="5" />
          {/* <label for="5-stars" class="star">&#9733;</label>*/}
          <input type="radio" id="4-stars" name="rating2" value="4" />
          {/* <label for="4-stars" class="star">&#9733;</label>*/}
          <input type="radio" id="3-stars" name="rating2" value="3" />
          {/* <label for="3-stars" class="star">&#9733;</label>*/}
          <input type="radio" id="2-stars" name="rating2" value="2" />
          {/*<label for="2-stars" class="star">&#9733;</label>*/}
          <input type="radio" id="1-star" name="rating2" value="1" />
          {/*<label for="1-star" class="star">&#9733;</label> */}
        </div>
        <button class="button button3" onClick={submitRating2}>
          submit rating
        </button>
      </div>
    </div>
  );
};

export default RateInstructor;
