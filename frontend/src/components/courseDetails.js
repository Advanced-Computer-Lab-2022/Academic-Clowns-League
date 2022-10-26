import {useState} from 'react';

const CourseDetails = ({ course }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

    return (
      
      <div className="course-details">
        <h4>{course.title}</h4>
        <div style={{
          display: isActive ? 'block' : 'none' 
        }}>
        <p><strong>Total hours: </strong>{course.hours}</p>
        <p><strong>Rating: </strong>{course.overallRating}</p>
        <p><strong>Price: </strong>{course.price}</p>
        <p><strong>Subject: </strong>{course.subject}</p>
        <p><strong>instructor: </strong>{course.Instructor}</p>
        </div>
        <button
        style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >View Details</button>
      </div>
    )
  }

 

  
  export default CourseDetails