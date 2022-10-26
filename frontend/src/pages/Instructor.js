import {Link} from 'react-router-dom'

const Instructor = () => {

    /*const handleClick = () => {
        window.location.href =''
    }*/

    return (
        <div className="viewCourses">
            <Link to="/courses"><button>View all Courses</button></Link>
        </div>
    )
}

export default Instructor