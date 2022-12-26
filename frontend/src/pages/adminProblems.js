import { useEffect, useState } from "react";
import AdminNavbar from "../components/adminNavbar";
import AllProblems from "../components/allProblems";
import Accordion from 'react-bootstrap/Accordion';



const AdminProblems = () => {

  const [allProblemsUR, setAllProblemsUR] = useState(null);
  const [allProblemsR, setAllProblemsR] = useState(null);
  const [allProblemsP, setAllProblemsP] = useState(null);

  useEffect(() => {
      const fetchAllProblemsUR = async () => {
        const response = await fetch("/api/problem/allProblemsUR");
        const json = await response.json();
        if (response.ok) {
          setAllProblemsUR(json);
        }
      };

      const fetchAllProblemsR = async () => {
        const response = await fetch("/api/problem/allProblemsR");
        const json = await response.json();
        if (response.ok) {
          setAllProblemsR(json);
        }
      };

      const fetchAllProblemsP = async () => {
        const response = await fetch("/api/problem/allProblemsP");
        const json = await response.json();
        if (response.ok) {
          setAllProblemsP(json);
        }
      };
      fetchAllProblemsUR();
      fetchAllProblemsR();
      fetchAllProblemsP();
    }, []);

    {

    
  return (
    <div>
      <AdminNavbar/>
      

<Accordion style={{width:800, position:"relative", left:300}}>
<Accordion.Item eventKey="0"  >
  <Accordion.Header>Unresolved problems</Accordion.Header>
  <Accordion.Body>
  {allProblemsUR &&
              allProblemsUR.map((problem) => (
                <AllProblems course={problem.course.title} status={problem.status} content={problem.content} followUp={problem.followUp}
                key={problem._id} id={problem._id} rid={problem.reporterId} email={problem.reporter.email} cid={problem.courseId}  type={problem.type}/>
                 ))}
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Pending problems</Accordion.Header>
  <Accordion.Body>
  {allProblemsP &&
              allProblemsP.map((problem) => (
                <AllProblems course={problem.course.title} status={problem.status} content={problem.content} followUp={problem.followUp}
                key={problem._id} id={problem._id} rid={problem.reporter._id} email={problem.reporter.email} cid={problem.courseId}
                type={problem.type}/>
                 ))}
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
  <Accordion.Header>Resolved problems</Accordion.Header>
  <Accordion.Body>
  {allProblemsR &&
              allProblemsR.map((problem) => (
                <AllProblems course={problem.course.title} status={problem.status} content={problem.content} followUp={problem.followUp}
                key={problem._id} id={problem._id} rid={problem.reporter._id} email={problem.reporter.email} cid={problem.courseId}  type={problem.type}/>
                 ))}
  </Accordion.Body>
</Accordion.Item>
</Accordion>
</div>
  );
}
};

export default AdminProblems;
