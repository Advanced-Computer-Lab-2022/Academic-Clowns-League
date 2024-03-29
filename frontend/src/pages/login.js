import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GuestNavNoSearch from "../components/guestNavNoSearch";
import NavLink from "react-bootstrap/esm/NavLink";
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Card from 'react-bootstrap/Card';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [incorrectPasswordError, setIncorrectPasswordError] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  var json;


  const handleClose2 = async () => {
    const login = {
      username,
      password
    }


    const response2 = await fetch("api/users/login", {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response2.json()

    if (password1 =="" || password2==""){
      setPasswordError("Password cannot be empty");
    }
    else{
      if (password1 == password2) {

        const response3 = await fetch("/api/users/updatePassword2", {
          method: "PATCH",
          body: JSON.stringify({
  
            "newPassword": password1,
            "confirmPassword": password2,
  
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json2 = await response3.json()
        console.log(json2)
  
  
  
        if (json.role == "iTrainee") {
          window.location.href = `/individualTraineeHome`;
        }
        else if (json.role == "cTrainee") {
          window.location.href = `/corporateTraineeHome`;
        }
        else if (json.role == "Instructor") {
          window.location.href = `/instructorHome`;
        }
        else if (json.role == "Admin") {
          window.location.href = `/adminProblems`;
        }
      }
  
      else {
        setPasswordError("Passwords do not match.");
      }

    }




  }


  const handleClose = async () => {
    const response = await fetch("api/users/contract", {
      method: 'POST',

    });
    setShow2(true);









  }
  const handleShow = (role) => { setShow(true); }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = {
      username,
      password,
    };


    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    });

    json = await response.json()
    console.log(json)

    if (response.status == 400) {
      setError(json.error);
      console.log(json.error);
      setIncorrectPasswordError(json.message);
    }
    if (response.status == 200) {

      if (json.contract == false) {
        handleShow(json.role)

      }
      else if (password == "acl123") { setShow2(true); }
      else {

        if (json.role == "iTrainee") {
          window.location.href = `/individualTraineeHome`;
        }
        else if (json.role == "cTrainee") {
          window.location.href = `/corporateTraineeHome`;
        }
        else if (json.role == "Instructor") {
          window.location.href = `/instructorHome`;
        }
        else if (json.role == "Admin") {
          window.location.href = `/adminProblems`;
        }

      }
    }
  }


  return (
    <div>
      <GuestNavNoSearch />
      <Card style={{ position: 'relative', width: '600px', margin: 'auto',marginTop:'20px' }} >
        <Card.Body>
          <Stack direction="column" spacing={1} >


            <FloatingLabel
              controlId="floatingInput"
              label="Username"
            >
              <Form.Control type="username" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel >
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
              {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
                <Link to="/resetPassword">Forgot Password?</Link>
                <p style={{ color: 'red' }}>{incorrectPasswordError}</p>
                <Button variant="danger" onClick={handleSubmit}>Login</Button>
            </Stack>

          </Stack>
        </Card.Body>
      </Card>










      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Website Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3> Please read the following contract carefully before proceeding</h3>
          This is a contract to signify that the company will own the rights
          to the posted videos and materials of this registered course and will take a share of 20%
          on each video per registered trainee if you choose to proceed. Individual Trainees are eligible for a
          refund if their course progress is below 50%.
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={handleClose}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Change your password</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
          </FloatingLabel><br></br>
          <FloatingLabel controlId="floatingPassword" label="Confirm Password">
            <Form.Control type="password" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </FloatingLabel>
        </ModalBody>
        <Modal.Footer>


        <Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
        <p style={{ color: 'red' }}>{passwordError}</p>
          <Button variant="danger" onClick={handleClose2}> Save Password </Button>
            </Stack>
        </Modal.Footer>
      </Modal>


    </div >
  )
}

export default Login;
