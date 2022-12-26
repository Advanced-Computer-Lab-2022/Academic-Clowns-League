import { useEffect, useState } from "react";
import InstructorNavbar from "../components/instructorNavbar";
import MyProblem from "../components/myProblem";

const InstructorProblems = () => {  
    const [myProblems, setMyProblems] = useState(null);

    useEffect(() => {
        const fetchMyProblems = async () => {
          const response = await fetch("/api/problem/myProblems");
          const json = await response.json();
          if (response.ok) {
            setMyProblems(json);
          }
        };
        fetchMyProblems();
      }, []);

      {
        return (
          <div className="">
            <InstructorNavbar />
            {myProblems &&
              myProblems.map((problem) => (
                <MyProblem course={problem.course.title} status={problem.status} content={problem.content} followUp={problem.followUp}
                key={problem._id} id={problem._id}/>
                 ))}
    
          </div>
        );
      }

};

export default InstructorProblems;