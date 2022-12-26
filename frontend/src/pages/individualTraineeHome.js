import { useEffect, useState} from "react";

// components
import MyCourseDetails from "../components/myCourseDetailsITrainee";
import ITraineeNavbar from "../components/iTraineeNavbar";


const IndividualTraineeHome = () => {
  const [courses, setCourses] = useState(null);

  const handleClick = async () => {
    window.location.reload(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/itrainee/registeredcourses");
      const json = await response.json();

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
      <div className="courses-element">
      <h4 className="popular">My Courses</h4>
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
