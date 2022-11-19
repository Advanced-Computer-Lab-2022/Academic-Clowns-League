const { useState } = require("react")


const CourseForm = () => {
    const [title,setTitle] = useState('')
    const [hours,setHours] = useState('')
    const [subject,setSubject] = useState('')
    const [price,setPrice] = useState('')
    const [discount,setDiscount] = useState('')
    const [discountValidUntil,setDiscountValidUntil] = useState('')
    //const [instructor,setInstructor] = useState('63715373d953904400b6a4d5')
    const [summary,setSummary] = useState('')
    const [previewURL,setPreviewURL] = useState('')
    const [subtitles,setSubtitles] = useState(null)
    const [outline,setOutline] = useState('')
    const [error, setError] = useState(null);
    const [popup, setPop] = useState(false);

    const handleClickOpen = async (e) => {
        e.preventDefault()
        console.log(title)
        setPop(!popup);
    };

    const closePopup = () => {
        setPop(false);
        setTitle('')
        setHours('')
        setSubject('')
        setPrice('')
        setDiscount('')
        setDiscountValidUntil('')
        setSummary('')
        setPreviewURL('')
        setSubtitles(null)
        setOutline('')
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const course = {
            title,
            hours,
            subject,
            price,
            discount,
            discountValidUntil,
            //instructor,
            summary,
            previewURL,
            subtitles,
            outline
            }
            const response = await fetch ("/api/courses",{
                method: 'POST',
                body:JSON.stringify(course),
                headers: {
                    'Content-Type':'application/json'
                }
            })

            const json = await response.json()

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
                setSubtitles(null)
                setOutline('')
                setError(null);
      console.log("new course added", json);

            }
            closePopup()
    }




  return (
    <form  onSubmit={handleClickOpen}>
    <h3>Add a new Course</h3>

    <label>Course Title</label>
    <input type = "text" 
    onChange = {(e) => setTitle(e.target.value)}
    value = {title}/>
    <br/>


    <label>Course Hours</label>
    <input type = "text" 
    onChange = {(e) => setHours(e.target.value)}
    value = {hours}/>
        <br/>


    <label>Course Subject</label>
    <input type = "text" 
    onChange = {(e) => setSubject(e.target.value)}
    value = {subject}/>
        <br/>


    <label>Course Price</label>
    <input type = "text" 
    onChange = {(e) => setPrice(e.target.value)}
    value = {price}/>
        <br/>


    <label>Course Discount</label>
    <input type = "text" 
    onChange = {(e) => setDiscount(e.target.value)}
    value = {discount}/>
        <br/>

    <label>Discount Valid Until</label>
    <input type = "text" 
    onChange = {(e) => setDiscountValidUntil(e.target.value)}
    value = {discountValidUntil}/>
        <br/>

    <label>Course Summary</label>
    <input type = "text" 
    onChange = {(e) => setSummary(e.target.value)}
    value = {summary}/>
        <br/>

    <label>Course Preview</label>
    <input type = "text" 
    onChange = {(e) => setPreviewURL(e.target.value)}
    value = {previewURL}/>
        <br/>

     <label>Course Subtitles</label>
    <input type = "text" 
    onChange = {(e) => setSubtitles(e.target.value)}
    value = {subtitles}/>
        <br/>

    <label>Course Outline</label>
    <input type = "text" 
    onChange = {(e) => setOutline(e.target.value)}
    value = {outline}/>
        <br/>

    <button onClick = {handleClickOpen}>Submit</button>
    <div>
    {popup ? (
      <div className="main">
        <div className="popup">
          <div>
            <p className="message-header">Please read the following contract carefully:</p>
            <p className="message">This is a contract to signify that the company now owns the rights
            to the posted videos and materials of this registered course and will take a share of 20%
            on each video per registered trainee.</p>
          </div>
          <button onClick = {closePopup}>Cancel</button>
          <button onClick = {handleSubmit}>Agree & Add Course</button>
        </div>
      </div>
    ) : (
      ""
    )}
  </div>
    {error && <div className="error">{error}</div>}
    </form>
    

    
  )}
  export default CourseForm
