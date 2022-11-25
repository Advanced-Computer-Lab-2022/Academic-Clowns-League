import { useEffect, useState } from "react";
import Subtitle from "../components/subtitle";
import InstructorNavbar from "../components/instructorNavbar";


const InstructorCourse = () => {

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
      <InstructorNavbar />
      <p> Instructor course, ID: {id}</p>
    </div>
  );
}



export default InstructorCourse;