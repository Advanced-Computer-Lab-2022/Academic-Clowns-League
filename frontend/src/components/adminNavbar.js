import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { CgProfile } from 'react-icons/cg';
import { BiWorld } from 'react-icons/bi';
const countries = require("../country-json-master/src/country-by-currency-code.json");


const AdminNavbar = () => {
  const { toggleCurrency, country } = useContext(CurrencyContext);
  const navigate = useNavigate();
  const handleClose = async () => {
    const response = await fetch ("api/users/logout");
  navigate("/");
  }
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
              <NavLink to="/adminProblems" className="navlink">
                Problems
              </NavLink>
            </Nav.Link>



            <Nav.Link>
              <NavLink to="/adminAddUsers" className="navlink">
                Add Users
              </NavLink>
            </Nav.Link>

            

            <Nav.Link>
              <NavLink to="/adminPromotions" className="navlink">
                Promotions
              </NavLink>
            </Nav.Link>



            <Nav.Link>
              <NavLink to="/adminCourseAccessRequests" className="navlink">
                Access Requests
              </NavLink>
            </Nav.Link>


            <Nav.Link>
              <NavLink to="/adminRefundRequests" className="navlink">
                Refunds
              </NavLink>
            </Nav.Link>

          </Nav>

          <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile-instructor' align="end">
              <NavDropdown.Item onClick={handleClose}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<BiWorld size={25}/>} id="navbarScrollingDropdown" onSelect = {toggleCurrency} className='navlink-world' align="end">
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
              ))}
            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
