import { useEffect, useState } from "react";
import MyCoursesITraineeNav from "../components/myCoursesITraineeNav";
import ReportProblem from "../components/reportProblem";


const ITraineeReportProblem = () => {  

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    useEffect(() => {
      }, []);
     

      {
        return (
          <div className="">
            <MyCoursesITraineeNav />
            <ReportProblem  key={id} cid={id}/>
            
    
          </div>
        );
      }

};







export default ITraineeReportProblem;