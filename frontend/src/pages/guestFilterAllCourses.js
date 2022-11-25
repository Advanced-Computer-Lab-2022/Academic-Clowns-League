import { useEffect, useState } from "react";
import CourseDetails from "../components/courseDetails";
import GuestNavbar from "../components/guestNavbar";

const GuestFilterAllCourses = () => {
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

  const onChangeRate = (e) => {
    setRating({ ...ratings, [e.target.value]: e.target.checked });
  };

  const onChangePrice = (e) => {
    setPrice({ ...prices, [e.target.value]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = Object.assign(subjects, ratings, prices);
    const response = await fetch(
      `/api/courses/filtersubrat?${new URLSearchParams(result).toString()}`
    );
    const json = await response.json();
    console.log(json)
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
    <div>
    <GuestNavbar />
    <div className="courses">
      <div className="all-courses">
        {courses &&
          courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
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
    </div>
  </div>
  );
};

export default GuestFilterAllCourses;
