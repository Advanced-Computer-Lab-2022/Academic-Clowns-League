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
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';



const countries = require('../country-json-master/src/country-by-currency-code.json')


const GuestNavbar = ({updateCourses}) => {
  const {toggleCurrency} = useContext(CurrencyContext)
  const [searchTerm, setSearchTerm] = useState("");
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
      <div className='search-navbar'>
        
      <form className="create" onSubmit={handleSubmit}>

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
      <div className="clear-search-navbar">
      <MDBBtn rounded style={{
          backgroundColor: "#E0E0E0",
          borderColor: "#E0E0E0",
          color: "black",
          height: 37,
        }} onClick={handleClick}>
        Clear Search
      </MDBBtn>
      </div>
      </div>
          <div className='login-buttons-navbar'>
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
          color:"#D0D0D0"
        }} color="link"> Sign Up </MDBBtn>
        </div>

          <NavDropdown title={<BiWorld size={25}/>} id="navbarScrollingDropdown" onSelect = {toggleCurrency} className='navlink-world' align="end">
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
              ))}
            </NavDropdown>

            

            <MDBBtn className='login' style={{
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }} onClick={() => navigate(`/login`)}> Login </MDBBtn>
            <MDBBtn className='signup' style={{
          backgroundColor: "#607D8B",
          borderColor: "#78909C"
        }} onClick={() => navigate(`/signup`)}> Sign Up </MDBBtn>

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
  
  export default GuestNavbar;