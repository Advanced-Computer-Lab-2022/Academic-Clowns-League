import { useEffect, useState } from "react"

// components
import CourseDetails from "../components/courseDetails"
import CourseForm from "../components/CourseForm"


const Home = () => {
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const fetchCourses= async () => {
      const response = await fetch('/api/courses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="courses">



        {courses && courses.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
      </div>
      <CourseForm/>
    </div>
  )
}

export default Home