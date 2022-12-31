import React, { useState, useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SubtitleMap from "./subtitleMap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { 
  MDBBtn, 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter} from 'mdb-react-ui-kit';

const MyCourseDetailsInstructor = ({ course }) => {
  const { currency, rate } = useContext(CurrencyContext);
  const [title,setTitle] = useState(course.title)
  const [hours,setHours] = useState(course.hours)
  const [subject,setSubject] = useState(course.subject)
  const [discount,setDiscount] = useState(course.discount)
  const [discountValidUntil,setDiscountValidUntil] = useState((course.discountValidUntil).substring(0,10))
  const [price, setPrice] = useState(Math.round(course.price * rate))
  const [summary,setSummary] = useState(course.summary)
  const [previewURL,setPreviewURL] = useState(course.previewURL)
  const [error, setError] = useState(null);
  const [basicModal1, setBasicModal1] = useState(false);
  let isPublished = course.published;
  let isOpen = course.open;
  const navigate = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  let message = `Price after ${course.discount}% discount is applied -- original price = ${price} ${currency}`;

  if (course.discountApplied === false) {
    message = "";
  }
  const [isActive, setIsActive] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const toggleShow1 = () => setBasicModal1(!basicModal1);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const refresh = async () => {
    window.location.reload(true);
  };

  const onChangeValue = (e) => {
    if(e.target.value=="Computer Science"){
    setSubject("Computer Science")
  }
  else if(e.target.value=="Digital Media"){
    setSubject("Digital Media")
  }
  else{
    setSubject("Lab Programming")
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(title == '' || subject == '' || price == '' || summary == '' || previewURL == ''){
      setError('Please fill in all the fields')
    }
    else{
      const newCourse = {
        title,
        subject,
        price,
        discount,
        discountValidUntil,
        summary,
        previewURL,
        }
        const response = await fetch (`/api/courses/?id=${course._id}`,{
            method: 'PATCH',
            body:JSON.stringify(newCourse),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if (response.status == 200){
          toggleShow()
          toggleShow1()
          setTitle('')
          setSubject('')
          setPrice('')
          setDiscount('')
          setDiscountValidUntil('')
          setSummary('')
          setPreviewURL('')
          setError(null);
      }

        if (response.status == 400) {
            setError(json.error);
        }
    }
}
  const handleDelete = async(e) => {
    e.preventDefault()

    const response = await fetch("/api/courses/deletecourse/?id=" + course._id,{
      method: "DELETE"
  })

  const json = await response.json();

  if (response.status == 400) {
      setError(json.error);
  }
  if(response.status == 200){
      setTitle('')
      setSubject('')
      setPrice('')
      setDiscount('')
      setDiscountValidUntil('')
      setSummary('')
      setPreviewURL('')
      setError(null);
  }
  }

  const handlePublish = async(e) => {
    e.preventDefault()

    const response = await fetch (`/api/courses/?id=${course._id}`,{
      method: 'PATCH',
      body:JSON.stringify({published: true, open: true}),
      headers: {
          'Content-Type':'application/json'
      }
  })

    const json = await response.json();

    if (response.status == 400) {
      setError(json.error);
    }
  }

  const handleClose = async(e) => {
    e.preventDefault()

    const response = await fetch (`/api/courses/?id=${course._id}`,{
      method: 'PATCH',
      body:JSON.stringify({open: false}),
      headers: {
          'Content-Type':'application/json'
      }
  })

  const json = await response.json();

    if (response.status == 400) {
      setError(json.error);
    }
  }

  return (
    <div className="course-details-instructor">
      <div className="course-video">
      <iframe width="100" height="100" src={course.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{course.title}</h4>

      <p>
        <strong>Total hours: </strong>
        {course.hours}
      </p>
      <p>
        <strong>Rating: </strong>
        {course.overallRating}
      </p>
      <p>
          <strong>Subject: </strong>
          {course.subject}
        </p>
      <div
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        <p>
          <strong>Price: </strong>
          {Math.round((price * (100 - course.discount)) / 100)} {currency}{" "}
          <br></br>
          {message}
        </p>
        <p>
          <strong>Instructor: </strong>
          {course.instructorData.name}
        </p>
        <p>
          <strong>Subtitles: </strong>
          <ol>
            {course.subtitles &&
              course.subtitles.map((subtitle) => (
                <SubtitleMap subtitle={subtitle} key={subtitle._id} />
              ))}
            <li>
              {course.title} Exercises - Total Questions:{" "}
              {course.exercises.length}
            </li>
          </ol>
        </p>
      </div>
      <div className="instructor-buttons">
      <MDBBtn rounded
        style={{
          backgroundColor: isActive ? "#E0E0E0" : "",
          color: isActive ? "black" : "",
          height: 35,
          textAlign: "center",
          borderColor: isActive ? "black" : "#B71C1C",
          width: 90
        }}
        onClick={handleClick} color="danger">
        View Details
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          width: 90
        }}
        onClick={() => navigate(`/instructorCourse?id=${course._id}`)} color="danger">
        Go to Course
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          display: isPublished ? "none" : "block",
          width: 90
        }}
        onClick={toggleShow} color="danger">
        Edit Course
      </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Course Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div style={{color: "black", fontSize: "small"}}><i>- fields followed by * are required</i></div>
            <br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title *"
              >
        <Form.Control type="text" placeholder="Title *" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </FloatingLabel><br></br>

      <Form.Select onChange={onChangeValue}>
          <option>Please select a subject *</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Digital Media">Digital Media</option>
          <option value="Lab Programming">Lab Programming</option>
        </Form.Select><br></br>

      <FloatingLabel controlId="floatingPrice" label="Price *">
        <Form.Control type="text" placeholder="Price *" value={price} onChange = {(e) => setPrice(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscount" label="Discount">
        <Form.Control type="text" placeholder="Discount" value={discount} onChange = {(e) => setDiscount(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscountVU" label="Discount Valid Until">
        <Form.Control type="text" placeholder="Discount Valid Until" value={discountValidUntil} onChange = {(e) => setDiscountValidUntil(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSummary" label="Summary *">
        <Form.Control type="text" placeholder="Summary *" value={summary} onChange = {(e) => setSummary(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPreview" label="Preview *">
        <Form.Control type="text" placeholder="Preview *" value={previewURL} onChange = {(e) => setPreviewURL(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error" style={{color: "red", fontSize: "small"}}>{error}</div>}

              <div>
              <MDBBtn onClick={() => navigate(`/addExercise?id=${course._id}`)} color="danger">Add Exercises</MDBBtn>
              <MDBBtn onClick={() => navigate(`/addSubtitle?id=${course._id}`)} color="danger" style={{marginLeft: 26}}>Add Subtitles</MDBBtn>
              <MDBBtn onClick={handleSubmit} type="button" color="danger" style={{marginLeft: 26}}>Save changes</MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBModal show={basicModal1} setShow={setBasicModal1} tabIndex='-1'>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Operation Successful</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={refresh}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Course Edited Successfully!</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          display: isPublished ? "none" : "block",
          width: 90
        }}
        onClick={(e) => {
          handleDelete(e);
          window.location.reload(true);
        }} color="danger">
        Delete Course
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          display: isPublished ? "none" : "block",
          width: 90
        }}
        onClick={(e) => {
          handlePublish(e);
          window.location.reload(true);
        }} color="danger">
        Publish Course
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          display: isPublished ? "block" : "none",
          width: 90
        }}
        onClick={(e) => {
          handleClose(e);
          window.location.reload(true);
        }}
        disabled={!isOpen} color="danger">
        Close
      </MDBBtn>
      </div>
      </div>
    </div>
  );
};

export default MyCourseDetailsInstructor;
