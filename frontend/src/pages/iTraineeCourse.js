import { useEffect, useState } from "react";
import Subtitle from "../components/subtitle";
import ITraineeNavbar from "../components/iTraineeNavbar";
import RateCourse from "../components/rateCourse";
import RateInstructor from "../components/rateInstructor";

import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ITraineeCourse = () => {
  //const { id } = useParams();

  //to get the id from  (query, in the URL)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + id);

      const json = await response.json();
      if (response.ok) {
        setCourse(json);
        console.log(json);
        console.log(course);
      }
    };
    fetchCourse();
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
                <Subtitle subtitle={subtitle} key={subtitle._id} />
              ))}
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
            <p>
              {" "}
              <strong> Number of Lessons: </strong> {course.subtitles.length}
            </p>
            <p>
              {" "}
              <strong> Number of Questions: </strong>
              {course.exercises.length}
            </p>

            <RateCourse course={course} myId="637a356c54c79d632507dc8a" />

            <RateInstructor course={course} myId="637a356c54c79d632507dc8a" />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ITraineeCourse;
