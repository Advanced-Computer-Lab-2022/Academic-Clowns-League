import { useEffect, useState } from "react";
import CourseDetailsITrainee from "../components/courseDetailsITrainee";
import ITraineeNavbar from "../components/iTraineeNavbar";

const ITraineeAllCourses = () => {
  const [courses, setCourses] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm2 = { searchTerm };
    const response = await fetch(
      `/api/courses/searchAllCourses?${new URLSearchParams(
        searchTerm2
      ).toString()}`
    );
    const json = await response.json();
    setCourses(json);
  };

  const handleClick = async () => {
    window.location.reload(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
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
      <form className="create" onSubmit={handleSubmit}>
        <h3>Search</h3>

        <label>Enter your search term:</label>
        <input
          id="searchTerm"
          name="searchTerm"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button>Search</button>
        <button onClick={handleClick}>Clear Search</button>
      </form>
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <CourseDetailsITrainee course={course} key={course._id} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default ITraineeAllCourses;
