import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCreate } from 'react-icons/md';
import {GiMoneyStack} from 'react-icons/gi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BiWorld } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go'
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';
const countries = require("../country-json-master/src/country-by-currency-code.json");

const InstructorNavbar = ({updateCourses}) => {
  const { toggleCurrency, rate, currency } = useContext(CurrencyContext);
  const [instructor, setInstructor] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  const [instructorMoney, setInstructorMoney] =  useState("")

  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch('api/instructor/onlyone');
      const json = await response.json();
      if (response.status == 200) {
        setInstructor(json);
      }
    };
    const fetchMoney = async () => {
      const response = await fetch('api/courses/moneyOwed');
      const json = await response.json();
      if (response.status == 200) {
        setInstructorMoney(json.wallet);
      }
    };
    fetchMoney();
    fetchInstructor();
  }, []);

  const navigate = useNavigate();

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
    updateCourses(json)
    }

    const handleClick = async () => {
      window.location.reload(true);
    };

  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#C00418" }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Canadian Chamber Of Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink to="/instructorHome" className="navlink">
                My Courses
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/instructorAllCourses" className="navlink">
                All Courses
              </NavLink>
            </Nav.Link>

            {/*
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
    */}
          </Nav>
      <div className='search-navbar'>
        
      <form className="create-instructor" onSubmit={handleSubmit}>

      <MDBInputGroup className="search">
      <MDBInput label='Search' onChange={(e) => setSearchTerm(e.target.value)} style={{
          backgroundColor: "#E0E0E0",
          borderColor: "#E0E0E0",
          color: "black"}}/>
      <MDBBtn rounded rippleColor='dark' style={{
          backgroundColor: "#E0E0E0",
          borderColor: "#E0E0E0",
          color: "black"
        }}>
      <GoSearch />
      </MDBBtn>
      </MDBInputGroup>
      </form>
      <div className="clear-search-instructor-nav">
      <MDBBtn rounded style={{
          backgroundColor: "#E0E0E0",
          borderColor: "#E0E0E0",
          color: "black",
          height: 36,
        }} onClick={handleClick}>
        Clear
      </MDBBtn>
      </div>
      </div>

          <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile-instructor' align="end">
          <NavDropdown.Item
                onClick={() => navigate("/instructorRatingsAndReviews")}
              >
                View my ratings and reviews
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate(`/instructorViewAndEditBio?id=${instructor._id}`);
                }}
              >
                Edit Biography
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/editEmail");
                }}
              >
                Edit Email
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate(`/changePassword?id=${instructor._id}`);
                }}
              >
                Change password
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate(`/resetPassword?id=${instructor._id}`);
                }}
              >
                Forgot my password
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<BiWorld size={25}/>} id="navbarScrollingDropdown" onSelect = {toggleCurrency} className='navlink-world' align="end">
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
              ))}
            </NavDropdown>

              <button className="money-button" onClick={() => navigate("/createCourse")}><MdOutlineCreate size={25} className="money"/></button>

            <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Header as="h3">{`${instructor.name}'s Wallet`}</Popover.Header>
              <Popover.Body>
                <div>
                <h6>Money Owed: </h6> <p>{instructorMoney*rate} {currency}</p>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <button className="money-button"><GiMoneyStack size={25} className="money"/></button>
        </OverlayTrigger>
            

          {/*
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InstructorNavbar;
