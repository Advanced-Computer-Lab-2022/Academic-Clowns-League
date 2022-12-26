import React from 'react';


import { useNavigate } from "react-router-dom";
import { useContext, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
const countries = require('../country-json-master/src/country-by-currency-code.json')

const ITraineeNavbar = () => {
  const {toggleCurrency, country} = useContext(CurrencyContext);
  const navigate = useNavigate();
  
    return (
      <Navbar sticky="top"  variant="dark" expand="lg" style={{backgroundColor: '#C00418'}}>
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Canadian Chamber Of Commerce
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">



          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link><NavLink to="/individualTraineeHome" className="navlink">My Courses</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/iTraineeAllCourses" className="navlink">All Courses</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/iTraineeFilterAllCourses" className="navlink">Filter All Courses</NavLink></Nav.Link>


            <NavDropdown title="Options" id="navbarScrollingDropdown">
              <NavDropdown.Item  onClick={() => {
                  navigate(`/iTraineeProfile`);
                }}>
                My Profile
              
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={country} id="navbarScrollingDropdown" onSelect = {toggleCurrency}>
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
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
  }
  
  export default ITraineeNavbar;