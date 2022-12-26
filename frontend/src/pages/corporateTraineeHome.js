import { useEffect, useState } from "react";

// components
import MyCourseDetailsCTrainee from "../components/myCourseDetailsCTrainee";
import CTraineeNavbar from "../components/cTraineeNavbar";


const CorporateTraineeHome = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/ctrainee/registeredcourses");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setCourses(json);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>

    <CTraineeNavbar />
    <div className="home">
    <div className="courses-element">
    <h4 className="popular">My Courses</h4>
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
