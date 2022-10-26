//import the model
const Course = require('../models/courseModel')


//get all courses
const getAllCourses = async (req, res) => {
    const courses = await Course.find({})
    res.status(200).json(courses)
  }
  



//get a single course
const getCourse = (req,res)=>{
    res.json({mssg: 'GET a single course'})
}


//delete a course
const deleteCourse =(req,res)=>{
    res.json({mssg: 'DELETE a course'})
}


//update a course
const updateCourse = (req,res)=>{
    res.json({mssg: 'UPDATE a course'})
}


//create new course
const createCourse = async (req,res)=>{
    const{
        title,
        hours,
        subject,
        price,
        discount,
        discountValidUntil,
        instructor,
        summary,
        previewURL,
        outline,
        subtitles} = req.body
    try{
        const course = await Course.create({
            title,
            hours,
            subject,
            price,
            discount,
            discountValidUntil,
            instructor,
            summary,
            previewURL,
            reveiws,
            overallRating,
            ratings,outline,
            subtitles})
        //Course.create() is async that's why we put async around the handler fn, so u can use await right here
        //now we're storing the response of Course.create() (which is the doc created along with its is) in course
        //inside create, u pass thru an object representing the doc u wanna create

        //status 200 to say everything is okay, and send back an obj which is the course created
        res.status(200).json(course)

    }catch(error){
        res.status(400).json({error: error.message})

    }
    
}



module.exports = {
    getAllCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    createCourse
}