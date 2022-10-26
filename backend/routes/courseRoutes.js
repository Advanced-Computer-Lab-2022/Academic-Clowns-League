const express = require('express')
const{
    getAllCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    createCourse,
    filterPrice,
    filterSubRat
} = require('../controllers/courseController')

const router = express.Router()



//GET all courses
router.get('/', getAllCourses)    

//GET a single course   //the : means id is a route parameter
//router.get('/:id',getCourse)

//DELETE a single course
router.delete('/:id',deleteCourse)

//UPDATE a single course
router.patch('/:id',updateCourse)

//POST a new course
router.post('/', createCourse)

//filter courses by price
router.get('/filterprice', filterPrice);

//filter courses by subject and/or rating
router.get('/filtersubrat', filterSubRat);

//after creating all our routes , export the router with the routes attached to it
module.exports = router