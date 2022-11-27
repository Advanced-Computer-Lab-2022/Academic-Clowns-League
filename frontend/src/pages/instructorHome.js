import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';

// components
import MyCourseDetailsInstructor from "../components/myCourseDetailsInstructor";

const InstructorHome = () => {
  const [courses, setCourses] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the default action which is refreshing the page

    //DON'T CALL THE CONST BELOW searchTerm PLEASE
    const searchTerm2 = { searchTerm }; //a dummy obj i'll use in backend
    //const response = await fetch('/api/courses/63598f85fb000a4726c4e5d8')
    const response = await fetch(
      `/api/courses/searchInstrCourses?${new URLSearchParams(
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
      const response = await fetch("/api/courses/searchInstrCourses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  return (


    <div>
    <InstructorNavbar />
    <div className="home">
      <div>
        <Link to="/createCourse"><Button variant="outline-success">+ Create Course</Button>{' '}</Link>
      </div>
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
            <MyCourseDetailsInstructor course={course} key={course._id} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default InstructorHome;
