const express = require('express');
const {
    createInstructor,
    getAllInstructor,
    getInstructor,
    deleteInstructor,
    updateInstructor
} = require('../controllers/InstructorController');

const router = express.Router();

//GET all corporate trainees
router.get('/', getAllInstructor);

//GET a single corporate trainee
router.get('/:id', getInstructor);

//POST a new corporate trainee
router.post('/', createInstructor);

//DELETE a corporate trainee
router.delete('/:id', deleteInstructor);

//UPDATE a corporate trainee
router.patch('/:id', updateInstructor);

module.exports = router;