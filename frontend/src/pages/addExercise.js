import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddExercise = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const navigate = useNavigate();

    const [question,setQuestion] = useState('')
    const [option1,setOption1] = useState('')
    const [option2,setOption2] = useState('')
    const [option3,setOption3] = useState('')
    const [option4,setOption4] = useState('')
    const [answer,setAnswer] = useState('')
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [counter, setCounter] = useState(1);
    const [popup, setPop] = useState(false);

    const handleOpen = async (e) => {
        e.preventDefault()
        setPop(!popup);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const exercise = {
            question,
            option1,
            option2,
            option3,
            option4,
            answer
        }
        const response = await fetch("/api/courses/addCourseEx/?id=" + id,{
            method: 'PATCH',
            body:JSON.stringify(exercise),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
        }

        if(response.ok){
            setQuestion('')
            setOption1('')
            setOption2('')
            setOption3('')
            setOption4('')
            setAnswer('')
            setCounter(counter + 1);
            setMessage(counter + ' exercises(s) added successfully')
            setError(null);
        }
    }

    return(
        <>
        <InstructorNavbar />
        <br></br>
        <h3>Enter Exercise Details</h3><br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Question"
                className="mb-3"
              >
        <Form.Control type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Option 1">
        <Form.Control type="text" placeholder="Option 1" value={option1} onChange = {(e) => setOption1(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Option 2">
        <Form.Control type="text" placeholder="Option 2" value={option2} onChange = {(e) => setOption2(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Option 3">
        <Form.Control type="text" placeholder="Option 3" value={option3} onChange = {(e) => setOption3(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Option 4">
        <Form.Control type="text" placeholder="Option 4" value={option4} onChange = {(e) => setOption4(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Answer">
        <Form.Control type="text" placeholder="Answer" value={answer} onChange = {(e) => setAnswer(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error">{error}</div>}

      <Button variant="outline-success" onClick={handleSubmit}>Add</Button>{' '}
      {message}
      <Button variant="outline-success" onClick={handleOpen}>Create Course</Button>{' '}
      <div>
        {popup ? (
            <div className="main-contract">
                <div className="popup-contract">
                    <div>
                    <br></br>
                    <p className="message">Course Created Successfully!</p>
                    </div>
                    <Button variant="success" onClick={() => navigate("/instructorHome")}>Back to Homepage</Button>{' '}
                </div>
            </div>
            ) : (
            ""
        )}
        </div>
        </>
    )
}

export default AddExercise