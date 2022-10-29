import { useState , useEffect} from 'react'
import CourseDetails from "../components/courseDetails"

const SearchAllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('') //one for each value the user will write
  const [courses, setCourses] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault() //to prevent the default action which is refreshing the page



    //DON'T CALL THE CONST BELOW searchTerm PLEASE
    const searchTerm2 = {searchTerm} //a dummy obj i'll use in backend
    //const response = await fetch('/api/courses/63598f85fb000a4726c4e5d8')
    const response = await fetch(`/api/courses/searchAllCourses?${new URLSearchParams(searchTerm2).toString()}`)
   
    const json = await response.json()
    //console.log(json);
    setCourses(json);

   
    /* 
    if(response.ok){
        setCourses(response);
    }
    else {
        console.log('not okay')

    } */
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





  return (

    <div className="courses">
    



    <form className="create" onSubmit={handleSubmit}> 
      <h3>Search</h3>

      <label>Enter your search term:</label>
      <input 
        id="searchTerm"
        name="searchTerm"
        placeholder="Search"
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)} 
        
      />

      <button>GO</button>
      
    </form>

    <div className="all-courses">
        {courses!=null && courses.map((course) => (
            <CourseDetails key={course._id} course={course}/>
        ))}
    </div>
    </div>
  )
}

export default SearchAllCourses
//this was after the button:    {error && <div className="error">{error}</div>}