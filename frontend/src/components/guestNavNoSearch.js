import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { BiWorld } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go'
import Dropdown from 'react-bootstrap/Dropdown';
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';



const countries = require('../country-json-master/src/country-by-currency-code.json')


const GuestNavNoSearch = () => {
  const {toggleCurrency} = useContext(CurrencyContext)
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

            <Nav.Link><NavLink to="/" className="navlink">All Courses</NavLink></Nav.Link>
        
    
          </Nav>
          <div className='login-buttons-navbar' style={{marginLeft: 12}}>
          <MDBBtn className='login' style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          textDecoration:"none",
          color:"#D0D0D0"
        }} onClick={() => navigate(`/login`)} color="link"> Login </MDBBtn>
            <MDBBtn className='signup' style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          textDecoration:"none",
          color:"#D0D0D0",
          marginLeft: 8
        }} color="link" onClick={() => navigate('/signup')}> Sign Up </MDBBtn>
        </div>

        <Dropdown
                    id={'Dropdown'}
                >
                 <Dropdown.Toggle style={{ textAlign: "right", paddingBottom: 5, backgroundColor:"#C00418", borderColor:"#C00418", boxShadow: "none", color:"#D0D0D0"}} className="navlink-world">
                 {<BiWorld size={25}/>}
                 </Dropdown.Toggle>
                <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: 300}} align="end">
                {countries.map((country) => (
                <Dropdown.Item eventKey={country.country}>{country.country}</Dropdown.Item>
              ))}
                </Dropdown.Menu>
            </Dropdown>

            {/*
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
    */}



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
  
  export default GuestNavNoSearch;