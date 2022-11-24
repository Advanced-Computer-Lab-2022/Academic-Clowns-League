//import { useState } from "react";
//import {Link, useNavigate} from "react-router-dom"

function Navbar(props) {
  //const [country, setCountry] = useState('')
  /*const navigate = useNavigate()
  const changePrice = (e) => {
    e.preventDefault()
    setCountry(e.target.value)
    console.log(country)
    navigate('courseDetails.js',{state:country});
  };*/

  return (
    <div>
    <header>
      <div className="container">
        <h1>Online Learning System</h1>

        <div>
          <h4>Select Country</h4>
           <select id="dropdown">
  <option value="Egypt" selected="selected">Egypt</option>
  <option value="United States" selected="selected">United States</option>
  <option value="Germany" selected="selected">Germany</option>
  <option value="United Arab Emirates" selected="selected">United Arab Emirates</option>
          </select>
      </div>
      </div>
    </header>
    </div>
  );
};
export default Navbar;


/*<Link to="/"></Link>*/
//linking to a page
