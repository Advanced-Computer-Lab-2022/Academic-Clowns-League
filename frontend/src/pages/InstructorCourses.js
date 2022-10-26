import { useEffect, useState } from 'react'
import CourseDetails from '../components/CourseDetails'

const Courses = () => {
    const [courses, setCourses] = useState(null)
    const [price, setPrice] = useState('')
    const [subject, setSubject] = useState('')

    const handleSubmit = async(e) => {
        //console.log(e.target.value)
        e.preventDefault()
        //prevents default action of form button which is submit
        const priceArray = price.split(',')
        //console.log(priceArray)
        const priceValue = {price1: priceArray[0], price2: priceArray[1]};
        //object of price is made and passed to URL
        const response = await fetch(`/api/courses/filterinstprice?${new URLSearchParams(priceValue).toString()}`)
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setCourses(json);
        }
    }

    const handleClick = async() => {
        window.location.reload(true)
    }

    const handleFilter = async(e) => {
        //console.log(e.target.value)
        e.preventDefault()
        //prevents default action of form button which is submit
        //const subjectValue = subject
        const subjectValue = {subject: subject}
        //object of price is made and passed to URL
        const response = await fetch(`/api/courses/filtersub?${new URLSearchParams(subjectValue).toString()}`)
        const json = await response.json()
        //console.log(json)
        if(response.ok){
            setCourses(json);
        }
    }

    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch('/api/courses/instcourses')
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
            <div>
                <form className="filter" onSubmit={handleSubmit}>
                    <h3>Filter by: </h3>
                    <h4>Price</h4>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='0,0'
                    />
                    <label>Free</label>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='6000,7000'
                    />
                    <label>6000 - 7000</label>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='7000,8000'
                    />
                    <label>7000 - 8000</label>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='8000,9000'
                    />
                    <label>8000 - 9000</label>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='9000,10000'
                    />
                    <label>9000 - 10000</label>
                    <input type="radio" 
                            id="price"
                            name="price"
                            onChange= {(e) => setPrice(e.target.value)}
                            value='10000,0'
                    />
                    <label>10000+</label>
                    <button>Apply</button>
                </form>
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
                    <button>Apply</button>
                </form>
                <button onClick={handleClick}>Clear Filter</button>
            </div>
        </div>
    )
}

export default Courses