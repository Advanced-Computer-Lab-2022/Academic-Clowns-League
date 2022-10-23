const cTrainee = require('../models/cTraineeModel');

//POST a corporate trainee
const createCTrainee = (req,res)=>{
    res.json({mssg: 'POST a new corporate trainee'})
}

//UPDATE a corporate trainee
const updateCTrainee = (req,res)=>{
    res.json({mssg: 'UPDATE a corporate trainee'})
}

//DELETE a corporate trainee
const deleteCTrainee =(req,res)=>{
    res.json({mssg: 'DELETE a corporate trainee'})
}

//GET a single corporate trainee
const getCTrainee =(req,res)=>{
    res.json({mssg: 'GET a single corporate trainee'})
}

//GET all corporate trainees
const getAllCTrainee =(req,res)=>{
    res.json({mssg: 'GET all corporate trainees'})
}

module.exports = {
    createCTrainee,
    getAllCTrainee,
    getCTrainee,
    deleteCTrainee,
    updateCTrainee
}