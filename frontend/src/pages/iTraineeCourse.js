
import { useEffect, useState } from "react";
import Subtitle from "../components/subtitle";
import ITraineeNavbar from "../components/iTraineeNavbar";
import Exercise from "../components/excercise";



const ITraineeCourse = () => {
  //const { id } = useParams();

  //to get the id from  (query, in the URL)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  


  const [course, setCourse] = useState(null);

//values needed for Excercises
  const StudentAnswers = [];
  var CorrectAnswers = [];
  var ResultDisplay = 0;
  var ResultText = '';
  
//Handles Change in RadioButton values 
  const handleChange = (event) => {
    StudentAnswers[event.target.name]=event.target.value;
    console.log(StudentAnswers);
    
   
  };
  //Handles Submit of Exercises.
  const handleSubmit = (event) => {

    CorrectAnswers = [];
    for (let i = 0; i < course.exercises.length; i++) {
      CorrectAnswers.push(course.exercises[i].answer);
      
    }
    console.log(CorrectAnswers);

    console.log(StudentAnswers);
    var Result = 0;
    const FullMark = CorrectAnswers.length;


    for(let i=0;i<CorrectAnswers.length;i++){
      if(StudentAnswers[i]==CorrectAnswers[i]){
        Result++;
        console.log("true");
      }
      else{
        console.log('The following answer is wrong: '+ StudentAnswers[i]+" Should be: "+CorrectAnswers[i]);
        ResultDisplay += ('The following answer is wrong: '+ StudentAnswers[i]+" Should be: "+CorrectAnswers[i]);
      }
    }
     ResultDisplay = Result/FullMark *100;
    console.log(ResultDisplay);
 

    

  };
  

  
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + id);


      const json = await response.json();
      if (response.ok) {
        setCourse(json);
        
        console.log(course.exercises);
        

        for (let i = 0; i < course.exercises.length; i++) {
          CorrectAnswers.push(course.exercises[i].answer);
          
        }console.log(CorrectAnswers);
      }
      
    };
    fetchCourse();
    
    
   
    
  }, []);
   

  
  return (
    <div className="">
      <ITraineeNavbar />
      <p> ITrainee course, ID: {id}</p>




        {course && course.subtitles && course.subtitles.map((subtitle) => (
            <Subtitle subtitle={subtitle} key={subtitle._id} />
          ))}
          <h1> <b>Excersises</b> </h1>
          <form>
          {course && course.exercises && course.exercises.map((exercise,index) => (
          
          <div>
          <h2>{exercise.question}</h2>
          <div>
            
            <input type="radio" value= {exercise.options[0]} name = {index} onChange={handleChange} />  {exercise.options[0]} <br></br>
            <input type="radio" value= {exercise.options[1]} name = {index} onChange={handleChange} />  {exercise.options[1]}<br></br>
            <input type="radio" value= {exercise.options[2]} name = {index}  onChange={handleChange} />  {exercise.options[2]}<br></br>
            <input type="radio" value= {exercise.options[3]} name = {index} onChange={handleChange} />  {exercise.options[3]}
            
          </div>
        </div>
            
          ))}
          <input type="button" value="Submit" onClick={handleSubmit} />
          </form>
          <h3>{ResultDisplay}</h3>
    </div>
  );
}


//<CourseDetails course={course} key={course._id} />

// {course && course.hours}  is explained in full react tutorial #17

 //<h2>Blog details - { id }</h2>



 /*
  <div className="courses">
        {course &&
          course.map((course) => (
            <CourseDetails course={course} key={course._id} />
          ))}
      </div>

 */
export default ITraineeCourse;