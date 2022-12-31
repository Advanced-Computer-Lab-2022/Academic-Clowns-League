import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

const AllProblems = ({id, content, followUp, status, course, email, type}) => {
    const [b1, setB1] = useState("");
    const [b2, setB2] = useState("none");
    const [b3, setB3] = useState("none");
    const [show, setShow] = useState(false);
    const [buttonName, setButtonName] = useState("")
    let showTab="none"
    let buttonState="";
    //let buttonName="";
    let unres="none";
    let unresButton = "Resolved";

    if(status=="Resolved"){
        buttonState="none";
    }
    else if(status=="Unseen"){
        buttonState="";
        //buttonName = "Pending"
        unres="";
    }
    else{
      //buttonName="Resolved"
        buttonState="";
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
                    "&status=Pending",
                      { method: "PATCH" }
                    );
                    if(response.status==200) {
                      setButtonName("pending")
                      handleShow();
                  }
                  };

                  const unresStatus = async () => {
                    const response = await fetch(
                        "/api/problem/problemStatus/?id=" +
                    id +
                    "&status=Resolved",
                      { method: "PATCH" }
                    );
                    if(response.status == 200) {
                      setButtonName("resolved")
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
        <div style={{display:"flex"}}>
        <Button variant="danger" style={{display:buttonState}} onClick={changeStatus}>Mark as Pending</Button>
        <Button variant="danger" style={{display:unres, marginLeft:20}} onClick={unresStatus}>Mark as Resolved</Button>
        </div>
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
          <strong> Reporter's email: </strong>
          {email}
        </p>
       
         </Card.Text>
      </Card.Body>

      <Card.Body style={{display:b3}}>
        <Card.Text>
        {followUp}
        </Card.Text>
      </Card.Body>

    </Card>
    <p> {" "}</p>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
        Marked to {buttonName} successfully.
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