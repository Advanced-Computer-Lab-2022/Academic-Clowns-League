import { useEffect, useState, useContext } from "react";
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { GoSearch } from 'react-icons/go'
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom'

// components
import MyCourseDetailsInstructor from "../components/myCourseDetailsInstructor";
import AllCourseDetailsInstructor from "../components/allCourseDetailsInstructor";
import { CurrencyContext } from "../contexts/CurrencyContext";

const InstructorHome = () => {
  const [courses, setCourses] = useState(null);
  const [unpublishedCourses, setUnpublishedCourses] = useState(null);
  const [publishedCourses, setPublishedCourses] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { rate, currency } = useContext(CurrencyContext)
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

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };



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


  const handleFilter = async (e) => {
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
    const fetchCourses = async () => {
      const response = await fetch("/api/courses/searchInstrCourses");
      const json = await response.json();

      if (response.status == 200) {
        setCourses(json);
      }
    };

    const fetchPubCourses = async () => {
      const response = await fetch("/api/courses/getInstPub");
      const json = await response.json();

      if (response.status == 200) {
        setPublishedCourses(json);
        console.log(publishedCourses)
      }
    };

    const fetchUnpubCourses = async () => {
      const response = await fetch("/api/courses/getInstUnpub");
      const json = await response.json();

      if (response.status == 200) {
        setUnpublishedCourses(json);
      }
    };
    fetchPubCourses();
    fetchUnpubCourses();
    fetchCourses();
  }, []);

  return (
    <div>
      <InstructorNavbar />
      <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Unpublished Courses
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Published Courses
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            All Courses
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="courses-element-instructor">
          {unpublishedCourses &&
            unpublishedCourses.map((course) => (
            <MyCourseDetailsInstructor key={course._id} course={course} />
          ))}
        </div>
      </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>
        <div className="courses-element-instructor">
          {publishedCourses &&
            publishedCourses.map((course) => (
            <MyCourseDetailsInstructor key={course._id} course={course} />
          ))}
        </div>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab3'}>
      <div className="home-search">
      <div className="create-search">
      <form onSubmit={handleSubmit}>

      <MDBInputGroup className="search-instructor">
      <MDBInput label='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
      <MDBBtn rounded rippleColor='dark' style={{
          borderColor: "#B71C1C"
        }} color="danger">
      <GoSearch />
      </MDBBtn>
      </MDBInputGroup>
      </form>
      </div>
      <div className="clear-search-instructor">
      <MDBBtn rounded className='clear-search-button' style={{
          borderColor: "#B71C1C"
        }} onClick={handleClick} color="danger">
        Clear Search
      </MDBBtn>
      </div>
    </div>
    <div className="guest-home">
    <div className="courses-element-instructor-search">
      <div>
      <div>
        {courses &&
          courses.map((course) => (
            <AllCourseDetailsInstructor course={course} key={course._id} />
          ))}
      </div>
      </div>
      </div>
    <div className="checkboxes">
        <form className="filter" onSubmit={handleFilter}>
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
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
};

export default InstructorHome;
