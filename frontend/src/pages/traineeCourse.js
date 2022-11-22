import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseDetails from "../components/courseDetails";
import Subtitle from "../components/subtitle";


const TraineeCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);


  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/" + id);
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
        {course && course.subtitles && course.subtitles.map((subtitle) => (
            <Subtitle subtitle={subtitle} key={subtitle._id} />
          ))}
    </div>
  );
}


//<CourseDetails course={course} key={course._id} />

// {course && course.hours}  is explained in full react tutorial #17

 //<h2>Blog details - { id }</h2>



 /*
  <div className="courses">
        {course &&
          course.map((course) => (
            <CourseDetails course={course} key={course._id} />
          ))}
      </div>

 */
export default TraineeCourse;