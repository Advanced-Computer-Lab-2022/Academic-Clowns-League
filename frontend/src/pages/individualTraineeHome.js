import { useEffect, useState} from "react";

// components
import MyCourseDetails from "../components/myCourseDetailsITrainee";
import MyCoursesITraineeNav from "../components/myCoursesITraineeNav";


const IndividualTraineeHome = () => {
  const [courses, setCourses] = useState(null);
  const [message, setMessage] = useState("No courses to show")

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/itrainee/registeredcourses");
      const json = await response.json();
      if (response.status == 200) {
          setCourses(json);
          if(json.length != 0){
            setMessage("My Courses")
          }
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <MyCoursesITraineeNav />
      <div className="home">
      <div className="mycourses-element">
      <h4 className="popular"><i>{message}</i></h4>
      <div className="my-courses">
        {courses &&
          courses.map((course) => (
            <MyCourseDetails course={course} key={course._id} />
          ))}
      </div>
      </div>
      </div>
      </div>
  );
};

export default IndividualTraineeHome;
