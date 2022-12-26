import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

const AllProblems = ({id, content, followUp, status, course, email, rid, cid, type}) => {
    const [b1, setB1] = useState("");
    const [b2, setB2] = useState("none");
    const [b3, setB3] = useState("none");
    const [show, setShow] = useState(false);
    let showTab="none"
    let buttonState="";
    let buttonName="";
    if(status=="Resolved"){
        buttonState="none";
    }
    else if(status=="Unresolved"){
        buttonState="";
        buttonName="Pending"
    }
    else{
        buttonState="";
        buttonName="Resolved"
    }
    if(followUp!=""){
        showTab="";
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const bb1 = () => {setB1("");
                       setB2("none")
                       setB3("none")

                                    }
    const bb2 = () => {setB2("");
                       setB1("none")
                       setB3("none")
                 }

    const bb3 = () => {setB2("none");
                       setB1("none")
                       setB3("")
                 }

                 const changeStatus = async () => {
                    const response = await fetch(
                        "/api/problem/problemStatus/?id=" +
                    id +
                    "&status=" +
                    buttonName ,
                      { method: "PATCH" }
                    );
                    if(response.status==200) {
                      handleShow();
                  }
                  };
                  

                  const close = () => {
                    window.location.reload();
            
                  }

    return(
      <div className="">


<Card>
<link href='https://css.gg/bell.css' rel='stylesheet'/>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first" onClick={bb1}><p>content</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#second" onClick={bb2}><p>details</p></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{display:showTab}}>
            <Nav.Link href="#third" onClick={bb3}>
              <p style={{color:"firebrick"}}>
                FollowUp   <i class="gg-bell" style={{position:"relative", left:70, bottom:12}} ></i> </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body style={{display:b1}}>
        <Card.Text>
        {content}
        </Card.Text>
        <Button variant="danger" style={{display:buttonState}} onClick={changeStatus}>mark as {buttonName}</Button>
      </Card.Body>
     
     <Card.Body style={{display:b2}}>
        <Card.Text>
        <p>
          <strong> type: </strong>
          {type}
        </p>
        <p>
          <strong> Course's name: </strong>
          {course}
        </p>
        <p>
          <strong> Course's id: </strong>
          {cid}
        </p>
        <p>
          <strong> Reporter's email: </strong>
          {email}
        </p>
        <p>
          <strong> Reporter's id: </strong>
          {rid}
        </p>
         </Card.Text>
      </Card.Body>

      <Card.Body style={{display:b3}}>
        <Card.Text>
        {followUp}
        </Card.Text>
      </Card.Body>

    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
        marked to {buttonName} successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


    ) 
}

export default AllProblems ;