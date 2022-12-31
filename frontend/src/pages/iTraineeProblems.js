import { useEffect, useState } from "react";
import MyCoursesITraineeNav from "../components/myCoursesITraineeNav";
import MyProblem from "../components/myProblem";
import Table from 'react-bootstrap/Table';

const ITraineeProblems = () => {  
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
            <MyCoursesITraineeNav />
        
            {myProblems &&
              myProblems.map((problem) => (
                <MyProblem course={problem.course.title} status={problem.status} content={problem.content} followUp={problem.followUp}
                key={problem._id} id={problem._id}/>
              ))}
              
          </div>
        );
      }

};

export default ITraineeProblems;