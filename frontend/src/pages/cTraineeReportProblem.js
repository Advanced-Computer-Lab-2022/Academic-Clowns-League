import { useEffect, useState } from "react";
import CTraineeNavbar from "../components/cTraineeNavbar";
import ReportProblem from "../components/reportProblem";


const CTraineeReportProblem = () => {  

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    useEffect(() => {
      }, []);
     

      {
        return (
          <div className="">
            <CTraineeNavbar />
            <ReportProblem  key={id} cid={id}/>
            
    
          </div>
        );
      }

};







export default CTraineeReportProblem;