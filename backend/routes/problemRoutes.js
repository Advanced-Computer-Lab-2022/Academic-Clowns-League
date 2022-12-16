const express = require("express");

const {
    reportProblem,
    getMyProblems,
    getAllProblems,
    problemStatus,
    problemFollowUp,
         } = require("../controllers/problemController");
  
  const router = express.Router();
  
  //report a problem
  router.post("/reportProblem", reportProblem);
  
  //get all problems of a certain reporter
  router.get("/myProblems", getMyProblems);
  
  //get all problems
  router.get("/allProblems", getAllProblems);

  //update the status of a problem
  router.patch("/problemStatus", problemStatus);

  //followUp on a problem
  router.patch("/problemFollowUp", problemFollowUp );
  
  
  //after creating all our routes , export the router with the routes attached to it
  module.exports = router;
  