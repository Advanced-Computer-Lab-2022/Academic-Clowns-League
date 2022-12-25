import { useEffect, useState } from "react";
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
import { BsFillTrashFill ,BsFillPencilFill} from "react-icons/bs";


function getColor(submitted, chosenOption, correctAnswer, studentAnswer) {
 if (submitted && chosenOption == correctAnswer)
 return 'green';
 if (submitted && chosenOption == studentAnswer)
 return 'red';
return ' black';
}
function getWeight(submitted, chosenOption, correctAnswer, studentAnswer) {
 if ( submitted && (chosenOption == correctAnswer || chosenOption == studentAnswer))
  return 'bold';
return 'normal';
}
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

const ITraineeCourse = () => {



  //const { id } = useParams();

  //to get the id from  (query, in the URL)
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

  useEffect(() => {
    Promise.all([
      fetch("/api/courses/openMyCourse/?id=" + id),
      fetch("/api/courses/getMyProgress/?courseId=" +id),
      fetch("/api/courses/getMyCourseReview?id=" +id),
      fetch("/api/instructor/getMyInstReview?id=" +id)
    ]).then(([resCourse, resMyProgress,resMyCourseReview,resMyInstReview])=>
    Promise.all([resCourse.json(),resMyProgress.json(),resMyCourseReview.json(),resMyInstReview.json()])
    ).then(([dataCourse, dataMyProgress,dataMyCourseReview,dataMyInstReview]) =>
    {
      setCourse(dataCourse);
      setMyProgress(dataMyProgress);
      setMyCourseReview(dataMyCourseReview);
      setMyInstReview(dataMyInstReview);
      console.log("USEEFFECT");
    });
  }, []);

  //values needed for Excercises
  const StudentAnswers = [];
  var CorrectAnswers = [];
  var ResultDisplay = "";

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  //Handles Change in RadioButton values
  const handleChange = (event) => {
    StudentAnswers[event.target.name] = event.target.value;
    console.log(StudentAnswers);
  };

  //Handles Submit of Exercises.
  const handleSubmit = async(event) => {

    CorrectAnswers = [];
    for (let i = 0; i < course.exercises.length; i++) {
      CorrectAnswers.push(course.exercises[i].answer);
    }

    if(CorrectAnswers.length != StudentAnswers.length ){
      setMessage("Please answer all questions before submitting.");
    }
    else{
    
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
    if (ResultDisplay >= 50){
      markAsCompleted("exercise");
    }
    setGrade("Score: " + ResultDisplay+"%");


    setStudentAnswersState(StudentAnswers);
    setSubmitted(true);

    }

  };


  const handleDownloadCertificate = async(event) => {
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

  const handleDownloadNotes = async(event) => {
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

  const handleAddNotes = async(event) => {
    event.preventDefault();
    const noteJson = { note};

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



  const markAsCompleted = async(component) => {
    const oldProgress = myProgress.data;
    if (oldProgress < 100){
      const response = await fetch("/api/courses/addToProgress/?courseId=" + course._id+"&component="+component);
      const progress = await fetch("/api/courses/getMyProgress/?courseId=" + course._id);
 const json = await progress.json();
         setMyProgress(json);
         if (progress.ok) {
           
           const newProgress = json.data;
           if (newProgress >= 100){
             
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
  const handleSaveAddCourseReview = async() => {
    if (tempCourseReview == ''){
      setAddCourseReviewMessage('   Your review cannot be blank!');
    }
    else{
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
  const handleDeleteCourseReview = async() => {
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

  const handleSaveEditCourseReview = async() => {
    if (tempCourseReview == ''){
      setAddCourseReviewMessage('   Your review cannot be blank!');
    }
    else{
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
  
  
      


/*
  const [myInstReview, setMyInstReview] = useState(null);
  const [tempInstReview, setTempInstReview] = useState('');
  const [showAddInstReview, setShowAddInstReview] = useState(false);
  const [addInstReviewMessage, setAddInstReviewMessage] = useState('');
  const [showDeleteInstReview, setShowDeleteInstReview] = useState(false);
  const [showEditInstReview, setShowEditInstReview] = useState(false);
  const [deleteInstReviewIconColor, setDeleteInstReviewIconColor] = useState('');
  const [editInstReviewIconColor, setEditInstReviewIconColor] = useState('');  */


  const handleCloseAddInstReview = () => {
    setShowAddInstReview(false);
    setAddInstReviewMessage('');
  }
  const handleShowAddInstReview = () => setShowAddInstReview(true);
  const handleSaveAddInstReview = async() => {
    if (tempInstReview == ''){
      setAddInstReviewMessage('   Your review cannot be blank!');
    }
    else{
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
  const handleDeleteInstReview = async() => {
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

  const handleSaveEditInstReview = async() => {
    if (tempInstReview == ''){
      setAddInstReviewMessage('   Your review cannot be blank!');
    }
    else{
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
        <Row>
          <Col sm={9}>
            <h1 style={{ fontSize: 80, margin: 10 }}> {course.title}</h1>
            <p style={{ margin: 10 }}>
              {" "}
              <strong>Summary:</strong> {course.summary}
            </p>
            <p style={{ margin: 10 }}>
              {" "}
              <strong>Preview:</strong>{" "}
            </p>
            <div
              style={{
                width: "75%",
                height: "auto",
                padding: 10,
                margin: 10,
                position: "center",
              }}
            >
              <Ratio aspectRatio="16x9">
                <embed src={course.previewURL} />
              </Ratio>
            </div>
            {course.subtitles &&
              course.subtitles.map((subtitle) => (


                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{subtitle.title}</Accordion.Header>
                      <Accordion.Body>
                        <h4>Description: {subtitle.shortDescription}</h4>
                        <h4>Total Hours: {subtitle.totalHours}</h4>     
                        <YouTube videoId={getId(subtitle.videoLink)} opts={opts} onPlay={() => markAsCompleted(subtitle._id)} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
             
             
             ))}

            <h1>
              {" "}
              <b>Excersises</b>{" "}
            </h1>
            <form>
              {course &&
                course.exercises &&
                course.exercises.map((exercise, index) => (
                  <div>
                    <h2>{exercise.question}</h2>
                    <div>


                      <div style={{display:'flex',flexDirection:'row'}}>
                      <input
                        type="radio"
                        value={exercise.options[0]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      <div style={{padding:'5px',color: getColor(submitted, exercise.options[0], exercise.answer, studentAnswersState[exercise.index]),fontWeight: getWeight(submitted, exercise.options[0], exercise.answer, studentAnswersState[exercise.index])}}
                      >{exercise.options[0]}</div> 
                      </div>


                      <div style={{display:'flex',flexDirection:'row'}}>
                      <input
                        type="radio"
                        value={exercise.options[1]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      <div style={{padding:'5px',color: getColor(submitted, exercise.options[1], exercise.answer, studentAnswersState[exercise.index]),fontWeight: getWeight(submitted, exercise.options[1], exercise.answer, studentAnswersState[exercise.index])}}
                      >{exercise.options[1]}</div> 
                      </div>


                      <div style={{display:'flex',flexDirection:'row'}}>
                      <input
                        type="radio"
                        value={exercise.options[2]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      <div style={{padding:'5px',color: getColor(submitted, exercise.options[2], exercise.answer, studentAnswersState[exercise.index]),fontWeight: getWeight(submitted, exercise.options[2], exercise.answer, studentAnswersState[exercise.index])}}
                      >{exercise.options[2]}</div> 
                      </div>



                      <div style={{display:'flex',flexDirection:'row'}}>
                      <input
                        type="radio"
                        value={exercise.options[3]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      <div style={{padding:'5px',color: getColor(submitted, exercise.options[3], exercise.answer, studentAnswersState[exercise.index]),fontWeight: getWeight(submitted, exercise.options[3], exercise.answer, studentAnswersState[exercise.index])}}
                      >{exercise.options[3]}</div> 
                      </div>

                    </div>
                    
                   
                  </div>
                
                ))}
              <input type="button" value="Submit" onClick={handleSubmit} />
              <p style={{fontSize: '40px'}}>{grade}</p>
              <p style={{color: 'red'}}> {message}</p>
            </form>

            <RateCourse course={course} myId="637a356c54c79d632507dc8a" />

            <RateInstructor course={course} myId="637a356c54c79d632507dc8a" />

          </Col>

          <Col sm={3} fixed-top style={{backgroundColor: "#A9A9A9 "}}>


            <p>
              {" "}
              <strong> Instructor: </strong> {course.instructorData.name}
            </p>
            <p>
              {" "}
              <strong> Subject: </strong> {course.subject}
            </p>
            <p>
              {" "}
              <strong> Rating: </strong> {course.overallRating}
            </p>
            <p>
              {" "}
              <strong> Total Hours: </strong> {course.hours} Hours
            </p>

            <ProgressBar animated now={myProgress.data} label={`${(myProgress.data).toString().slice(0,5)}%`} />
           

    <div className="d-grid gap-2">
      <Button variant="danger" size="lg"
      disabled={myProgress.data==100?false:true}
      onClick={handleDownloadCertificate}
      >
        Download Certificate
      </Button>
    </div>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicNotes">
        <Form.Label>Take Some Notes</Form.Label>
        <Form.Control value={note}  onChange={event => setNote(event.target.value)} as="textarea" rows={3} placeholder="Start taking notes..." />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleAddNotes}>
        Submit
      </Button>
      <p style={{color: 'green'}}> {noteMessage}</p>
    </Form>
    <div className="d-grid gap-2">
      <Button variant="danger" size="lg"
     
      onClick={handleDownloadNotes}
      >
        Download Notes
      </Button>
    </div>


    <div className="d-grid gap-2">
      <Button variant="danger" size="lg"
      
      hidden={myCourseReview.text==""?false:true}
      onClick={handleShowAddCourseReview}>
        Review Course
      </Button>
    </div>

    <p hidden={myCourseReview.text==""?true:false}> You reviewed that course: "{myCourseReview.text}"
    
    <BsFillTrashFill onMouseEnter={() => setDeleteCourseReviewIconColor('red')}
        onMouseLeave={() => setDeleteCourseReviewIconColor('')} onClick={handleShowDeleteCourseReview} style={{color: deleteCourseReviewIconColor}} />
    <BsFillPencilFill onMouseEnter={() => setEditCourseReviewIconColor('red')}
        onMouseLeave={() => setEditCourseReviewIconColor('')} onClick={handleShowEditCourseReview} style={{color: editCourseReviewIconColor}} />
    </p>

    
    

    

    <Modal show={showAddCourseReview} onHide={handleCloseAddCourseReview}>
        <Modal.Header closeButton>
          <Modal.Title>Review Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control as="textarea" rows={3} value={tempCourseReview}  onChange={event => setTempCourseReview(event.target.value)} placeholder="Write a review about the course..." />
        </Modal.Body>
        <p style={{color: 'red'}}> {addCourseReviewMessage}</p>
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
        <Form.Control as="textarea" rows={3} value={tempCourseReview}  onChange={event => setTempCourseReview(event.target.value)} placeholder="Edit your review about the course..." />
        </Modal.Body>
        <p style={{color: 'red'}}> {addCourseReviewMessage}</p>
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




















      <div className="d-grid gap-2">
      <Button variant="danger" size="lg"
      
      hidden={myInstReview.text==""?false:true}
      onClick={handleShowAddInstReview}>
        Review Instructor
      </Button>
    </div>

    <p hidden={myInstReview.text==""?true:false}> You reviewed this instructor: "{myInstReview.text}"
    
    <BsFillTrashFill onMouseEnter={() => setDeleteInstReviewIconColor('red')}
        onMouseLeave={() => setDeleteInstReviewIconColor('')} onClick={handleShowDeleteInstReview} style={{color: deleteInstReviewIconColor}} />
    <BsFillPencilFill onMouseEnter={() => setEditInstReviewIconColor('red')}
        onMouseLeave={() => setEditInstReviewIconColor('')} onClick={handleShowEditInstReview} style={{color: editInstReviewIconColor}} />
    </p>

    
    

    

    <Modal show={showAddInstReview} onHide={handleCloseAddInstReview}>
        <Modal.Header closeButton>
          <Modal.Title>Review Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control as="textarea" rows={3} value={tempInstReview}  onChange={event => setTempInstReview(event.target.value)} placeholder="Write a review about the instructor..." />
        </Modal.Body>
        <p style={{color: 'red'}}> {addInstReviewMessage}</p>
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
        <Form.Control as="textarea" rows={3} value={tempInstReview}  onChange={event => setTempInstReview(event.target.value)} placeholder="Edit your review about the instructor..." />
        </Modal.Body>
        <p style={{color: 'red'}}> {addInstReviewMessage}</p>
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



          </Col>
        </Row>
      )}
    </div>
  );
};

export default ITraineeCourse;
