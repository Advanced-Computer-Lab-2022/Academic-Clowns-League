import { useState } from "react";
import SubtitleMap from "./subtitleMap";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

const MyCourseDetailsCTrainee = ({ course }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="course-details">
      <div className="course-video">
      <iframe width="100" height="100" src={course.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{course.title}</h4>

      <p style={{display: (course.hours)>=60?"true":"none"}}> <strong>Total hours: </strong> {Math.floor(course.hours/60)}hrs{course.hours%60}min </p>
      <p style={{display: (course.hours)>=60?"none":"true"}}> <strong>Total hours: </strong> {course.hours%60}min </p>

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
      <div className="mydetails-buttons">
      <MDBBtn rounded
        style={{
          backgroundColor: isActive ? "#607D8B" : "",
          color: isActive ? "white" : "",
          height: 35,
          textAlign: "center",
          marginLeft: 65,
        }}
        onClick={handleClick}
        color="danger"
      >
        View Details
      </MDBBtn>

      <MDBBtn rounded
        style={{
          color: isActive ? "white" : "",
          height: 35,
          textAlign: "center",
          marginLeft: 15,
        }}
        onClick={() => navigate(`/cTraineeCourse?id=${course._id}`)} color="danger">
        Go to Course
      </MDBBtn>
      </div>
      </div>
    </div>
  );
};

export default MyCourseDetailsCTrainee;
