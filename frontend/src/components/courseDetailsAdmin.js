import { useState } from "react";
import SubtitleMap from "./subtitleMap";
import InputGroup from "react-bootstrap/InputGroup";

const CourseDetailsAdmin = ({ course }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="course-details">
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>

      <h4>{course.title}</h4>

      <p>
        <strong>Total hours: </strong>
        {course.hours}
      </p>
      <p>
        <strong>Rating: </strong>
        {course.overallRating}
      </p>
      <div
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        <p>
          <strong>Subject: </strong>
          {course.subject}
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
      <button
        style={{
          backgroundColor: isActive ? "salmon" : "",
          color: isActive ? "white" : "",
        }}
        onClick={handleClick}
      >
        View Details
      </button>
    </div>
  );
};

export default CourseDetailsAdmin;
