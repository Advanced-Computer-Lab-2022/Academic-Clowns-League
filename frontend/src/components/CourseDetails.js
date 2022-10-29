const CourseDetails = ({course}) => {
    return (
        <div className="course-details">
            <h3>{course.title}</h3>
            <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Price: </strong>{course.price}</p>
            <p><strong>Hours: </strong>{course.hours}</p>
            <p><strong>Instructor: </strong>{course.instructor}</p>
            <p><strong>Rating: </strong>{course.overallRating}</p>
        </div>
    )
}

export default CourseDetails