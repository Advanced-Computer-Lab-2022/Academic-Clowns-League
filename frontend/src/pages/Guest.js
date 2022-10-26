import {Link} from 'react-router-dom'

const Guest = () => {

    return (
        <div className="viewCourses">
            <Link to="/courses"><button>View all Courses</button></Link>
        </div>
        
    )
}

export default Guest