import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ReportProblem = ({cid}) => {
    const [other, setOther] = useState("none");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");
    const [success, setSuccess] = useState("none");
    const [checkT, setCheckT] = useState("none");
    const [checkC, setCheckC] = useState("none");
    const [show, setShow] = useState(false);


   
    const onChangeValue = (e) => {
        if(e.target.value=="Other"){
        setOther("")
        setType("")
    }
      else if(e.target.value=="Financial"){
        setOther("none")
        setSuccess("none")
        setType("Financial")
    }
    else{
        setOther("none")  
        setSuccess("none") 
        setType("Technical")
    }

      };
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
      const specify = () => {
        if(type!=""){
          setSuccess("");
          setCheckT("none");
        }
        else{
          setCheckT("");
        }
      }
      const report = () => {
        if(content==""||type==""){
        if(content=="" && type!=""){
            setCheckC(content)
            setCheckT("none")
          }

        if(type==""&&content!=""){
          setCheckT(type)
          setCheckC("none")
        }
        if(type==""&&content==""){
          setCheckT(type)
          setCheckC(content)
        }
    }
        
          else{
            reportFinal();
          }
       
   }

      const reportFinal = async () => {
        const response = await fetch(
            "/api/problem//reportProblem/?cid=" +
        cid +
        "&type=" +
        type +
        "&content=" +
        content,
          { method: "POST" }
        );
        if(response.status==200) {
            handleShow();
        }
       
      };

      const close = () => {
        window.location.reload();

       }



    return (
        <div className="">

  <Form  style={{ width:600,position: "absolute", top:100, left:50}}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <p style={{color:"firebrick", display:checkT}} >
        please specify type
      </p>
    <Form.Select aria-label="Default select example" onChange={onChangeValue}>
    <option>Please select type of inconvencience</option>
    <option value="Technical">Technical</option>
    <option value="Financial">Financial</option>
    <option value="Other">Other</option>
  </Form.Select>
  </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ display:other}}>
      <Form.Label>Please specify a type:</Form.Label>
      <Form.Control as="textarea" rows={1} value={type} onChange={(e) => setType(e.target.value)}/>
       <p style={{color:"firebrick", display:success}} >
        type has been specified
      </p>
        <p>
        
      </p>
      <Button variant="danger" onClick={specify}>Specify</Button>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Sorry for the inconvencience. Please enter the details:</Form.Label>
      <Form.Control as="textarea" rows={6} value={content} onChange={(e) => setContent(e.target.value)} />
      <p style={{color:"firebrick", display:checkC}} >
        please specify your inconvencience in the given field
      </p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Button variant="danger" onClick={report}>Report</Button>
    </Form.Group>
  </Form>

  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
        problem registered successfully. your inconvenience will be resolved shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
        </div>
      );
}
export default ReportProblem ;