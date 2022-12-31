//import the model
const Request = require("../models/requestModel");
const cTrainee = require("../models/cTraineeModel");
const Admin = require("../models/adminModel");
const Course = require("../models/courseModel");
const iTrainee = require("../models/iTraineeModel");
const mongoose = require("mongoose");

const requestAccess = async (req, res) => {
    const theCtraineeId = req.user._id; //replace by id of the loggedin ctrainee
    const theCourseId = req.query.id;

    const theCTrainee = await cTrainee.findOne({ _id: theCtraineeId });
    const theCTraineeFirstName = theCTrainee.firstname;
    const theCTraineeLastName = theCTrainee.lastname;
    const fullname = theCTraineeFirstName+" "+theCTraineeLastName;

    const theCourse = await Course.findOne({ _id: theCourseId });
    const theCourseTitle = theCourse.title;

    try {

        const request = await Request.create({
            courseId: theCourseId ,
            courseTitle: theCourseTitle,
            cTraineeId: theCtraineeId,
            cTraineeName: fullname,
            requestType: "access"
        });
        res.status(200).json(request);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  };

const createRefundRequest = async(req, res) =>{
  if(await iTrainee.findById(req.user._id)){
    //remove course from itrainee courses, decrement numOfEnrolledTrainees
    const courseID = mongoose.Types.ObjectId(req.query.id);
    const course = await Course.findOne({_id: courseID})
    const itrainee = await iTrainee.findOne({_id: req.user._id})

    const request = await Request.create({courseId: courseID, 
      courseTitle: course.title, 
      status: "unavailable", 
      iTraineeId: req.user._id,
      iTraineeName: itrainee.firstname + " " + itrainee.lastname,
      requestType: "refund"
    })

    res.status(200).json(request)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

const getRefundRequests = async(req, res) => {
  if(await Admin.findById(req.user._id)){
    try{
      const requests = await Request.find({requestType: "refund"})
      res.status(200).json(requests)
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}


const getPendingRequests = async (req, res) => {
  if(await Admin.findById(req.user._id)){try {

        const requests = await Request.find({status:"pending"});
        res.status(200).json(requests);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }}
    
  };


  const grantAccess = async (req, res) => {
    if(await Admin.findById(req.user._id)){ try {
        const requestId = req.query.id;

        const theRequest = await Request.findOneAndUpdate(
            { _id: requestId },{status: "approved"},{ new: true }
          );

        const theCourseId = theRequest.courseId;
        const theCourse = await Course.findOne({ _id: theCourseId });
        const newNum = ((theCourse.numOfEnrolledTrainees)+1);
        const theCourseAfterUpdate = await Course.findOneAndUpdate({ _id: theCourseId },{numOfEnrolledTrainees: newNum},{ new: true });


        const theCtraineeId = theRequest.cTraineeId;
        const theCTrainee = await cTrainee.findOne({ _id: theCtraineeId });
        const theCTraineeCourses = theCTrainee.courses;
        theCTraineeCourses.push(theCourseId);
        const theCTraineeAfterUpdate = await cTrainee.findOneAndUpdate({ _id: theCtraineeId },{courses: theCTraineeCourses},{ new: true });

        //console.log(theRequest);
        //console.log(theCTraineeAfterUpdate);
        //console.log(theCourseAfterUpdate);

        res.status(200).json(theRequest);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }}
   
  };

  const checkCourse = async(req, res) => {
    if(await iTrainee.findById(req.user._id)){
      try{
        const request = await Request.findOne({iTraineeId: req.user._id, courseId: req.query.id})
        const courseID = mongoose.Types.ObjectId(req.query.id);
        const course = await Course.aggregate([
        {
          $lookup: {
            from: "instructors",
            localField: "instructor",
            foreignField: "_id",
            as: "instructorData",
          },
        },
        {
          $unwind: "$instructorData",
        },
        {
          $match: { _id: courseID},
        },
      ]);

      if(request == null){
        course[0].refund = false
      }
      else{
        course[0].refund = true
      }

      res.status(200).json(course[0])
      }
      catch(error){
        res.status(400).json({error: error.message})
      }
    }
    else{
      res.status(400).json({ error: "Access Restriced" })
    }
  }

  const checkCourseAccess = async(req, res) => {
    if(await cTrainee.findById(req.user._id)){
      try{
        const request = await Request.findOne({cTraineeId: req.user._id, courseId: req.query.id, status: "pending"})
        const courseID = mongoose.Types.ObjectId(req.query.id);
        const course = await Course.aggregate([
        {
          $lookup: {
            from: "instructors",
            localField: "instructor",
            foreignField: "_id",
            as: "instructorData",
          },
        },
        {
          $unwind: "$instructorData",
        },
        {
          $match: { _id: courseID},
        },
      ]);

      if(request == null){
        course[0].request = false
      }
      else{
        course[0].request = true
      }

      res.status(200).json(course[0])
      }
      catch(error){
        res.status(400).json({error: error.message})
      }
    }
    else{
      res.status(400).json({ error: "Access Restriced" })
    }
  }

module.exports = {
  requestAccess,
  getPendingRequests,
  grantAccess,
  createRefundRequest,
  getRefundRequests,
  checkCourse,
  checkCourseAccess
};