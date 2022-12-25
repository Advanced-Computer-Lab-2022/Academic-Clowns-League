import { useEffect, useState } from "react";


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AdminNavbar from "../components/adminNavbar";

const AdminCourseAccessRequests = () => {

  const [requests, setRequests] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [chosenRequest, setChosenRequest] = useState(null);
  let numberOfRequests = 0;


  const grantAccess = (request) => {
    setChosenRequest(request);
    setShowModal(true);
  };
  

  const handleConfirmGrantAccess = async() => {
    const response = await fetch("/api/request/grantAccess?id=" + chosenRequest._id);


    const response2 = await fetch("/api/request/getPendingRequests");
    setRequests(response2);
    setChosenRequest(null);
    setShowModal(false);
  };



  useEffect(() => {
    const fetchRequests = async () => {
      const response = await fetch("/api/request/getPendingRequests");
      const json = await response.json();
      if (response.ok) {
        setRequests(json);
      }
    };
    fetchRequests();
  }, []);


    return (
      <div>
        <AdminNavbar/>
        <h1 style={{ fontSize: 36, margin: 10 }}>The following corporate trainees are requesting access to those courses</h1>
        <br></br>
        <Table className="text-center" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Trainee Name</th>
          <th>Course Title</th>
          <th >Action</th>
        </tr>
      </thead>

      <tbody>
      {requests &&
          requests.map((request) => (
                <tr>
                  <div hidden> {numberOfRequests++}</div>
                  <td>{numberOfRequests}</td>
                  <td>{request.cTraineeName}</td>
                  <td>{request.courseTitle}</td>
                  <td>
                  <Button variant="outline-danger" onClick={() => grantAccess(request)} >Grant Access</Button>{' '}
                  </td>
                </tr>    
      ))}
      </tbody>
    </Table>




    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Granting access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> Are you sure you want to grant this trainee access to the course? </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmGrantAccess}>
            Yes, I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>






      </div>




  
  

    );
  };
  
  export default AdminCourseAccessRequests;
  