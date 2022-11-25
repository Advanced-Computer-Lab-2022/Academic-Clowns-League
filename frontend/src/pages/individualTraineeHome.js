import { useEffect, useState } from "react";

// components
import MyCourseDetailsITrainee from "../components/myCourseDetailsITrainee";
import ITraineeNavbar from "../components/iTraineeNavbar";

const IndividualTraineeHome = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/itrainee/registeredcourses");
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

<ITraineeNavbar />
    
    <div className="home">
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <MyCourseDetailsITrainee course={course} key={course._id} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default IndividualTraineeHome;
