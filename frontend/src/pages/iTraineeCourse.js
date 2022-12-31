import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyCoursesITraineeNav from "../components/myCoursesITraineeNav";
import YouTube from 'react-youtube';

import RateCourse from "../components/rateCourse";
import RateInstructor from "../components/rateInstructor";
import ReportProblem from "../components/reportProblem";

import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

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
  MDBCardTitle,
  MDBCardText,
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

import { BsFillTrashFill, BsFillExclamationCircleFill, BsCheckAll, BsFillFileEarmarkCheckFill, BsDownload, BsPencilSquare, BsFillPencilFill, BsFillPlayCircleFill, BsPencil, BsNewspaper, BsFillPersonCheckFill, BsStar, BsChatLeftDots, BsCheck2Circle } from "react-icons/bs";



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


const ITraineeCourse = () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [course, setCourse] = useState(null);
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [studentAnswersState, setStudentAnswersState] = useState([]);
  const [myProgress, setMyProgress] = useState(null);

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

  const [basicModal, setBasicModal] = useState(false);

  const [note, setNote] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  let noteTemp = "";

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
      fetch("/api/instructor/getMyInstReview?id=" + id),
      fetch("/api/courses/getMyNotes?id=" + id)
    ]).then(([resCourse, resMyProgress, resMyCourseReview, resMyInstReview, resMyNotes]) =>
      Promise.all([resCourse.json(), resMyProgress.json(), resMyCourseReview.json(), resMyInstReview.json(), resMyNotes.json()])
    ).then(([dataCourse, dataMyProgress, dataMyCourseReview, dataMyInstReview, dataMyNotes]) => {
      setCourse(dataCourse);
      setMyProgress(dataMyProgress);
      setMyCourseReview(dataMyCourseReview);
      setMyInstReview(dataMyInstReview);
      setVideoURL(dataCourse.previewURL);
      setNote(dataMyNotes.data);
      noteTemp = dataMyNotes.data;
    });
  }, []);


  const toggleShow = () => setBasicModal(!basicModal);

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

    if ((CorrectAnswers.length != StudentAnswers.length) || (StudentAnswers.includes(undefined))) {
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
    const noteJson = { note: noteTemp };

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
    setNote(noteTemp);
    setNoteMessage("Notes updated successfully.");
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

          const sendEmail = await fetch("api/courses/sendCertificateMail/?courseTitle=" + course.title);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow2 = () => { setShow((s) => !s) };
  function OffCanvasExample({ name, ...props }) {
    return (
      <>
        <Button variant="danger" placement='end' onClick={toggleShow2} className="me-2">
          <BsPencilSquare /> &nbsp; Take notes
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><BsPencilSquare /> &nbsp; Take notes</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNotes">
                <Form.Control defaultValue={note} onChange={event => { noteTemp = event.target.value; console.log(noteTemp); }} as="textarea" rows={10} placeholder="Start taking notes..." />
              </Form.Group>
              <Stack style={{ paddingTop: '30px' }} direction="column" justifyContent="center" alignItems="center" spacing={1} >
                <MDBBtn className='mx-2' color='danger' onClick={handleAddNotes}>
                  <BsFillFileEarmarkCheckFill /> Save
                </MDBBtn>
                <p style={{ color: 'green' }}> {noteMessage}</p>
              </Stack>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }


  return (
    <div className="">
      <MyCoursesITraineeNav />
      {course && (
        <div>
          <MDBRow className='g-0'>

            {/* Video and tabs */}
            <MDBCol md='9'>
              <div style={{ width: '100%', height: "auto", position: "center" }} >
                <Ratio autoplay aspectRatio={"21x9"} opts={opts}>
                  <YouTube videoId={getId(videoURL)} opts={opts} />
                </Ratio>
              </div>

              <MDBTabs className='mb-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                    <BsNewspaper /> &nbsp; Overview
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                    <BsCheck2Circle /> &nbsp; Exercises
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                    <BsStar /> &nbsp; Rate and Review Course
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                    <BsFillPersonCheckFill />   &nbsp;  Rate and Review Instructor
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
                    <BsChatLeftDots /> &nbsp; Report a Problem
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent style={{ paddingBottom: '30px' }}>
                {/* Overview */}
                <MDBTabsPane style={{ paddingLeft: '10px' }} show={basicActive === 'tab1'}>
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
                    <em> <strong> Total hours: </strong></em> {course.hours}
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
                    <MDBBtn hidden={myProgress.data == 100 ? false : true} className='mx-2' color='danger' onClick={handleDownloadCertificate}>
                      Download My Certificate
                    </MDBBtn>
                  </div>
                </MDBTabsPane>

                {/* Exercises */}
                <MDBTabsPane show={basicActive === 'tab2'}>
                  <ListGroup as="ol" numbered>
                    {course && course.exercises && course.exercises.map((exercise, index) => (
                      <ListGroup.Item as="li" style={{ fontSize: '22px' }}> <strong>{exercise.question}</strong>
                        <div >
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
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Stack style={{ paddingTop: '30px' }} direction="column" justifyContent="center" alignItems="center" spacing={1} >
                    <MDBBtn className='mx-2' color='danger' onClick={handleSubmit}>
                      <BsCheckAll /> Submit
                    </MDBBtn>
                    <p style={{ fontSize: '50px' }}>{grade}</p>
                    <p style={{ color: 'red' }}> {message}</p>
                  </Stack>
                </MDBTabsPane>

                {/* Rate and review course*/}
                <MDBTabsPane show={basicActive === 'tab3'}>
                  <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>

                    <RateCourse course={course} myId="637a356c54c79d632507dc8a" />

                    <MDBBtn className='mx-2' color='danger' hidden={myCourseReview.text == "" ? false : true} onClick={handleShowAddCourseReview}>
                      <BsPencil /> &nbsp; Review Course
                    </MDBBtn>

                    <Card hidden={myCourseReview.text == "" ? true : false} style={{ fontSize: '20px' }}>
                      <Card.Body>
                        You previously reviewed this course: <em>"{myCourseReview.text}"</em>
                        &nbsp; &nbsp;
                        <BsFillTrashFill onMouseEnter={() => setDeleteCourseReviewIconColor('red')} onMouseLeave={() => setDeleteCourseReviewIconColor('')} onClick={handleShowDeleteCourseReview} style={{ color: deleteCourseReviewIconColor }} />
                        &nbsp; &nbsp;
                        <BsFillPencilFill onMouseEnter={() => setEditCourseReviewIconColor('red')} onMouseLeave={() => setEditCourseReviewIconColor('')} onClick={handleShowEditCourseReview} style={{ color: editCourseReviewIconColor }} />
                      </Card.Body>
                    </Card>

                  </Stack>
                </MDBTabsPane>

                {/* Rate and review instructor*/}
                <MDBTabsPane show={basicActive === 'tab4'}>
                  <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>

                    <RateInstructor course={course} myId="637a356c54c79d632507dc8a" />

                    <MDBBtn className='mx-2' color='danger' hidden={myInstReview.text == "" ? false : true} onClick={handleShowAddInstReview}>
                      <BsPencil /> &nbsp; Review Instructor
                    </MDBBtn>

                    <Card hidden={myInstReview.text == "" ? true : false} style={{ fontSize: '20px' }}>
                      <Card.Body>
                        You previously reviewed this Instructor: <em>"{myInstReview.text}"</em>
                        &nbsp; &nbsp;
                        <BsFillTrashFill onMouseEnter={() => setDeleteInstReviewIconColor('red')} onMouseLeave={() => setDeleteInstReviewIconColor('')} onClick={handleShowDeleteInstReview} style={{ color: deleteInstReviewIconColor }} />
                        &nbsp; &nbsp;
                        <BsFillPencilFill onMouseEnter={() => setEditInstReviewIconColor('red')} onMouseLeave={() => setEditInstReviewIconColor('')} onClick={handleShowEditInstReview} style={{ color: editInstReviewIconColor }} />
                      </Card.Body>
                    </Card>

                  </Stack>
                </MDBTabsPane>

                {/* Report and refund*/}
                <MDBTabsPane show={basicActive === 'tab5'}>
                  <p style={{ padding: '20px' }}>
                    <ReportProblem key={id} cid={id} />
                  </p>

                  <Stack direction="column" justifyContent="center" alignItems="center">
                    <MDBBtn hidden={myProgress.data >= 50 ? true : false} className='me-1' color='danger' onClick={toggleShow}>
                      <BsFillExclamationCircleFill /> Request Refund
                    </MDBBtn>
                  </Stack>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>

            {/* Subtitles column */}
            <MDBCol md='3'>

              {/* Subtitles */}
              <ListGroup as="ol" numbered>
                {course.subtitles &&
                  course.subtitles.map((subtitle) => (
                    <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start"
                      onClick={() => { markAsCompleted(subtitle._id); setVideoURL(subtitle.videoLink); }}>

                      <div className="ms-2 me-auto">
                      <div style={{display:'flex',flexDirection:'row'}}>
                      <div className="fw-bold"> <BsFillPlayCircleFill /> {subtitle.title}</div>
                      <MDBCardText className="text-muted" style={{fontSize:'12px',padding:'3px'}}><em>{subtitle.totalHours} hrs</em></MDBCardText>
                      </div>
                        {subtitle.shortDescription}
                      </div>
                      
                    </ListGroup.Item>
                  ))}
              </ListGroup>

              {/* Take and Download Notes */}
              <Stack style={{ paddingTop: '30px' }} direction="column" justifyContent="center" alignItems="center" spacing={3} >
                {options.map((props) => (
                  <OffCanvasExample {...props} />
                ))}
                <MDBBtn className='mx-2' color='danger' onClick={handleDownloadNotes}>
                  <BsDownload /> &nbsp; Download Notes
                </MDBBtn>
              </Stack>
            </MDBCol>
          </MDBRow>
          <Row>

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
                  <Button variant="danger" onClick={handleSaveAddCourseReview}>
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
                  <Button variant="danger" onClick={handleSaveEditCourseReview}>
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
                  <Button variant="danger" onClick={handleSaveAddInstReview}>
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
                  <Button variant="danger" onClick={handleSaveEditInstReview}>
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