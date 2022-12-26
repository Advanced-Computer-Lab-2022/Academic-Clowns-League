import AdminNavbar from "../components/adminNavbar";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import CourseDetailsAdmin from "../components/courseDetailsAdmin";

const AdminPromotions = () => {
  const [courses, setCourses] = useState(null);

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
    <form>
      <AdminNavbar />
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <CourseDetailsAdmin course={course} key={course._id} />
          ))}
      </div>
    </form>
  );
};

export default AdminPromotions;
