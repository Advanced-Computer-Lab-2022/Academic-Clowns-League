import { useEffect, useState } from "react";
import ITraineeNavbar from "../components/iTraineeNavbar";
import ReportProblem from "../components/reportProblem";


const ITraineeReportProblem = () => {  

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    useEffect(() => {
      }, []);
     

      {
        return (
          <div className="">
            <ITraineeNavbar />
            <ReportProblem  key={id} cid={id}/>
            
    
          </div>
        );
      }

};







export default ITraineeReportProblem;