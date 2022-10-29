const { useState } = require("react")

const CourseForm = () => {
    const [title,setTitle] = useState('')
    const [hours,setHours] = useState('')
    const [subject,setSubject] = useState('')
    const [price,setPrice] = useState('')
    const [discount,setDiscount] = useState('')
    const [discountValidUntil,setDiscountValidUntil] = useState('')
    const [instructor,setInstructor] = useState('')
    const [summary,setSummary] = useState('')
    const [previewURL,setPreviewURL] = useState('')
    const [subtitles,setSubtitles] = useState('')
    const [outline,setOutline] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const course = {
            title,
            hours,
            subject,
            price,
            discount,
            discountValidUntil,
            instructor,
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

            if (!response.ok)
            console.log("error404")

            if (response.ok){
                setTitle('')
                setHours('')
                setSubject('')
                setPrice('')
                setDiscount('')
                setDiscountValidUntil('')
                setInstructor('')
                setSummary('')
                setPreviewURL('')
                setSubtitles('')
                setOutline('')
                console.log("Done baby",json)

            }

    }




  return (
    <form onSubmit={handleSubmit}>
    <h3>Add a new Course</h3>

    <label>Course Title</label>
    <input type = "text" 
    onChange = {(e) => setTitle(e.target.value)}
    value = {title}/>


    <label>Course Hours</label>
    <input type = "text" 
    onChange = {(e) => setHours(e.target.value)}
    value = {hours}/>


    <label>Course Subject</label>
    <input type = "text" 
    onChange = {(e) => setSubject(e.target.value)}
    value = {subject}/>


    <label>Course Price</label>
    <input type = "text" 
    onChange = {(e) => setPrice(e.target.value)}
    value = {price}/>


    <label>Course Discount</label>
    <input type = "text" 
    onChange = {(e) => setDiscount(e.target.value)}
    value = {discount}/>


    <label>DiscountValidUntil</label>
    <input type = "text" 
    onChange = {(e) => setDiscountValidUntil(e.target.value)}
    value = {discountValidUntil}/>

    <label>Course Instructor</label>
    <input type = "text" 
    onChange = {(e) => setInstructor(e.target.value)}
    value = {instructor}/>

    <label>Course Summary</label>
    <input type = "text" 
    onChange = {(e) => setSummary(e.target.value)}
    value = {summary}/>

    <label>Course Preview</label>
    <input type = "text" 
    onChange = {(e) => setPreviewURL(e.target.value)}
    value = {previewURL}/>

     <label>Course Subtitles</label>
    <input type = "text" 
    onChange = {(e) => setSubtitles(e.target.value)}
    value = {subtitles}/>

    <label>Course Outline</label>
    <input type = "text" 
    onChange = {(e) => setOutline(e.target.value)}
    value = {outline}/>

    <button>Submit</button>

    </form>

    

    
  )}
  export default CourseForm