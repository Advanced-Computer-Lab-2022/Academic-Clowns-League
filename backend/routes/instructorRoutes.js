const express = require('express');
const {
    createInstructor,
    getAllInstructor,
    getInstructor,
    deleteInstructor,
    rateInstructor
} = require('../controllers/InstructorController');

const router = express.Router();

//GET all  instructor
router.get('/', getAllInstructor);

//GET a single  instructor
router.get('/onlyone', getInstructor);

//POST a new  instructor
router.post('/', createInstructor);

//DELETE a instructor
router.delete('/:id', deleteInstructor);

//RATE an instructor
router.patch('/rate', rateInstructor);

module.exports = router;
