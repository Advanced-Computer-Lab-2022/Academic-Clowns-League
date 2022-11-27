import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useState, useContext } from 'react'
import { CurrencyContext } from '../contexts/CurrencyContext';


const CTraineeNavbar = () => {
  const { country, toggleCurrency } = useContext(CurrencyContext)

  
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

            <Nav.Link><NavLink to="/corporateTraineeHome" className="navlink">My Courses</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/cTraineeAllCourses" className="navlink">All Courses</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/cTraineeFilterAllCourses" className="navlink">Filter All Courses</NavLink></Nav.Link>


            <NavDropdown title="Options" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={country} id="navbarScrollingDropdown" onSelect = {toggleCurrency}>
              <NavDropdown.Item eventKey="Egypt">Egypt</NavDropdown.Item>
              <NavDropdown.Item eventKey="United States">United States</NavDropdown.Item>
              <NavDropdown.Item eventKey="Germany">Germany</NavDropdown.Item>
              <NavDropdown.Item eventKey="United Arab Emirates">United Arab Emirates</NavDropdown.Item> 
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
  
  export default CTraineeNavbar;