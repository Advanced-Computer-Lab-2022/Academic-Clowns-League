import { useContext, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from 'react-icons/cg';
import { NavLink} from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { useNavigate } from "react-router-dom";
import { GoSearch } from 'react-icons/go'
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';

const countries = require('../country-json-master/src/country-by-currency-code.json')


const MyCoursesCTraineeNav = () => {
  const {toggleCurrency} = useContext(CurrencyContext)
  const navigate = useNavigate();

  const handleClose = async () => {
    const response = await fetch ("api/users/logout");
  navigate("/");
  }

  //const [iTrainee, setITrainee] = useState("")

  /*useEffect(() => {
    const fetchCTrainee = async () => {
      const response = await fetch('api/itrainee/getitrainee');
      const json = await response.json();
      if (response.status == 200) {
        setCTrainee(json);
      }
    };
    fetchCTrainee();
  }, []);*/

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
            style={{ maxHeight: "100px" }}
            navbarScroll
          >


            <Nav.Link><NavLink to="/corporateTraineeHome" className="navlink">My Courses</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/cTraineeAllCourses" className="navlink">All Courses</NavLink></Nav.Link>

            

            {/*
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
    */}
          </Nav>

          <NavDropdown title={<CgProfile size={25}/>} id="navbarScrollingDropdown" className='navlink-profile' align="end">
              <NavDropdown.Item onClick={() => {
                  navigate(`/cTraineeProfile`);
                }}>My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                  navigate(`/cTraineeChangePassword`);
                }}>
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                  navigate(`/cTraineeProblems`);
                }}>
                Requests & Problems
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleClose}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<BiWorld size={25}/>} id="navbarScrollingDropdown" onSelect = {toggleCurrency} className='navlink-world' align="end">
            {countries.map((country) => (
                <NavDropdown.Item eventKey={country.country}>{country.country}</NavDropdown.Item>
              ))}
            </NavDropdown>

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
};

export default MyCoursesCTraineeNav;
