import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import CourseDetailsCTrainee from "../components/courseDetailsCTrainee";


const CorporateTraineeHome = () => {
  const [courses, setCourses] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the default action which is refreshing the page

    //DON'T CALL THE CONST BELOW searchTerm PLEASE
    const searchTerm2 = { searchTerm }; //a dummy obj i'll use in backend
    //const response = await fetch('/api/courses/63598f85fb000a4726c4e5d8')
    const response = await fetch(
      `/api/courses/searchAllCourses?${new URLSearchParams(
        searchTerm2
      ).toString()}`
    );

    const json = await response.json();
    //console.log(json);
    setCourses(json);

    /* 
    if(response.ok){
        setCourses(response);
    }
    else {
        console.log('not okay')

    } */
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
    <div className="home">
      <Link to="/filterCorpCourses">
        <button>Filter all Courses</button>
      </Link>
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
            <CourseDetailsCTrainee course={course} key={course._id} />
          ))}
      </div>
    </div>
  );
};

export default CorporateTraineeHome;
