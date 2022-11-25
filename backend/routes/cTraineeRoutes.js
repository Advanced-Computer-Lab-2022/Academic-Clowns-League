const express = require('express');
const {
    createCTrainee,
    getAllCTrainee,
    //getCTrainee,
    deleteCTrainee,
    updateCTrainee,
    getRegisteredCourses,
    getGrade
} = require('../controllers/cTraineeController');

const router = express.Router();

//GET all corporate trainees
router.get('/', getAllCTrainee);

//GET a single corporate trainee
//router.get('/:id', getCTrainee);

//POST a new corporate trainee
router.post('/', createCTrainee);

//DELETE a corporate trainee
router.delete('/:id', deleteCTrainee);

//UPDATE a corporate trainee
router.patch('/', updateCTrainee);

//GET registered courses for CTrainee
router.get('/registeredcourses', getRegisteredCourses);

//get grade for an exercise
router.get('/getgrade', getGrade)

module.exports = router;