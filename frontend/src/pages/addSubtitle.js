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
    const [courseData, setCourse] = useState('');
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title == '' || videoLink == '' || shortDescription == '' || totalHours == ''){
          setError('Please fill in all the fields')
        }
        else{
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
        //setCourse(json)

        if (response.status == 400) {
            setError(json.error);
        }

        if(response.status == 200){
            setTitle('')
            setVideoLink('')
            setShortDescription('')
            setTotalHours('')
            setCounter(counter + 1);
            setMessage(counter + ' subtitle(s) added successfully')
            setError(null);
        }
        }
    }

    return(
        <>
        <InstructorNavbar />
        <div className='create-course'>
        <h3>Enter Subtitle Details</h3>
        <div style={{color: "black", fontSize: "small"}}>- fields followed by * are required</div>
        <br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title *"
                
              >
        <Form.Control type="text" placeholder="Title *" value={title} onChange={(e) => setTitle(e.target.value)} style={{width: 600}}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Video Link *">
        <Form.Control type="text" placeholder="Video Link *" value={videoLink} onChange = {(e) => setVideoLink(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Short Description *">
        <Form.Control type="text" placeholder="Short Description *" value={shortDescription} onChange = {(e) => setShortDescription(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Total Hours *">
        <Form.Control type="text" placeholder="Total Hours *" value={totalHours} onChange = {(e) => setTotalHours(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error" style={{color: "red", fontSize: "small"}}>{error}</div>}

      <Button variant="danger" onClick={handleSubmit}>Add</Button>{' '}
      {message}
      <Button variant="danger" onClick={toggleShow} style={{display: courseData.published ? "none" : "block"}}>Save</Button>{' '}
      <Button variant="danger" onClick={() => navigate(`/addExercise?id=${id}`)} style={{display: courseData.published ? "block" : "none"}}>Next</Button>{' '}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Operation Successful!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>Course Saved Successfully!
            <MDBBtn onClick={() => navigate("/instructorHome")}>Back to Homepage</MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
        </>
    )
}

export default AddSubtitle