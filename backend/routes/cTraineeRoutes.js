const express = require('express');
const { requireAuth } = require('../controllers/userController');
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
router.get('/registeredcourses',requireAuth,getRegisteredCourses);

//get grade for an exercise
router.get('/getgrade',requireAuth, getGrade)

module.exports = router;