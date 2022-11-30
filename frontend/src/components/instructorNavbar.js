import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
const countries = require("../country-json-master/src/country-by-currency-code.json");

const InstructorNavbar = () => {
  const { toggleCurrency, country } = useContext(CurrencyContext);
  const id = "63715373d953904400b6a4d5";
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
            <Nav.Link>
              <NavLink to="/instructorFilterMyCourses" className="navlink">
                Filter My Courses
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/instructorFilterAllCourses" className="navlink">
                Filter All Courses
              </NavLink>
            </Nav.Link>

            <NavDropdown title="Options" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() =>
                  (window.location.href = "/instructorRatingsAndReviews")
                }
              >
                View my ratings and reviews
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  window.location.href = `/instructorViewAndEditBio?id=${id}`;
                }}
              >
                View and Edit Biography
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
                  window.location.href = `/changePassword?id=${id}`;
                }}
              >
                Change password
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  window.location.href = `/resetPassword?id=${id}`;
                }}
              >
                Forgot my password
              </NavDropdown.Item>
            </NavDropdown>

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
