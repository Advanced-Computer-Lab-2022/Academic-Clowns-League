 import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import SubtitleMap from "./subtitleMap";

const CourseDetailsCTrainee = ({ course }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()
  const [myCourse, setMyCourse] = useState("")
  let requestMessage = ''
  let button = 'Request Access'
  if(myCourse.register === true){
    button = 'Go to Course'
  }
  const request = myCourse.request
  if(request == true){
    requestMessage = 'Your request to access this course is pending'
  }
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const refresh = () => {
    window.location.reload()
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response = await fetch(`api/request/requestAccess/?id=${course._id}`);
      const json = await response.json();
      if(response.status == 200){
refresh()
      }
  }

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`api/ctrainee/getcourseinfo/?id=${course._id}`);
      const json = await response.json();
      if (response.status == 200) {
        setMyCourse(json);
      }
    };
    fetchCourse();
  }, []);

  return (
    <div className="course-details" style={{width: 810}}>
      <div className="course-video">
      <iframe width="100" height="100" src={myCourse.previewURL} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="course-info">
      <h4>{myCourse.title}</h4>

      <p style={{display: (myCourse.hours)>=60?"true":"none"}}> <strong>Total hours: </strong> {Math.floor(myCourse.hours/60)}hrs{myCourse.hours%60}min </p>
      <p style={{display: (myCourse.hours)>=60?"none":"true"}}> <strong>Total hours: </strong> {myCourse.hours%60}min </p>

      <p>
        <strong>Rating: </strong>
        {myCourse.overallRating}
      </p>
      <p>
          <strong>Subject: </strong>
          {myCourse.subject}
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
        {myCourse.subtitles &&
          myCourse.subtitles.map((subtitle) => (
            <SubtitleMap subtitle={subtitle} key={subtitle._id} />
          ))}
        <li>
          {myCourse.title} Exercises - Total Questions: {course.exercises.length}
        </li>
        </ol>
        </p>
      </div>
      <div className="mydetails-buttons">
      <div className="error" style={{color: "red", fontSize: "small", marginBottom: 8, marginLeft: 80}}>{requestMessage}</div>
      <MDBBtn rounded
        style={{
          backgroundColor: isActive ? "#E0E0E0" : "",
          color: isActive ? "black" : "",
          height: 35,
          textAlign: "center",
          borderColor: isActive ? "black" : "#B71C1C",
          marginLeft: 65,
        }}
        onClick={handleClick}
        color="danger"
      >
        View Details
      </MDBBtn>
      <MDBBtn rounded
        style={{
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#B71C1C",
          marginLeft: 15
        }}
        onClick={(e) => {
          if(myCourse.register == true){
            navigate(`/cTraineeCourse?id=${myCourse._id}`)
          }
          else{
            handleSubmit(e)
          }
        }}
        color="danger"
        disabled={request}
      >
        {button}
      </MDBBtn>
      </div>
      </div>
    </div>
  );
};

export default CourseDetailsCTrainee;
