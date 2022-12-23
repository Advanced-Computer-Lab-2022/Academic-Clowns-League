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
  const [notes, setNotes] = useState('');



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

  


  const handleChangeNotes = event => {
    setNotes(event.target.value);

    console.log('Notes:', event.target.value);
  };

  const handleAddNotes = async(event) => {
    event.preventDefault();
    const noteJson = { notes};
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


  useEffect(() => {
    Promise.all([
      fetch("/api/courses/openMyCourse/?id=" + id),
      fetch("/api/courses/getMyProgress/?courseId=" +id)
    ]).then(([resCourse, resMyProgress])=>
    Promise.all([resCourse.json(),resMyProgress.json()])
    ).then(([dataCourse, dataMyProgress]) =>
    {

      setCourse(dataCourse);
      setMyProgress(dataMyProgress);
      console.log("USEEFFECT");
    });
  }, []);





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
        <Form.Control onChange={handleChangeNotes} type="text" placeholder="Start taking notes..." />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleAddNotes}>
        Submit
      </Button>
    </Form>
    

          </Col>
        </Row>
      )}
    </div>
  );
};

export default ITraineeCourse;
