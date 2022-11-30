import { useEffect, useState } from "react";
import Subtitle from "../components/subtitle";
import CTraineeNavbar from "../components/cTraineeNavbar";
import RateCourse from "../components/rateCourse";
import RateInstructor from "../components/rateInstructor";


const CTraineeCourse = () => {

  //to get the id from  (query, in the URL)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');


  const [course, setCourse] = useState(null);


  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + id);
      const json = await response.json();
      if (response.ok) {
        setCourse(json);
        console.log(json);
        console.log(course);
      }
    };
    fetchCourse();
  }, []); 

  
  return (
    <div className="">
        <CTraineeNavbar />
      <p> CTrainee course, ID: {id}</p>

      <RateCourse course={course} myId="637a8c03f7740521fbe8246e" />
     <RateInstructor course={course} myId="637a8c03f7740521fbe8246e" />
    </div>
  );
}



export default CTraineeCourse;