const Problem = require("../models/problemModel");
const Course = require("../models/courseModel");
const Instructor = require("../models/instructorModel");
const CTrainee = require("../models/cTraineeModel");
const ITrainee = require("../models/iTraineeModel");
const mongoose = require("mongoose");
const Admin = require("../models/adminModel");



const reportProblem = async (req, res) => {
  const courseId = req.query.cid;
  const type = req.query.type;
  const content = req.query.content;
  const reporterId = req.user._id;
  
    try {
      const problem = await Problem.create({
        type,
        content,
        courseId,
        reporterId,
      });
  
      //status 200 to say everything is okay, and send back an obj which is the problem created
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error: "please type your problem in the given field" });
    }
  };

  

  const getMyProblems = async (req, res) => {
    //const id = req.query.id;
   if(await ITrainee.findById(req.user._id)|| CTrainee.findById(req.user._id)||Instructor.findById(req.user._id)){
    const problem = await Problem.find( { reporterId: req.user._id});
   // const problem = await Problem.find( { reporterId: id});
   
    for(let i = 0; i < problem.length; i++) {
        let c = problem[i].courseId;
        const course = await Course.findById( { _id: c });
        problem[i].course=course;
        console.log(problem[i]);
    }
    res.status(200).json(problem);
  }
 else{
    console.log("ssssaaaaaaaddddd")
    console.log(req.user._id)
    res.status(400).json({ error: "Access Restriced" })
   
  }
  
  };

  const  getAllProblemsR = async (req, res) => {
    if(await Admin.findById(req.user._id)){
      const problem = await Problem.find({status:"Resolved"}).sort({priority:1});
   
    for(let i = 0; i < problem.length; i++) {
        let c = problem[i].courseId;
        let r = problem[i].reporterId;
        const course = await Course.findById( { _id: c });
        problem[i].course=course;
        const I =await Instructor.findById( { _id: r });
        const IT =await ITrainee.findById( { _id: r });
        const CT =await CTrainee.findById( { _id: r });
        if(I){
            problem[i].reporter=I;
        }
        else if(IT){
            problem[i].reporter=IT;
        }
        else if(CT){
            problem[i].reporter=CT;
        }
    }

    res.status(200).json(problem);
  }
    
  };

  const  getAllProblemsUR = async (req, res) => {
    if(await Admin.findById(req.user._id)){
      const problem = await Problem.find({status:"Unresolved"}).sort({priority:1});
   
    for(let i = 0; i < problem.length; i++) {
        let c = problem[i].courseId;
        let r = problem[i].reporterId;
        const course = await Course.findById( { _id: c });
        problem[i].course=course;
        const I =await Instructor.findById( { _id: r });
        const IT =await ITrainee.findById( { _id: r });
        const CT =await CTrainee.findById( { _id: r });
        if(I){
            problem[i].reporter=I;
        }
        else if(IT){
            problem[i].reporter=IT;
        }
        else if(CT){
            problem[i].reporter=CT;
        }
    }

    res.status(200).json(problem);
  }
    
  };

  const  getAllProblemsP = async (req, res) => {
    if(await Admin.findById(req.user._id)){
      const problem = await Problem.find({status:"Pending"}).sort({priority:1});
   
    for(let i = 0; i < problem.length; i++) {
        let c = problem[i].courseId;
        let r = problem[i].reporterId;
        const course = await Course.findById( { _id: c });
        problem[i].course=course;
        const I =await Instructor.findById( { _id: r });
        const IT =await ITrainee.findById( { _id: r });
        const CT =await CTrainee.findById( { _id: r });
        if(I){
            problem[i].reporter=I;
        }
        else if(IT){
            problem[i].reporter=IT;
        }
        else if(CT){
            problem[i].reporter=CT;
        }
    }

    res.status(200).json(problem);
  }
    
  };

  const problemStatus = async (req, res) => {
    const id = req.query.id;
    const newStatus = req.query.status;

  
    const problem = await Problem.findOneAndUpdate(
      { _id : id },
      {
        status : newStatus
      },
      { new: true }
   );
   res.status(200).json(problem);
  
  };



  const problemFollowUp = async (req, res) => {
    
    const id = req.query.id;
    const Comment = req.query.comment;
    let c;
    const problem0 = await Problem.find({}).sort({priority:-1});
  if(problem0) {
  // console.log(problem);
  for(let i = 0; i < problem0.length; i++) {
    //console.log(problem0[i].priority);
     c = Number(problem0[i].priority);
    //console.log(c);
    if(c!=Infinity){
      break;
    }
  
}
if(c==Infinity){
c = 0;
}
    
}
else{
  c = 0;
}
c++;
console.log(c);

    if(Comment!=""){
 
    const problem = await Problem.findOneAndUpdate(
      { _id : id },
      {
        followUp : Comment,
        priority: c
      },
      { new: true }
   );
   res.status(200).json(problem);
    }
    else{
      res.status(400).json({ error: "please type your followup message in the given field" });
    }
   
  };

  module.exports = {
    reportProblem,
    getMyProblems,
    getAllProblemsR,
    getAllProblemsUR,
    getAllProblemsP,
    problemStatus,
    problemFollowUp,
  };