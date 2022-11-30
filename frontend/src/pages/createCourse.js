import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
    const [title,setTitle] = useState('')
    const [hours,setHours] = useState('')
    const [subject,setSubject] = useState('')
    const [price,setPrice] = useState('')
    const [discount,setDiscount] = useState('0')
    const [discountValidUntil,setDiscountValidUntil] = useState('')
    const [summary,setSummary] = useState('')
    const [previewURL,setPreviewURL] = useState('')
    const [error, setError] = useState(null);
    const [courseData, setCourse] = useState(null);
    const [popup, setPop] = useState(false);

    const navigate = useNavigate();

    const closePopup = async () => {
        setPop(false);
        const response = await fetch("/api/courses/deletecourse/?id=" + courseData._id,{
            method: "DELETE"
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if(response.ok){
            setTitle('')
            setHours('')
            setSubject('')
            setPrice('')
            setDiscount('')
            setDiscountValidUntil('')
            setSummary('')
            setPreviewURL('')
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPop(!popup);
        const course = {
            title,
            hours,
            subject,
            price,
            discount,
            discountValidUntil,
            summary,
            previewURL,
            }
            const response = await fetch ("/api/courses/",{
                method: 'POST',
                body:JSON.stringify(course),
                headers: {
                    'Content-Type':'application/json'
                }
            })

            const json = await response.json()
            setCourse(json)

            if (!response.ok) {
                setError(json.error);
            }
            if (response.ok){
                setTitle('')
                setHours('')
                setSubject('')
                setPrice('')
                setDiscount('')
                setDiscountValidUntil('')
                setSummary('')
                setPreviewURL('')
                setError(null);
                console.log("new course added", json);
            }
    }


    return(
        <>
        <InstructorNavbar />
        <br></br>
        <h3>Enter Course Details - fields followed by * are required</h3><br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title*"
                className="mb-3"
              >
        <Form.Control type="text" placeholder="Title*" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Subject*">
        <Form.Control type="text" placeholder="Subject*" value={subject} onChange = {(e) => setSubject(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Hours*">
        <Form.Control type="text" placeholder="Hours*" value={hours} onChange = {(e) => setHours(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Price*">
        <Form.Control type="text" placeholder="Price*" value={price} onChange = {(e) => setPrice(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscount" label="Discount">
        <Form.Control type="text" placeholder="Discount" value={discount} onChange = {(e) => setDiscount(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscountVU" label="Discount Valid Until">
        <Form.Control type="text" placeholder="Discount Valid Until" value={discountValidUntil} onChange = {(e) => setDiscountValidUntil(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSummary" label="Summary*">
        <Form.Control type="text" placeholder="Summary*" value={summary} onChange = {(e) => setSummary(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPreview" label="Preview*">
        <Form.Control type="text" placeholder="Preview*" value={previewURL} onChange = {(e) => setPreviewURL(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error">{error}</div>}

      <Button variant="outline-success" onClick={handleSubmit}>Next</Button>{' '}

      <div>
    {popup ? (
      <div className="main-contract">
        <div className="popup-contract">
          <div>
            <p className="message-header">Please read the following contract carefully:</p>
            <p className="message">This is a contract to signify that the company will own the rights
            to the posted videos and materials of this registered course and will take a share of 20%
            on each video per registered trainee if you choose to proceed.</p>
          </div>
          <Button variant="danger" onClick={closePopup}>Cancel</Button>{' '}
          <Button variant="success" onClick={() => navigate(`/addSubtitle?id=${courseData._id}`)}>Agree & Proceed</Button>{' '}
        </div>
      </div>
    ) : (
      ""
    )}
  </div>
        </>
    );
}

export default CreateCourse