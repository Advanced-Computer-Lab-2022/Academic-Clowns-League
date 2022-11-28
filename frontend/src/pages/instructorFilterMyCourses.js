import { useEffect, useState } from "react";
import MyCourseDetailsInstructor from "../components/myCourseDetailsInstructor";
import InstructorNavbar from "../components/instructorNavbar";

const InstructorFilterMyCourses = () => {
  const [courses, setCourses] = useState(null);
  const [subjects, setSubject] = useState({
    computer: false,
    digital: false,
    lab: false,
  });
  const [prices, setPrice] = useState({
    free: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
  });

  const onChangeSub = (e) => {
    setSubject({ ...subjects, [e.target.value]: e.target.checked });
  };

  const onChangePrice = (e) => {
    setPrice({ ...prices, [e.target.value]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = Object.assign(subjects, prices);
    const response = await fetch(
      `/api/courses/filterinstprice?${new URLSearchParams(result).toString()}`
    );
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      setCourses(json);
    }
  };

  const handleClick = async () => {
    window.location.reload(true);
  };

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch("/api/courses/instcourses");
      //fetch from that route using controller function
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      <InstructorNavbar />
    
    <div className="courses-trainee">
      <div className="all-courses">
        {courses &&
          courses.map((course) => (
            <MyCourseDetailsInstructor key={course._id} course={course} />
          ))}
      </div>
      <div>
        <form className="filter" onSubmit={handleSubmit}>
          <h3>Filter by: </h3>
          <h4>Price</h4>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.free}
            onChange={onChangePrice}
            value="free"
          />
          <label>Free</label>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.sixth}
            onChange={onChangePrice}
            value="sixth"
          />
          <label>6000 - 7000</label>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.seventh}
            onChange={onChangePrice}
            value="seventh"
          />
          <label>7000 - 8000</label>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.eighth}
            onChange={onChangePrice}
            value="eighth"
          />
          <label>8000 - 9000</label>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.ninth}
            onChange={onChangePrice}
            value="ninth"
          />
          <label>9000 - 10000</label>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.tenth}
            onChange={onChangePrice}
            value="tenth"
          />
          <label>10000+</label>
          <h4>Subject</h4>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.computer}
            onChange={onChangeSub}
            value="computer"
          />
          <label>Computer Science</label>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.digital}
            onChange={onChangeSub}
            value="digital"
          />
          <label>Digital Media</label>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.lab}
            onChange={onChangeSub}
            value="lab"
          />
          <label>Lab Programming</label>
          <button>Apply</button>
        </form>
        <button onClick={handleClick}>Clear Filter</button>
      </div>
    </div>
    </div>
  );
};

export default InstructorFilterMyCourses;
