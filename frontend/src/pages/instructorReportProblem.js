import { useEffect, useState } from "react";
import InstructorNavbar from "../components/instructorNavbar";
import ReportProblem from "../components/reportProblem";


const InstructorReportProblem = () => {  

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    useEffect(() => {
      }, []);
     

      {
        return (
          <div className="">
            <InstructorNavbar />
            <ReportProblem  key={id} cid={id}/>
            
    
          </div>
        );
      }

};







export default InstructorReportProblem;