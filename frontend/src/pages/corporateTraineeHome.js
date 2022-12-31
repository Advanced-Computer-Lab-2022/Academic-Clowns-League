import { useEffect, useState } from "react";

// components
import MyCourseDetailsCTrainee from "../components/myCourseDetailsCTrainee";
import MyCoursesCTraineeNav from "../components/myCoursesCTraineeNav";


const CorporateTraineeHome = () => {
  const [courses, setCourses] = useState(null);
  const [message, setMessage] = useState("No courses to show")

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/ctrainee/registeredcourses");
      const json = await response.json();
      console.log(json);

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

    <MyCoursesCTraineeNav />
    <div className="home">
    <div className="mycourses-element">
    <h4 className="popular"><i>{message}</i></h4>
      <div className="my-courses">
        {courses &&
          courses.map((course) => (
            <MyCourseDetailsCTrainee course={course} key={course._id} />
          ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default CorporateTraineeHome;
