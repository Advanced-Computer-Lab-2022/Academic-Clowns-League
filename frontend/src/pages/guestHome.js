import { useEffect, useState, useContext } from "react";
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { GoSearch } from 'react-icons/go'

// components
import CourseDetails from "../components/courseDetails";
import GuestNavbar from "../components/guestNavbar";
import { CurrencyContext } from "../contexts/CurrencyContext";


const GuestHome = () => {
  const { rate, currency } = useContext(CurrencyContext)
  const [courses, setCourses] = useState(null);
  const [isActivePopular, setIsActivePopular] = useState(false);
  const [isActiveLength, setIsActiveLength] = useState(false);
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

  const updateCourses = (courses) => {
    setCourses(courses)
  }

  const onChangeSub = (e) => {
    setSubject({ ...subjects, [e.target.value]: e.target.checked });
  };

  const onChangeRate = (e) => {
    setRating({ ...ratings, [e.target.value]: e.target.checked });
  };

  const onChangePrice = (e) => {
    setPrice({ ...prices, [e.target.value]: e.target.checked });
  };

  const handleSubmitFilter = async (e) => {
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

  const getPopular = async () => {
    setIsActivePopular((current) => !current);
    if(!isActivePopular){
      const response = await fetch("api/courses/getPopularCourses")
      const json = await response.json()
      if (response.ok) {
        setCourses(json);
      }
    }
    else{
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    }
  }

  const getLength = async () => {
    setIsActiveLength((current) => !current);
    if(!isActiveLength){
      const response = await fetch("api/courses/getCourseLength")
      const json = await response.json()
      if (response.ok) {
        setCourses(json);
      }
    }
    else{
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    }
  }

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
      <GuestNavbar updateCourses={updateCourses}/>
    
    <div className="home">
      <MDBBtn rounded className='sort-popular' style={{
          backgroundColor: isActivePopular ? "#E0E0E0" : "",
          borderColor: isActivePopular ? "#000000" : "#B71C1C",
          color: isActivePopular ? "#000000": "",
        }} onClick={getPopular} color="danger">
        Sort by Most Popular
      </MDBBtn>
      <MDBBtn rounded className='sort-length' style={{
          backgroundColor: isActiveLength ? "#E0E0E0" : "",
          color: isActiveLength ? "#000000": "",
          borderColor: isActiveLength ? "#000000" : "#B71C1C"
        }} onClick={getLength} color="danger">
        Sort by Course Length
      </MDBBtn>
    </div>
    <div className="guest-home">
    <div className="courses-element">
      <div>
      <h4 className="popular">All Courses</h4>
      <div>
        {courses &&
          courses.map((course) => (
            <CourseDetails course={course} key={course._id} />
          ))}
      </div>
      </div>
      </div>
    <div className="checkboxes">
        <form className="filter" onSubmit={handleSubmitFilter}>
          <h4>Filter by: </h4>
          <h5>Price </h5><p>- filtering is done according to original price</p>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.free}
            onChange={onChangePrice}
            value="free"
          />
          <label>Free</label>
          <br></br>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.sixth}
            onChange={onChangePrice}
            value="sixth"
          />
          <label>{Math.round(60 * rate)} - {Math.round(70 * rate)} {currency}</label>
          <br></br>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.seventh}
            onChange={onChangePrice}
            value="seventh"
          />
          <label>{Math.round(70 * rate)} - {Math.round(80 * rate)} {currency}</label>
          <br></br>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.eighth}
            onChange={onChangePrice}
            value="eighth"
          />
          <label>{Math.round(80 * rate)} - {Math.round(90 * rate)} {currency}</label>
          <br></br>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.ninth}
            onChange={onChangePrice}
            value="ninth"
          />
          <label>{Math.round(90 * rate)} - {Math.round(100 * rate)} {currency}</label>
          <br></br>
          <input
            type="checkbox"
            id="price"
            name="price"
            checked={prices.tenth}
            onChange={onChangePrice}
            value="tenth"
          />
          <label>{Math.round(100 * rate)}+ {currency}</label>
          <br></br>
          <br></br>
          <h5>Subject</h5>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.computer}
            onChange={onChangeSub}
            value="computer"
          />
          <label>Computer Science</label>
          <br></br>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.digital}
            onChange={onChangeSub}
            value="digital"
          />
          <label>Digital Media</label>
          <br></br>
          <input
            type="checkbox"
            id="subject"
            name="subject"
            checked={subjects.lab}
            onChange={onChangeSub}
            value="lab"
          />
          <label>Lab Programming</label>
          <br></br>
          <br></br>
          <h5>Rating</h5>
          <input
            type="checkbox"
            id="rating"
            name="rating"
            checked={ratings.zero}
            onChange={onChangeRate}
            value="zero"
          />
          <label>0-3</label>
          <br></br>
          <input
            type="checkbox"
            id="rating"
            name="rating"
            checked={ratings.four}
            onChange={onChangeRate}
            value="four"
          />
          <label>4-7</label>
          <br></br>
          <input
            type="checkbox"
            id="rating"
            name="rating"
            checked={ratings.eight}
            onChange={onChangeRate}
            value="eight"
          />
          <label>8-10</label>
          <br></br>
          <MDBBtn rounded className='filter' style={{
          borderColor: "#B71C1C"
        }} color="danger">
        Apply
      </MDBBtn>
      <MDBBtn rounded className='filter-clear' style={{
          borderColor: "#B71C1C"
        }} onClick={handleClick} color="danger">
        Clear Filter
      </MDBBtn>
        </form>
      </div>
      </div>
    </div>
  );
};

export default GuestHome;
