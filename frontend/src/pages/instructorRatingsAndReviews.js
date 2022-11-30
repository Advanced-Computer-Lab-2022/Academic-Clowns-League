import { useEffect, useState } from "react";
import InstructorNavbar from "../components/instructorNavbar";

const InstructorRatingsAndReviews = () => {
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch("/api/instructor/onlyone");
      const json = await response.json();
      if (response.ok) {
        setInstructor(json);
      }
    };
    fetchInstructor();
  }, []);

  {
    return (
      <div className="">
        <InstructorNavbar />
        {/* <p>  ID:{instructor._id}</p> LEIH DI AMLA MOSHKELAAA????*/}

        <h2> ratings </h2>

        {instructor &&
          instructor.ratings.map((rating) => (
            <div key={instructor._id} class="myDiv">
              <h2>rating: {rating.rating}</h2>
            </div>
          ))}

        <h2> reviews </h2>

        {instructor &&
          instructor.reviews.map((review) => (
            <div key={instructor._id} class="myDiv">
              <h2>review: {review}</h2>
            </div>
          ))}
      </div>
    );
  }
};

export default InstructorRatingsAndReviews;
