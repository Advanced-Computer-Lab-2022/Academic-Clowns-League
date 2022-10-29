import {Link} from 'react-router-dom'

const Instructor = () => {

    return (
        <div className="viewCourses">
            <Link to="/courses"><button>View all Courses</button></Link>
            <Link to="/mycourses"><button>View my Courses</button></Link>
        </div>
        
    )
}

export default Instructor