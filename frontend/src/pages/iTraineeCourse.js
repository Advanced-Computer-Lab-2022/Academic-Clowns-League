import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Subtitle from "../components/subtitle";
import ITraineeNavbar from "../components/iTraineeNavbar";
import Exercise from "../components/excercise";
import YouTube from 'react-youtube';

import RateCourse from "../components/rateCourse";
import RateInstructor from "../components/rateInstructor";

import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Sidebar from "react-sidebar";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Rating from '@mui/material/Rating';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  MDBBtn, MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

} from 'mdb-react-ui-kit';


import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardSubTitle
} from 'mdb-react-ui-kit';




import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import { BsFillTrashFill, BsFillPencilFill,BsFillPlayCircleFill,BsPencil,BsNewspaper,BsFillPersonCheckFill,BsStar } from "react-icons/bs";




function getColor(submitted, chosenOption, correctAnswer, studentAnswer) {
  if (submitted && chosenOption == correctAnswer)
    return 'green';
  if (submitted && chosenOption == studentAnswer)
    return 'red';
  return ' black';
}
function getWeight(submitted, chosenOption, correctAnswer, studentAnswer) {
  if (submitted && (chosenOption == correctAnswer || chosenOption == studentAnswer))
    return 'bold';
  return 'normal';
}
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

const options = [
  {
    name: 'Take some notes',
    scroll: true,
    backdrop: false,
    placement: 'end'
  }
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" placement='end' onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


const ITraineeCourse = () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [course, setCourse] = useState(null);
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [studentAnswersState, setStudentAnswersState] = useState([]);
  const [myProgress, setMyProgress] = useState(null);
  const [note, setNote] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  const [videoURL, setVideoURL] = useState('');

  const [myCourseReview, setMyCourseReview] = useState(null);
  const [tempCourseReview, setTempCourseReview] = useState('');
  const [showAddCourseReview, setShowAddCourseReview] = useState(false);
  const [addCourseReviewMessage, setAddCourseReviewMessage] = useState('');
  const [showDeleteCourseReview, setShowDeleteCourseReview] = useState(false);
  const [showEditCourseReview, setShowEditCourseReview] = useState(false);
  const [deleteCourseReviewIconColor, setDeleteCourseReviewIconColor] = useState('');
  const [editCourseReviewIconColor, setEditCourseReviewIconColor] = useState('');

  const [myInstReview, setMyInstReview] = useState(null);
  const [tempInstReview, setTempInstReview] = useState('');
  const [showAddInstReview, setShowAddInstReview] = useState(false);
  const [addInstReviewMessage, setAddInstReviewMessage] = useState('');
  const [showDeleteInstReview, setShowDeleteInstReview] = useState(false);
  const [showEditInstReview, setShowEditInstReview] = useState(false);
  const [deleteInstReviewIconColor, setDeleteInstReviewIconColor] = useState('');
  const [editInstReviewIconColor, setEditInstReviewIconColor] = useState('');

  const [answersText, setAnswersText] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  
  const navigate = useNavigate();

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };




  useEffect(() => {
    Promise.all([
      fetch("/api/courses/openMyCourse/?id=" + id),
      fetch("/api/courses/getMyProgress/?courseId=" + id),
      fetch("/api/courses/getMyCourseReview?id=" + id),
      fetch("/api/instructor/getMyInstReview?id=" + id)
    ]).then(([resCourse, resMyProgress, resMyCourseReview, resMyInstReview]) =>
      Promise.all([resCourse.json(), resMyProgress.json(), resMyCourseReview.json(), resMyInstReview.json()])
    ).then(([dataCourse, dataMyProgress, dataMyCourseReview, dataMyInstReview]) => {
      setCourse(dataCourse);
      setMyProgress(dataMyProgress);
      setMyCourseReview(dataMyCourseReview);
      setMyInstReview(dataMyInstReview);
      setVideoURL(dataCourse.previewURL);
      console.log("USEEFFECT");
    });
  }, []);



  const toggleShow = () => setBasicModal(!basicModal);

  //values needed for Excercises
  const StudentAnswers = [];
  var CorrectAnswers = [];
  var ResultDisplay = "";

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const requestRefund = async () => {
    const response = await fetch("/api/request/createRefundRequest/?id=" + id);
    const json = await response.json();

    if (response.status == 200) {
      navigate("/individualTraineeHome")
    }
  }
  //Handles Change in RadioButton values
  const handleChange = (event) => {
    StudentAnswers[event.target.name] = event.target.value;
    console.log(StudentAnswers);
  };
  //Handles Submit of Exercises.
  const handleSubmit = async (event) => {

    CorrectAnswers = [];
    for (let i = 0; i < course.exercises.length; i++) {
      CorrectAnswers.push(course.exercises[i].answer);
    }

    if (CorrectAnswers.length != StudentAnswers.length) {
      setMessage("Please answer all questions before submitting.");
    }
    else {

      console.log(CorrectAnswers);
      console.log(StudentAnswers);
      setMessage("");
      var Result = 0;
      const FullMark = CorrectAnswers.length;

      for (let i = 0; i < CorrectAnswers.length; i++) {
        if (StudentAnswers[i] == CorrectAnswers[i]) {
          Result++;
          console.log("true");
        } else {
          console.log(
            "The following answer is wrong: " +
            StudentAnswers[i] +
            " Should be: " +
            CorrectAnswers[i]
          );
        }
      }
      ResultDisplay = (Result / FullMark) * 100;
      if (ResultDisplay >= 50) {
        markAsCompleted("exercise");
      }
      setGrade("Score: " + ResultDisplay + "%");


      setStudentAnswersState(StudentAnswers);
      setSubmitted(true);

    }

  };
  const handleDownloadCertificate = async (event) => {
    //const certificate = await fetch("api/courses/printCertificatePDF");
    fetch("api/courses/printCertificatePDF").then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Certificate.pdf';
        alink.click();
      })
    })
  };
  const handleDownloadNotes = async (event) => {
    //const certificate = await fetch("api/courses/printCertificatePDF");
    fetch("api/courses/printNotePDF?id=" + id).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Course Notes.pdf';
        alink.click();
      })
    })
  };
  const handleAddNotes = async (event) => {
    event.preventDefault();
    const noteJson = { note };

    const response = await fetch("/api/courses/addNotes/?id=" + id, {
      method: "PATCH",
      body: JSON.stringify(noteJson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      console.log("Notes Added", json);
    }
    setNote("");
    setNoteMessage("Note added successfully.");
  };
  const markAsCompleted = async (component) => {
    const oldProgress = myProgress.data;
    if (oldProgress < 100) {
      const response = await fetch("/api/courses/addToProgress/?courseId=" + course._id + "&component=" + component);
      const progress = await fetch("/api/courses/getMyProgress/?courseId=" + course._id);
      const json = await progress.json();
      setMyProgress(json);
      if (progress.ok) {

        const newProgress = json.data;
        if (newProgress >= 100) {

          const sendEmail = await fetch("api/courses/sendCertificateMail");
        }
      }




    }

  };
  const handleCloseAddCourseReview = () => {
    setShowAddCourseReview(false);
    setAddCourseReviewMessage('');
  }
  const handleShowAddCourseReview = () => setShowAddCourseReview(true);
  const handleSaveAddCourseReview = async () => {
    if (tempCourseReview == '') {
      setAddCourseReviewMessage('   Your review cannot be blank!');
    }
    else {
      setShowAddCourseReview(false);
      setAddCourseReviewMessage('');
      const reviewJson = {
        content: tempCourseReview
      }
      const response = await fetch("/api/courses/reviewCourse?id=" + id, {
        method: "PATCH",
        body: JSON.stringify(reviewJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const currentReview = {
        text: tempCourseReview
      }
      setMyCourseReview(currentReview);
    }
  }
  const handleShowDeleteCourseReview = () => setShowDeleteCourseReview(true);
  const handleCloseDeleteCourseReview = () => setShowDeleteCourseReview(false);
  const handleDeleteCourseReview = async () => {
    const response = await fetch("/api/courses/deleteMyCourseReview?id=" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setShowDeleteCourseReview(false);
    const currentReview = {
      text: ''
    }
    setMyCourseReview(currentReview);
    setTempCourseReview('');
  }
  const handleCloseEditCourseReview = () => {
    setShowEditCourseReview(false);
    setAddCourseReviewMessage('');
  }
  const handleShowEditCourseReview = () => {
    setTempCourseReview(myCourseReview.text);
    setShowEditCourseReview(true);
  }
  const handleSaveEditCourseReview = async () => {
    if (tempCourseReview == '') {
      setAddCourseReviewMessage('   Your review cannot be blank!');
    }
    else {
      setShowEditCourseReview(false);
      setAddCourseReviewMessage('');
      const reviewJson = {
        content: tempCourseReview
      }
      const response = await fetch("/api/courses/editMyCourseReview?id=" + id, {
        method: "PATCH",
        body: JSON.stringify(reviewJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const currentReview = {
        text: tempCourseReview
      }
      setMyCourseReview(currentReview);
    }
  }
  const handleCloseAddInstReview = () => {
    setShowAddInstReview(false);
    setAddInstReviewMessage('');
  }
  const handleShowAddInstReview = () => setShowAddInstReview(true);
  const handleSaveAddInstReview = async () => {
    if (tempInstReview == '') {
      setAddInstReviewMessage('   Your review cannot be blank!');
    }
    else {
      setShowAddInstReview(false);
      setAddInstReviewMessage('');
      const reviewJson = {
        content: tempInstReview
      }
      const response = await fetch("/api/instructor/reviewInstructor?id=" + id, {
        method: "PATCH",
        body: JSON.stringify(reviewJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const currentReview = {
        text: tempInstReview
      }
      setMyInstReview(currentReview);
    }
  }
  const handleShowDeleteInstReview = () => setShowDeleteInstReview(true);
  const handleCloseDeleteInstReview = () => setShowDeleteInstReview(false);
  const handleDeleteInstReview = async () => {
    const response = await fetch("/api/instructor/deleteMyInstructorReview?id=" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setShowDeleteInstReview(false);
    const currentReview = {
      text: ''
    }
    setMyInstReview(currentReview);
    setTempInstReview('');
  }
  const handleCloseEditInstReview = () => {
    setShowEditInstReview(false);
    setAddInstReviewMessage('');
  }
  const handleShowEditInstReview = () => {
    setTempInstReview(myInstReview.text);
    setShowEditInstReview(true);
  }
  const handleSaveEditInstReview = async () => {
    if (tempInstReview == '') {
      setAddInstReviewMessage('   Your review cannot be blank!');
    }
    else {
      setShowEditInstReview(false);
      setAddInstReviewMessage('');
      const reviewJson = {
        content: tempInstReview
      }
      const response = await fetch("/api/instructor/editMyInstructorReview?id=" + id, {
        method: "PATCH",
        body: JSON.stringify(reviewJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const currentReview = {
        text: tempInstReview
      }
      setMyInstReview(currentReview);
    }
  }



  return (
    <div className="">
      <ITraineeNavbar />
      {course && (
        <div>
          <MDBRow className='g-0'>
            {/* Video */}
            <MDBCol md='9'>
              <div style={{ width: '100%', height: "auto", position: "center" }} >
                <Ratio autoplay aspectRatio={"21x9"} opts={opts}>
                <YouTube videoId={getId(videoURL)} opts={opts}/>
                </Ratio>
              </div>

              <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            <BsNewspaper/> <strong> {" "} Overview  </strong>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          

            

             <BsPencil/> <strong> {" "} Exercises  </strong>
             
          
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>


          < p style={{ display: 'flex', flexDirection: 'row' }}>
          <BsStar/><p> {" "}</p>  Rate and Review Course
          </p>
          
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
          < p style={{ display: 'flex', flexDirection: 'row' }}>
          <BsFillPersonCheckFill/>     Rate and Review Instructor
          </p>
          
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        {/* Overview */}
        <MDBTabsPane show={basicActive === 'tab1'}>
        <MDBCard>
              <MDBRow className='g-0'>
                <MDBCol md='7' style={{ padding: '7px' }}>
                  <MDBCardBody>
                    <MDBCardTitle class="fs-1"> {course.title}</MDBCardTitle>
                    <MDBCardSubTitle class="fs-3">  <em> taught by </em>{course.instructorData.name}</MDBCardSubTitle>
                    <MDBCardText>
                      < p style={{ display: 'flex', flexDirection: 'row' }}>
                        <p> <strong> Course Rating: {"  "}   </strong><em> {course.overallRating}</em> </p>
                        <Rating name="courserating" defaultValue={course.overallRating} precision={0.5} readOnly />
                      </p>
                      <em> <strong> Subject: </strong></em> {course.subject}
                      <br />
                      <em> <strong> Summary: </strong></em> {course.summary}
                      <br />
                      <em> <strong> Duration:  </strong></em> {course.hours} Hours
                      <br />
                      <br />
                      <MDBRow className='g-0'>
                        <MDBCol md='2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                          <strong> My Progress: </strong>
                        </MDBCol>
                        <MDBCol md='10'>
                          <ProgressBar style={{ color: '#dc3545', marginTop: '5px' }} animated now={myProgress.data} label={`${(myProgress.data).toString().slice(0, 5)}%`} />
                        </MDBCol>
                      </MDBRow>
                    </MDBCardText>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                      <MDBBtn className='mx-2' color='danger' onClick={handleDownloadNotes}>
                        Download My Notes
                      </MDBBtn>
                      <MDBBtn hidden={myProgress.data == 100 ? false : true} className='mx-2' color='danger' onClick={handleDownloadCertificate}>
                        Download My Certificate
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
        </MDBTabsPane>



        {/* Exercises */}
        <MDBTabsPane show={basicActive === 'tab2'}>
        <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>Exercises</b></Accordion.Header>
                <Accordion.Body>
                  <form>
                    {course && course.exercises && course.exercises.map((exercise, index) => (
                      <div>
                        <h2>{exercise.question}</h2>
                        <div>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                              type="radio"
                              value={exercise.options[0]}
                              name={index}
                              onChange={handleChange}
                            />{" "}
                            <div style={{ padding: '5px', color: getColor(submitted, exercise.options[0], exercise.answer, studentAnswersState[exercise.index]), fontWeight: getWeight(submitted, exercise.options[0], exercise.answer, studentAnswersState[exercise.index]) }}
                            >{exercise.options[0]}</div>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                              type="radio"
                              value={exercise.options[1]}
                              name={index}
                              onChange={handleChange}
                            />{" "}
                            <div style={{ padding: '5px', color: getColor(submitted, exercise.options[1], exercise.answer, studentAnswersState[exercise.index]), fontWeight: getWeight(submitted, exercise.options[1], exercise.answer, studentAnswersState[exercise.index]) }}
                            >{exercise.options[1]}</div>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                              type="radio"
                              value={exercise.options[2]}
                              name={index}
                              onChange={handleChange}
                            />{" "}
                            <div style={{ padding: '5px', color: getColor(submitted, exercise.options[2], exercise.answer, studentAnswersState[exercise.index]), fontWeight: getWeight(submitted, exercise.options[2], exercise.answer, studentAnswersState[exercise.index]) }}
                            >{exercise.options[2]}</div>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                              type="radio"
                              value={exercise.options[3]}
                              name={index}
                              onChange={handleChange}
                            />{" "}
                            <div style={{ padding: '5px', color: getColor(submitted, exercise.options[3], exercise.answer, studentAnswersState[exercise.index]), fontWeight: getWeight(submitted, exercise.options[3], exercise.answer, studentAnswersState[exercise.index]) }}
                            >{exercise.options[3]}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <input type="button" value="Submit" onClick={handleSubmit} />
                    <p style={{ fontSize: '40px' }}>{grade}</p>
                    <p style={{ color: 'red' }}> {message}</p>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </MDBTabsPane>


        {/* Rating and Reviewing*/}
        <MDBTabsPane show={basicActive === 'tab3'}><Accordion style={{ display: 'flex', flexDirection: 'row' }}>
                    <MDBCol>
                      <Accordion.Item eventKey="0"  >
                        <Accordion.Header >  Rate and Review Course  </Accordion.Header>
                        <Accordion.Body>
                          <RateCourse course={course} myId="637a356c54c79d632507dc8a" />
                          <div className="d-grid gap-2">
                            <Button variant="danger" size="lg"
                              hidden={myCourseReview.text == "" ? false : true}
                              onClick={handleShowAddCourseReview}>
                              Review Course
                            </Button>
                          </div>

                          <p
                            hidden={myCourseReview.text == "" ? true : false}> You reviewed that course: "{myCourseReview.text}"
                            <BsFillTrashFill onMouseEnter={() => setDeleteCourseReviewIconColor('red')}
                              onMouseLeave={() => setDeleteCourseReviewIconColor('')} onClick={handleShowDeleteCourseReview} style={{ color: deleteCourseReviewIconColor }} />
                            <BsFillPencilFill onMouseEnter={() => setEditCourseReviewIconColor('red')}
                              onMouseLeave={() => setEditCourseReviewIconColor('')} onClick={handleShowEditCourseReview} style={{ color: editCourseReviewIconColor }} />
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </MDBCol>
                    <MDBCol>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header variant="danger" >Rate and Review Instructor</Accordion.Header>
                        <Accordion.Body>
                          <RateInstructor course={course} myId="637a356c54c79d632507dc8a" />
                          <div className="d-grid gap-2">
                            <Button variant="danger" size="lg"
                              hidden={myInstReview.text == "" ? false : true}
                              onClick={handleShowAddInstReview}>
                              Review Instructor
                            </Button>
                          </div>

                          <p hidden={myInstReview.text == "" ? true : false}> You reviewed this instructor: "{myInstReview.text}"

                            <BsFillTrashFill onMouseEnter={() => setDeleteInstReviewIconColor('red')}
                              onMouseLeave={() => setDeleteInstReviewIconColor('')} onClick={handleShowDeleteInstReview} style={{ color: deleteInstReviewIconColor }} />
                            <BsFillPencilFill onMouseEnter={() => setEditInstReviewIconColor('red')}
                              onMouseLeave={() => setEditInstReviewIconColor('')} onClick={handleShowEditInstReview} style={{ color: editInstReviewIconColor }} />
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </MDBCol>






                  </Accordion>
        </MDBTabsPane>


        <MDBTabsPane show={basicActive === 'tab4'}>
        


        </MDBTabsPane>
      </MDBTabsContent>
            </MDBCol>



            {/* Subtitles column */}
            <MDBCol md='3'>

              <ListGroup as="ol" numbered>


              {course.subtitles &&
              course.subtitles.map((subtitle) => (


                <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start"
                onClick={() => {markAsCompleted(subtitle._id); setVideoURL(subtitle.videoLink); }}>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"> <BsFillPlayCircleFill/> {subtitle.title}</div>
                    {subtitle.shortDescription}
                  </div>
              </ListGroup.Item>






              ))}





                
                



              </ListGroup>


            </MDBCol>
          </MDBRow>
          <Row>

{/* OLD STUFFFFFF */}

            <Form>
              <Form.Group className="mb-3" controlId="formBasicNotes">
                <Form.Label>Take Some Notes</Form.Label>
                <Form.Control value={note} onChange={event => setNote(event.target.value)} as="textarea" rows={3} placeholder="Start taking notes..." />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleAddNotes}>
                Submit
              </Button>
              <p style={{ color: 'green' }}> {noteMessage}</p>
            </Form>





            <p>
              {" "}
              <Button variant="danger" onClick={() => navigate(`/iTraineeReportProblem?id=${id}`)}>Report problem</Button>
            </p>



            <MDBBtn hidden={myProgress.data >= 50 ? true : false} className='me-1' color='danger' onClick={toggleShow}>
              Request Refund
            </MDBBtn>



            {/*Modals*/}
            <div>


              <Modal show={showAddCourseReview} onHide={handleCloseAddCourseReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Review Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control as="textarea" rows={3} value={tempCourseReview} onChange={event => setTempCourseReview(event.target.value)} placeholder="Write a review about the course..." />
                </Modal.Body>
                <p style={{ color: 'red' }}> {addCourseReviewMessage}</p>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAddCourseReview}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveAddCourseReview}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showEditCourseReview} onHide={handleCloseEditCourseReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit your review of the course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control as="textarea" rows={3} value={tempCourseReview} onChange={event => setTempCourseReview(event.target.value)} placeholder="Edit your review about the course..." />
                </Modal.Body>
                <p style={{ color: 'red' }}> {addCourseReviewMessage}</p>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEditCourseReview}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveEditCourseReview}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>


              <Modal show={showDeleteCourseReview} onHide={handleCloseDeleteCourseReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete your course review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> Are you sure you want to delete your review of this course? </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseDeleteCourseReview}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDeleteCourseReview}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>



              <Modal show={showAddInstReview} onHide={handleCloseAddInstReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Review Instructor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control as="textarea" rows={3} value={tempInstReview} onChange={event => setTempInstReview(event.target.value)} placeholder="Write a review about the instructor..." />
                </Modal.Body>
                <p style={{ color: 'red' }}> {addInstReviewMessage}</p>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAddInstReview}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveAddInstReview}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showEditInstReview} onHide={handleCloseEditInstReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit your review of the instructor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control as="textarea" rows={3} value={tempInstReview} onChange={event => setTempInstReview(event.target.value)} placeholder="Edit your review about the instructor..." />
                </Modal.Body>
                <p style={{ color: 'red' }}> {addInstReviewMessage}</p>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEditInstReview}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveEditInstReview}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showDeleteInstReview} onHide={handleCloseDeleteInstReview}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete your instructor review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> Are you sure you want to delete your review of this instructor? </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseDeleteInstReview}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDeleteInstReview}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>





              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog size='sm'>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Requesting a Refund</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>Are you sure you would like to request a refund for the following course: {course.title}?</MDBModalBody>

                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleShow}>
                        Cancel
                      </MDBBtn>
                      <MDBBtn color="danger" onClick={requestRefund}>Yes, I'm sure</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>


            </div>


          </Row>
        </div>
      )}
    </div>
  );
};

export default ITraineeCourse;
