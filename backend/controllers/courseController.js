//import the model
const Course = require('../models/courseModel')


//get all courses
const getAllCourses = async (req,res)=>{
    const courses = await Course.find({});
    res.status(200).json(courses);
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
const createCourse = (req,res)=>{
    res.json({mssg: 'POST a new course'})
}

//filter course based on price
const filterPrice = async (req, res) =>{
    //console.log(req.body)
    //console.log(req.query)
    const price1 = req.query.price1
    const price2 = req.query.price2
    //console.log(price1);
    const courses = await Course.find({price: {$gte: price1, $lte: price2}});
    //console.log(JSON.stringify(courses))
    res.status(200).json(courses);
}

const filterSubRat = async (req, res) =>{
    console.log(req.query)
    if(req.query.subject && !req.query.rating1){
        const courses = await Course.find({subject: req.query.subject})
        res.status(200).json(courses);
    }
    else if (!req.query.subject && req.query.rating1){
        const courses = await Course.find({rating: {$gte: req.query.rating1, $lte: req.query.rating2}})
        res.status(200).json(courses);
    }
    else{
        const courses = await Course.find({rating: {$gte: req.query.rating1, $lte: req.query.rating2}, subject: req.query.subject})
        res.status(200).json(courses);
    }
    /*const price1 = req.query.price1
    const price2 = req.query.price2
    const courses = await Course.find({price: {$gte: price1, $lte: price2}});*/
}

//IGNORE THE NEXT COMMENT FOR NOW, we just want a message like the ones displayed above



/*const createCourse = async (req,res)=>{
    const{title,hours,subject,price,instructor,overallRating} = req.body
    try{
        const course = await Course.create({title,hours,subject,price,instructor,overallRating})
        //Course.create() is async that's why we put async around the handler fn, so u can use await right here
        //now we're storing the response of Course.create() (which is the doc created along with its is) in course
        //inside create, u pass thru an object representing the doc u wanna create

        //status 200 to say everything is okay, and send back an obj which is the course created
        res.status(200).json(course)

    }catch(error){
        res.status(400).json({error: error.message})

    }
    
}*/


module.exports = {
    getAllCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    createCourse,
    filterPrice,
    filterSubRat
}