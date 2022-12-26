import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
  MDBBtn, 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, } from 'mdb-react-ui-kit';

const AddExercise = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const navigate = useNavigate();
    const [basicModal, setBasicModal] = useState(false);
    const [question,setQuestion] = useState('')
    const [option1,setOption1] = useState('')
    const [option2,setOption2] = useState('')
    const [option3,setOption3] = useState('')
    const [option4,setOption4] = useState('')
    const [answer,setAnswer] = useState('')
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [counter, setCounter] = useState(1);
    const [courseData, setCourse] = useState('');
    let phrase = ""

    const toggleShow = () => setBasicModal(!basicModal);

    const handleOpen = () => {
      phrase = "Published"
      toggleShow()
    }

    useEffect(() => {
      const fetchCourse = async () => {
        const response = await fetch(`api/courses/getCourse/?id=${id}`);
        const json = await response.json();
        if (response.status == 200) {
          setCourse(json)
        }
      };
      fetchCourse();
    }, []);

    const handleSave = async(e) => {
      e.preventDefault()
      const response = await fetch("/api/courses/?id=" + id,{
        method: 'PATCH',
        body:JSON.stringify({published: false}),
        headers: {
            'Content-Type':'application/json'
        }
    })
    const json = await response.json()

    if (response.status == 400) {
      setError(json.error);
      }
    if (response.status == 200){
      phrase = "Saved"
      toggleShow()
    }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(question == '' || option1 == '' || option2 == '' || option3 == '' || option4 == '' || answer == ''){
          setError('Please fill in all the fields')
        }
        else{
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

        if (response.status == 400) {
            setError(json.error);
        }

        if(response.status == 200){
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
    }

    return(
        <>
        <InstructorNavbar />
        <div className='create-course'>
        <h3>Enter Exercise Details</h3>
        <div style={{color: "black", fontSize: "small"}}>- fields followed by * are required</div>
        <br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Question *"
              >
        <Form.Control type="text" placeholder="Question *" value={question} onChange={(e) => setQuestion(e.target.value)} style={{width: 600}}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Option 1 *">
        <Form.Control type="text" placeholder="Option 1 *" value={option1} onChange = {(e) => setOption1(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Option 2 *">
        <Form.Control type="text" placeholder="Option 2 *" value={option2} onChange = {(e) => setOption2(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Option 3 *">
        <Form.Control type="text" placeholder="Option 3 *" value={option3} onChange = {(e) => setOption3(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Option 4 *">
        <Form.Control type="text" placeholder="Option 4 *" value={option4} onChange = {(e) => setOption4(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Answer *">
        <Form.Control type="text" placeholder="Answer *" value={answer} onChange = {(e) => setAnswer(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error" style={{color: "red", fontSize: "small"}}>{error}</div>}

      <Button variant="danger" onClick={handleSubmit}>Add</Button>{' '}
      {message}
      <Button variant="danger" onClick={handleSave}>Save</Button>{' '}
      <Button variant="danger" onClick={handleOpen} style={{display: courseData.published ? "block" : "none"}}>Save & Publish</Button>{' '}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Operation Successful!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>Course {phrase} Successfully!
            <MDBBtn onClick={() => navigate("/instructorHome")}>Back to Homepage</MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
        </>
    )
}

export default AddExercise