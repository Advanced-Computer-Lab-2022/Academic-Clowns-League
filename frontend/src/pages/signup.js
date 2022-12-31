import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import GuestNavbar from '../components/guestNavbar';
import Modal from 'react-bootstrap/Modal';
import Stack from '@mui/material/Stack';
import Card from 'react-bootstrap/Card';

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [signUpError, setSignUpError] = useState("")
    const [show, setShow] = useState(false);
    const contract = true;


    const handleChangeGender = (event) => {

    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault()

        handleClose();

        const signup = {
            username,
            password,
            firstname,
            lastname,
            email,
            gender,
            contract,



        }
        const login = {
            username,
            password
        }

        const signUpresponse = await fetch("api/users/", {
            method: 'POST',
            body: JSON.stringify(signup),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json2 = await signUpresponse.json()
        console.log(json2);

        if (signUpresponse.status == 400) {
            if (json2.error != undefined) { setError("Please fill all the fields"); }
            else { setSignUpError("Username is taken") }

        }

        if (signUpresponse.status == 200) {
            const response = await fetch("api/users/login", {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


            const json = await response.json()
            console.log(json)
            if (!response.ok) {
                setError(json.error);
            }
            if (response.status == 200) {





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
            <GuestNavbar />
            <Card style={{  position:'relative',width:'600px', margin:'auto',marginTop:'20px' }} >
                <Card.Body>
                    <Stack direction="column" spacing={1} >

                        <FloatingLabel controlId="floatingInput" label="Username">
                            <Form.Control type="username" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" >
                            <Form.Control required feedback="You must agree before submitting."
                                feedbackType="invalid" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Firstname">
                            <Form.Control type="firstname" placeholder="name@example.com" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Lastname" >
                            <Form.Control type="lastname" placeholder="name@example.com" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email">
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FloatingLabel>

                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8} >
                            <div>Gender: </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input type="radio" value='female' name='gender' onChange={(e) => setGender(e.target.value)} />
                                <div style={{ padding: '5px' }} >Female</div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input type="radio" value='male' name='gender' onChange={(e) => setGender(e.target.value)} />
                                <div style={{ padding: '5px' }} >Male</div>
                            </div>
                        </Stack>


                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
                            {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
                            <p style={{ color: 'red' }}>{signUpError}</p>
                            <Button variant="danger" onClick={handleShow} >Signup</Button>
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
                    By agreeing on the terms of this contract, you acknowledge that the company will own the rights
                    to the posted videos and materials of this registered course.
                    If you decide that a course you bought isn't right for you,
                    you are eligible for a refund only if your progress in that course is less than 50%.
                    Our payment policy: Transactions are received online through the website. Payments
                    are done using your credit card details or using your wallet on the website.
                    We will never share your data with anyone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Signup;