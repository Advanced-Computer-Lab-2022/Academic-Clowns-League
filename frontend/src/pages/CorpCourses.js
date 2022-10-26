import { useEffect, useState } from 'react'
import CourseDetails from '../components/CourseDetails'

const Courses = () => {
    const [courses, setCourses] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')

    const handleFilter = async(e) => {
        //console.log(e.target.value)
        e.preventDefault()
        //prevents default action of form button which is submit
        //const subjectValue = subject
        const ratingArray = rating.split(',')
        const subRate = {subject: subject, rating1: ratingArray[0], rating2: ratingArray[1]}
        console.log(subRate)
        //object of price is made and passed to URL
        const response = await fetch(`/api/courses/filtersubrat?${new URLSearchParams(subRate).toString()}`)
        const json = await response.json()
        //console.log(json)
        if(response.ok){
            setCourses(json);
        }
    }

    const handleClick = async() => {
        window.location.reload(true)
    }

    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch('/api/courses/')
            //fetch from that route using controller function
            const json = await response.json();

            if(response.ok){
                setCourses(json)
            }
        }
    getCourses();
    },[])

    return(
        <div className="courses">
            <div className="all-courses">
                {courses && courses.map((course) => (
                    <CourseDetails key={course._id} course={course}/>
                ))}
            </div>
            <form className='filter' onSubmit={handleFilter}>
                <h4>Subject</h4>
                <input type="checkbox" 
                        id="subject"
                        name="subject"
                        onChange= {(e) => setSubject(e.target.value)}
                        value='Computer Science'
                />
                <label>Computer Science</label>
                <input type="checkbox" 
                        id="subject"
                        name="subject"
                        onChange= {(e) => setSubject(e.target.value)}
                        value='Digital Media'
                />
                <label>Digital Media</label>
                <input type="checkbox" 
                        id="subject"
                        name="subject"
                        onChange= {(e) => setSubject(e.target.value)}
                        value='Lab Programming'
                />
                <label>Lab Programming</label>
                <h4>Rating</h4>
                <input type="checkbox" 
                        id="rating"
                        name="rating"
                        onChange= {(e) => setRating(e.target.value)}
                        value='0,3'
                />
                <label>0-3</label>
                <input type="checkbox" 
                        id="rating"
                        name="rating"
                        onChange= {(e) => setRating(e.target.value)}
                        value='4,7'
                />
                <label>4-7</label>
                <input type="checkbox" 
                        id="rating"
                        name="rating"
                        onChange= {(e) => setRating(e.target.value)}
                        value='8,10'
                />
                <label>8-10</label>
                <button>Apply</button>
            </form>
            <button onClick={handleClick}>Clear Filter</button>
        </div>
        
    )
}