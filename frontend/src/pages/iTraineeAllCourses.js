import { useEffect, useState, useContext } from "react";
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { GoSearch } from 'react-icons/go'

// components
import { CurrencyContext } from "../contexts/CurrencyContext";
import CourseDetailsITrainee from "../components/courseDetailsITrainee";
import ITraineeNavbar from "../components/iTraineeNavbar";


const ITraineeAllCourses = () => {
  const { rate, currency } = useContext(CurrencyContext)
  const [courses, setCourses] = useState(null);
  const [isActivePopular, setIsActivePopular] = useState(false);
  const [isActiveLength, setIsActiveLength] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    setCourses(json);
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
      const response = await fetch("/api/courses/");
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
      const response = await fetch("/api/courses/");
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
      <ITraineeNavbar/>
    
    <div className="home">
      <form className="create" onSubmit={handleSubmit}>

      <MDBInputGroup className="search">
      <MDBInput label='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
      <MDBBtn rounded rippleColor='dark' style={{
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }}>
      <GoSearch />
      </MDBBtn>
      </MDBInputGroup>
      </form>
      <MDBBtn rounded className='clear-search' style={{
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }} onClick={handleClick}>
        Clear Search
      </MDBBtn>
      <MDBBtn rounded className='sort-popular' style={{
          backgroundColor: isActivePopular ? "#C00418" : "#607D8B",
          borderColor: "#78909C"
        }} onClick={getPopular}>
        Sort by Most Popular
      </MDBBtn>
      <MDBBtn rounded className='sort-length' style={{
          backgroundColor: isActiveLength ? "#C00418" : "#607D8B",
          borderColor: "#78909C"
        }} onClick={getLength}>
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
            <CourseDetailsITrainee course={course} key={course._id} />
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
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }}>
        Apply
      </MDBBtn>
      <MDBBtn rounded className='filter-clear' style={{
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }} onClick={handleClick}>
        Clear Filter
      </MDBBtn>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ITraineeAllCourses;
