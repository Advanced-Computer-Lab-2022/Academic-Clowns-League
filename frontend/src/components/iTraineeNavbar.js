import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from 'react-icons/cg';
import {GiMoneyStack} from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { GoSearch } from 'react-icons/go'
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';
const countries = require('../country-json-master/src/country-by-currency-code.json')


const ITraineeNavbar = ({updateCourses}) => {
  const {toggleCurrency, rate, currency} = useContext(CurrencyContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [iTrainee, setITrainee] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchITrainee = async () => {
      const response = await fetch('api/itrainee/getitrainee');
      const json = await response.json();
      if (response.status == 200) {
        setITrainee(json);
      }
    };
    fetchITrainee();
  }, []);

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
      <Navbar sticky="top"  variant="dark" expand="lg" style={{backgroundColor: '#C00418'}}>
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

            <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile' align="end">
              <NavDropdown.Item onClick={() => {
                  navigate(`/iTraineeProfile`);
                }}>My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Reports & Problems
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<BiWorld size={25}/>} id="navbarScrollingDropdown" onSelect = {toggleCurrency} className='navlink-world' align="end">
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
              ))}
            </NavDropdown>

          <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Header as="h3">{`${iTrainee.firstname} ${iTrainee.lastname}'s Wallet`}</Popover.Header>
              <Popover.Body>
                <h6>Current Balance: </h6> {iTrainee.wallet*rate} {currency}
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
    </Navbar>
    );
  }
  
  export default ITraineeNavbar;