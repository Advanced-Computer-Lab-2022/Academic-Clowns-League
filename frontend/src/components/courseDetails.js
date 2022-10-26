const CourseDetails = ({ course }) => {

    return (
      <div className="course-details">
        <h4>{course.title}</h4>
        <p><strong>Total hours: </strong>{course.hours}</p>
        <p><strong>Rating: </strong>{course.overallRating}</p>
        <p><strong>Price: </strong>{course.price}</p>
        <p><strong>Subject: </strong>{course.subject}</p>
        <p><strong>instructor: </strong>{course.Instructor}</p>
      </div>
    )
  }
  
  export default CourseDetails