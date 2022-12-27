import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import GuestNavbar from '../components/guestNavbar';
import Modal from 'react-bootstrap/Modal'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [show, setShow] = useState(false);
    const contract = true;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) => {
        e.preventDefault()

        handleShow();

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
        
        const signUpresponse = await fetch ("api/users/",{
            method: 'POST',
            body:JSON.stringify(signup),
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        const json2 = await signUpresponse.json()
        console.log(json2);

        if (signUpresponse.status == 400) {
            setError("Signup Error "+json2.error);
        }
        
        if (signUpresponse.status == 200){
            const response = await fetch ("api/users/login",{
                method: 'POST',
                body:JSON.stringify(login),
                headers: {
                    'Content-Type':'application/json'
                }
            })
            
    
            const json = await response.json()
            console.log(json)
            if (!response.ok) {
            setError(json.error);
        }
        if (response.status == 200){
           
            setUsername("");
            setPassword("");
            setError(null);



            if(json.role == "iTrainee"){
                window.location.href=`/individualTraineeHome`;
            }
            else if(json.role == "cTrainee"){
                window.location.href=`/corporateTraineeHome`;
            }
            else if(json.role == "Instructor"){
                window.location.href=`/instructorHome`;
            }
            else if(json.role == "Admin"){
                window.location.href=`/adminAddUsers`;
            }


        }
        }
        
    }
    return(
        <div>
            <GuestNavbar/>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
            <Form.Control type="username" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Firstname" className="mb-3">
            <Form.Control type="firstname" placeholder="name@example.com" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Lastname" className="mb-3">
            <Form.Control type="lastname" placeholder="name@example.com" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Gender" className="mb-3">
            <Form.Control type="gender" placeholder="name@example.com" value={gender} onChange={(e) => setGender(e.target.value)}/>
            </FloatingLabel>
            {error && <div className="error">{error}</div>}
            <Button variant="success" onClick={handleShow}>Signup</Button>
        
    
            

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please read the following contract carefully:</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a contract to signify that the company will own the rights
            to the posted videos and materials of this registered course and will take a share of 20%
            on each video per registered trainee if you choose to proceed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Signup;