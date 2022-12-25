import { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from 'react-icons/cg';
import {GiMoneyStack} from 'react-icons/gi';
import { NavLink} from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
const countries = require('../country-json-master/src/country-by-currency-code.json')

const ITraineeNavbar = () => {
  const {toggleCurrency, country, rate, currency} = useContext(CurrencyContext)
  const [iTrainee, setITrainee] = useState("")

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

          <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile'>
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
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