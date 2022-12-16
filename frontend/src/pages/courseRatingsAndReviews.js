//import statements
import { Carousel } from "bootstrap";
import { useEffect, useState } from "react";
import InstructorNavbar from "../components/instructorNavbar";

const CourseRatingsAndReviews = () => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("id");

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + courseId);
      const json = await response.json();
      if (response.ok) {
        setCourse(json);
        console.log(json);
        console.log(course);
      }
    };
    fetchCourse();
  }, []);

  {
    return (
      <div className="">
        <InstructorNavbar />
        <p> course, ID: {courseId}</p>

        <h2> ratings </h2>

        {course &&
          course.ratings.map((rating) => (
            <div key={course._id} class="myDiv">
              <h2>rating: {rating.rating}</h2>
            </div>
          ))}

        <h2> reviews </h2>

        {course &&
          course.reviews.map((review) => (
            <div key={course._id} class="myDiv">
              <h2>"{review.content}" - {review.traineeName}</h2>
            </div>
          ))}
      </div>
    );
  }
};

export default CourseRatingsAndReviews;
