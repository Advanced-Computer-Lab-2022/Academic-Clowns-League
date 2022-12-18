const express = require("express");

const {
    reportProblem,
    getMyProblems,
    getAllProblems,
    problemStatus,
    problemFollowUp,
         } = require("../controllers/problemController");
const { requireAuth } = require("../controllers/userController");
  
  const router = express.Router();
  
  //report a problem
  router.post("/reportProblem",requireAuth,reportProblem);
  
  //get all problems of a certain reporter
  router.get("/myProblems",requireAuth,getMyProblems);
  
  //get all problems
  router.get("/allProblems",requireAuth,getAllProblems);

  //update the status of a problem
  router.patch("/problemStatus",requireAuth,problemStatus);

  //followUp on a problem
  router.patch("/problemFollowUp",requireAuth,problemFollowUp );
  
  
  //after creating all our routes , export the router with the routes attached to it
  module.exports = router;
  