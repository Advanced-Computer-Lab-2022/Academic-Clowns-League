import AdminNavbar from "../components/adminNavbar";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import CourseDetailsAdmin from "../components/courseDetailsAdmin";
import { MDBCheckbox } from "mdb-react-ui-kit";

const AdminPromotions = () => {
  const [courses, setCourses] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();

    const func = async () => {
      for (let i = 0; i < courses.length; i++) {
        open[i] = false;
      }
    };
    func();
  }, []),
    [courses];

  const handleCheck = async () => {
    if (selectAll == false) {
      setSelectAll(true);
      setOpen(true);
    } else {
      setSelectAll(false);
      setIsChecked(false);
    }
  };

  return (
    <form>
      <AdminNavbar />

      <div className="courses">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Select All"
          checked={selectAll}
          onChange={handleCheck}
          onClick={() => {
            let tmp = [...open];
            tmp[courses.indexOf(course)] = !tmp[courses.indexOf(course)];
            setOpen(tmp);
          }}
        />

        {courses &&
          courses.map((course) => (
            <>
              <CourseDetailsAdmin course={course} key={course._id} />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Default checkbox"
                checked={open[courses.indexOf(course)]}
              />{" "}
            </>
          ))}
      </div>
      <button>Add Discount</button>
    </form>
  );
};

export default AdminPromotions;
