import { useEffect, useState } from "react";
import Subtitle from "../components/subtitle";
import InstructorNavbar from "../components/instructorNavbar";
import Exercise from "../components/excercise";
import { useNavigate } from "react-router-dom";

import RateCourse from "../components/rateCourse";
import RateInstructor from "../components/rateInstructor";

import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InstructorCourse = () => {
  //const { id } = useParams();

  //to get the id from  (query, in the URL)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [course, setCourse] = useState(null);
  const [grade, setGrade] = useState("");
  const [answersText, setAnswersText] = useState("");
  const navigate = useNavigate();

  //values needed for Excercises
  const StudentAnswers = [];
  var CorrectAnswers = [];
  var ResultDisplay = "";
  var ResultText = "";

  //Handles Change in RadioButton values
  const handleChange = (event) => {
    StudentAnswers[event.target.name] = event.target.value;
    console.log(StudentAnswers);
  };
  //Handles Submit of Exercises.
  const handleSubmit = (event) => {
    CorrectAnswers = [];
    for (let i = 0; i < course.exercises.length; i++) {
      CorrectAnswers.push(course.exercises[i].answer);
    }
    console.log(CorrectAnswers);

    console.log(StudentAnswers);
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
        ResultDisplay +=
          "The following answer is wrong: " +
          StudentAnswers[i] +
          " Should be: " +
          CorrectAnswers[i];
      }
      setAnswersText(ResultDisplay);
    }
    ResultDisplay = (Result / FullMark) * 100;
    setGrade(ResultDisplay);
    console.log(ResultDisplay);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + id);

      const json = await response.json();
      if (response.ok) {
        setCourse(json);

        //console.log(course.exercises);

        if (course) {
          for (let i = 0; i < course.exercises.length; i++) {
            CorrectAnswers.push(course.exercises[i].answer);
          }
          console.log(CorrectAnswers);
        }
      }
    };
    fetchCourse();
  }, []);

  return (
    <div className="">
      <InstructorNavbar />
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
                <Subtitle subtitle={subtitle} key={subtitle._id} />
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
                      <input
                        type="radio"
                        value={exercise.options[0]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      {exercise.options[0]} <br></br>
                      <input
                        type="radio"
                        value={exercise.options[1]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      {exercise.options[1]}
                      <br></br>
                      <input
                        type="radio"
                        value={exercise.options[2]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      {exercise.options[2]}
                      <br></br>
                      <input
                        type="radio"
                        value={exercise.options[3]}
                        name={index}
                        onChange={handleChange}
                      />{" "}
                      {exercise.options[3]}
                    </div>
                  </div>
                ))}
              <input type="button" value="Submit" onClick={handleSubmit} />
            </form>
            <h3>{grade}</h3>
            <h3>{answersText}</h3>
          </Col>

          <Col sm={3} fixed-top style={{ backgroundColor: "#A9A9A9 " }}>
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
          </Col>
        </Row>
      )}

      <button onClick={() => navigate(`/addPromotion?id=${id}`)}>
        {" "}
        Add Promotion{" "}
      </button>


      <Button variant="danger" size="lg"
      onClick={() => navigate(`/courseRatingsAndReviews?id=${id}`)}>
        View ratings and reviews
      </Button>









    </div>
  );
};

export default InstructorCourse;
