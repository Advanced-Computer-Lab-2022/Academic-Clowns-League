import { useEffect, useState } from "react";
import CourseDetails from "../components/courseDetails";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [subjects, setSubject] = useState({
    computer: false,
    digital: false,
    lab: false,
  });
  const [ratings, setRating] = useState({
    zero: false,
    four: false,
    eight: false,
  });
  const [prices] = useState({
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

  const onChangeRate = (e) => {
    setRating({ ...ratings, [e.target.value]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = Object.assign(subjects, ratings, prices);
    const response = await fetch(
      `/api/courses/filtersubrat?${new URLSearchParams(result).toString()}`
    );
    const json = await response.json();
    if (response.ok) {
      setCourses(json);
    }
  };

  const handleClick = async () => {
    window.location.reload(true);
  };

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch("/api/courses/");
      //fetch from that route using controller function
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };
    getCourses();
  }, []);

  return (
    <div className="courses">
      <div className="all-courses">
        {courses &&
          courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
          ))}
      </div>
      <form className="filter" onSubmit={handleSubmit}>
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
        <h4>Rating</h4>
        <input
          type="checkbox"
          id="rating"
          name="rating"
          checked={ratings.zero}
          onChange={onChangeRate}
          value="zero"
        />
        <label>0-3</label>
        <input
          type="checkbox"
          id="rating"
          name="rating"
          checked={ratings.four}
          onChange={onChangeRate}
          value="four"
        />
        <label>4-7</label>
        <input
          type="checkbox"
          id="rating"
          name="rating"
          checked={ratings.eight}
          onChange={onChangeRate}
          value="eight"
        />
        <label>8-10</label>
        <button>Apply</button>
      </form>
      <button onClick={handleClick}>Clear Filter</button>
    </div>
  );
};

export default Courses;
