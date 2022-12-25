import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InstructorNavbar from "../components/instructorNavbar";
import Button from 'react-bootstrap/Button';
import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CreateCourse = () => {
    const { rate } = useContext(CurrencyContext)
    const [title,setTitle] = useState('')
    const [hours,setHours] = useState('')
    const [subject,setSubject] = useState('')
    const [price,setPrice] = useState('')
    const [discount,setDiscount] = useState('0')
    const [discountValidUntil,setDiscountValidUntil] = useState('')
    const [summary,setSummary] = useState('')
    const [previewURL,setPreviewURL] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title == '' || hours == '' || subject == '' || price == '' || summary == '' || previewURL == ''){
          setError('Please fill in all the fields')
        }
        else{
          const course = {
            title,
            hours,
            subject,
            price: Math.round(price/rate),
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

            if (response.status == 400) {
                setError(json.error);
            }
            if (response.status == 200){
                //setCourse(json)
                navigate(`/addSubtitle?id=${json._id}`)
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
        }
    }


    return(
        <>
        <InstructorNavbar />
        <br></br>
        <h3>Enter Course Details</h3>
        <div style={{color: "black", fontSize: "small"}}>- fields followed by * are required</div>
        <br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title *"
                className="mb-3"
              >
        <Form.Control type="text" placeholder="Title *" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSubject" label="Subject *">
        <Form.Control type="text" placeholder="Subject *" value={subject} onChange = {(e) => setSubject(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingHours" label="Hours *">
        <Form.Control type="text" placeholder="Hours *" value={hours} onChange = {(e) => setHours(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Price *">
        <Form.Control type="text" placeholder="Price *" value={price} onChange = {(e) => setPrice(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscount" label="Discount">
        <Form.Control type="text" placeholder="Discount" value={discount} onChange = {(e) => setDiscount(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscountVU" label="Discount Valid Until">
        <Form.Control type="text" placeholder="Discount Valid Until" value={discountValidUntil} onChange = {(e) => setDiscountValidUntil(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSummary" label="Summary *">
        <Form.Control type="text" placeholder="Summary *" value={summary} onChange = {(e) => setSummary(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPreview" label="Preview *">
        <Form.Control type="text" placeholder="Preview *" value={previewURL} onChange = {(e) => setPreviewURL(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error" style={{color: "red", fontSize: "small"}}>{error}</div>}

      <Button variant="danger" onClick={handleSubmit} type="button">Next</Button>{' '}
        </>
    );
}

export default CreateCourse