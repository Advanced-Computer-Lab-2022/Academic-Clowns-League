//import the model
const Request = require("../models/requestModel");
const cTrainee = require("../models/cTraineeModel");
const Course = require("../models/courseModel");
const mongoose = require("mongoose");

const requestAccess = async (req, res) => {
    const theCtraineeId = "637a8c03f7740521fbe8246e"; //replace by id of the loggedin ctrainee
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
        });
        res.status(200).json(request);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  };


const getPendingRequests = async (req, res) => {
    try {

        const requests = await Request.find({status:"pending"});
        res.status(200).json(requests);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  };

  const grantAccess = async (req, res) => {
    try {
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
      }
  };

module.exports = {
  requestAccess,
  getPendingRequests,
  grantAccess
};