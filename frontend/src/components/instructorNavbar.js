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
const countries = require("../country-json-master/src/country-by-currency-code.json");

const InstructorNavbar = () => {
  const { toggleCurrency, country, rate, currency } = useContext(CurrencyContext);
  const [instructor, setInstructor] = useState("")
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

            <NavDropdown
              title={country}
              id="navbarScrollingDropdown"
              onSelect={toggleCurrency}
            >
              {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>
                  {country.country}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/*
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
    */}
          </Nav>

          <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile-instructor'>
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
