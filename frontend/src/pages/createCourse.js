import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import HomeInstNav from "../components/homeInstNav";
import Button from 'react-bootstrap/Button';
import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CreateCourse = () => {
    const { rate } = useContext(CurrencyContext)
    const [title,setTitle] = useState('')
    const [subject,setSubject] = useState('')
    const [price,setPrice] = useState('')
    const [discount,setDiscount] = useState('0')
    const [discountValidUntil,setDiscountValidUntil] = useState('')
    const [summary,setSummary] = useState('')
    const [previewURL,setPreviewURL] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const onChangeValue = (e) => {
      if(e.target.value=="Computer Science"){
      setSubject("Computer Science")
    }
    else if(e.target.value=="Digital Media"){
      setSubject("Digital Media")
    }
    else{
      setSubject("Lab Programming")
    }
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title == '' || subject == '' || price == '' || summary == '' || previewURL == ''){
          setError('Please fill in all the fields')
        }
        else{
          const course = {
            title,
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
        <HomeInstNav />
        <div className="create-course">
        <h3>Enter Course Details</h3>
        <div style={{color: "black", fontSize: "small"}}><i>- fields followed by * are required</i></div>
        <br></br>
             <FloatingLabel
                controlId="floatingInput"
                label="Title *"
              >
        <Form.Control type="text" placeholder="Title *" value={title} onChange={(e) => setTitle(e.target.value)} style={{width: 600}}/>
      </FloatingLabel><br></br>
      <FloatingLabel
                controlId="floatingInput"
                label="Subject *"
              >
        <Form.Select onChange={onChangeValue}>
        <option>Please select a subject</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Digital Media">Digital Media</option>
          <option value="Lab Programming">Lab Programming</option>
        </Form.Select>
        </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPrice" label="Price *">
        <Form.Control type="text" placeholder="Price *" value={price} onChange = {(e) => setPrice(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscount" label="Discount (%)">
        <Form.Control type="text" placeholder="Discount (%)" value={discount} onChange = {(e) => setDiscount(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingDiscountVU" label="Discount Valid Until">
        <Form.Control type="date" placeholder="Discount Valid Until" value={discountValidUntil} onChange = {(e) => setDiscountValidUntil(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingSummary" label="Summary *">
        <Form.Control type="text" placeholder="Summary *" value={summary} onChange = {(e) => setSummary(e.target.value)}/>
      </FloatingLabel><br></br>

      <FloatingLabel controlId="floatingPreview" label="Preview *">
        <Form.Control type="text" placeholder="Preview *" value={previewURL} onChange = {(e) => setPreviewURL(e.target.value)}/>
      </FloatingLabel><br></br>

      {error && <div className="error" style={{color: "red", fontSize: "small"}}>{error}</div>}

      <Button variant="danger" onClick={handleSubmit} type="button">Next</Button>{' '}
      </div>
        </>
    );
}

export default CreateCourse