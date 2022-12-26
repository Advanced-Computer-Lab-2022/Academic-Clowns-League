import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import GuestNavbar from '../components/guestNavbar';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()

        const login = {
            username, 
            password
        }

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
        if (response.ok){
            setUsername("");
            setPassword("");
            setError(null);
            if(json.role == "iTrainee"){
                navigate("/individualTraineeHome")
            }
            else if(json.role == "cTrainee"){
                navigate("/corporateTraineeHome")
            }
            else if(json.role == "Instructor"){
                navigate("/instructorHome")
            }
            else{
                navigate("/adminAddUsers")
            }
        }
    }
    return(
        <div>
            <GuestNavbar/>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
            <Form.Control type="username" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FloatingLabel>
            {error && <div className="error">{error}</div>}
            <Button variant="success" onClick={handleSubmit}>Login</Button>
        </div>
    )
}

export default Login;