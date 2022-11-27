import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddSubtitle = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const [title,setTitle] = useState('')
    const [videoLink,setVideoLink] = useState('')
    const [shortDescription,setShortDescription] = useState('')
    const [totalHours,setTotalHours] = useState('')
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [counter, setCounter] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const subtitle = {
            title,
            videoLink,
            shortDescription,
            totalHours
        }
        const response = await fetch("/api/courses/addCourseSub/?id=" + id,{
            method: 'PATCH',
            body:JSON.stringify(subtitle),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
        }

        if(response.ok){
            setTitle('')
            setVideoLink('')
            setShortDescription('')
            setTotalHours('')
            setCounter(counter + 1);
            setMessage(counter + ' subtitle(s) added successfully')
            setError(null);
        }
    }

    return(
        <>
        <InstructorNavbar />
        <br></br>
        <h3>Enter Subtitle Details</h3><br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
              >
        <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Video Link">
        <Form.Control type="text" placeholder="Video Link" value={videoLink} onChange = {(e) => setVideoLink(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Short Description">
        <Form.Control type="text" placeholder="Short Description" value={shortDescription} onChange = {(e) => setShortDescription(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Total Hours">
        <Form.Control type="text" placeholder="Total Hours" value={totalHours} onChange = {(e) => setTotalHours(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error">{error}</div>}

      <Button variant="outline-success" onClick={handleSubmit}>Add</Button>{' '}
      {message}
      <Button variant="outline-success" onClick={() => navigate(`/addExercise?id=${id}`)}>Next</Button>{' '}
        </>
    )
}

export default AddSubtitle