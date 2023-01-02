import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';


const MyProblem = ({ id, course, content, status, followUp }) => {
    const [show, setShow] = useState(false);
    const [fText, setFText] = useState("");

    const [show2, setShow2] = useState(false);
    const [target, setTarget] = useState(null);
    const [show3, setShow3] = useState(false);
    const ref = useRef(null);
  
    const [one, setOne] = useState("none");
   ;
    
   let pending = "none";
   let unseen = "none";
  

   if(status=="Pending"){
     pending="";
   }

   if(status=="Unseen"){
    unseen="";
 }

   

    let buttonState="";
    let fState="";
    if(followUp!=""){
        buttonState="none"
    }
    else{
        buttonState=""
    }

    if(followUp!=""){
        fState=""
    }
    else{
        fState="none"
    }
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const confirm = (event) => {
      if(fText==""){
        setOne("");
        setShow2(!show2);
        setTarget(event.target);
  }
      
        else{
          handleSubmit(event);
         
        }
     
 }
    const handleSubmit = async (event) => {
        const response = await fetch(
            "/api/problem/problemFollowUp/?id=" +
        id +
        "&comment=" +
        fText ,
          { method: "PATCH" }
        );
        if(response.status==200){
          setOne("none");
          setShow(!show);
          handleShow3();
          
        }
       
      };
      const close2 = () => {
        window.location.reload();
        
      }


    return(
      <div>
<body ref={ref} >
<Card className="text-center" style={{width:800 ,height:200, position:"relative", left:193}}  >
      <Card.Header><Badge pill bg="danger" style={{display:unseen}}>
        {status}
      </Badge> <Badge pill bg="warning" text="dark" style={{display:pending}}>
        {status}
      </Badge></Card.Header>
      <Card.Body>
        <Card.Title> {course}</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
        <Button variant="danger" style={{display:buttonState}} onClick={handleShow}>Follow up</Button>
      </Card.Body>
      <Card.Footer className="text-muted" style={{display:fState}}> Follow Up: {followUp}</Card.Footer>
    </Card>
    <p> {" "}</p>
    

    <Offcanvas show={show} placement="top" onHide={handleClose} >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title > </Offcanvas.Title>
          <Form.Control as="textarea" rows={6} placeholder="Please enter your follow up" style={{width:500 ,height:85}} 
          value={fText} onChange={(e) => setFText(e.target.value)} />
          <Button variant="danger"  style={{position:"absolute", right:550, top:110}} onClick={confirm} >Confirm</Button>
          <Overlay
        show={show2}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" style={{display:one}}>Please enter your follow up in the given field</Popover.Header>
        </Popover>
      </Overlay>
        </Offcanvas.Header>
        
        <Offcanvas.Body >
        </Offcanvas.Body>
      </Offcanvas>

      
 
  </body>

  <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
      Follow Up registered successfully
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={close2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

  </div>




    ) 
}

export default MyProblem ;
