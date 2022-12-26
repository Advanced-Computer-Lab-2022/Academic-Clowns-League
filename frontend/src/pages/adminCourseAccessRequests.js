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


  const grantAccess = async() => {
    const response = await fetch("/api/request/grantAccess?id=" + chosenRequest._id);
    setChosenRequest(null);
  };


  useEffect(() => {
    const fetchRequests = async () => {
    if (chosenRequest == null){
      setShowModal(false);
    }
    else{
      setShowModal(true);
    }
      const response = await fetch("/api/request/getPendingRequests");
      const json = await response.json();
      if (response.ok) {
        setRequests(json);
      }
  };
    fetchRequests();
  },[chosenRequest]);


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
                  <Button variant="outline-danger" onClick={() => setChosenRequest(request)} >Grant Access</Button>{' '}
                  </td>
                </tr>    
      ))}
      </tbody>
    </Table>




    <Modal show={showModal} onHide={() => {setChosenRequest(null)}}>
        <Modal.Header closeButton>
          <Modal.Title>Granting access</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        {chosenRequest &&
        <p> Are you sure you want to grant {chosenRequest.cTraineeName} access to "{chosenRequest.courseTitle}"? </p>
          }

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setChosenRequest(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={grantAccess}>
            Yes, I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>






      </div>




  
  

    );
  };
  
  export default AdminCourseAccessRequests;
  