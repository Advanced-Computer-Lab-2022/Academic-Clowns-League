const express = require("express");

const {
    reportProblem,
    getMyProblems,
    getAllProblemsR,
    getAllProblemsUS,
    getAllProblemsP,
    problemStatus,
    problemFollowUp,
         } = require("../controllers/problemController");
const { requireAuth } = require("../controllers/userController");
  
  const router = express.Router();
  
  //report a problem
  router.post("/reportProblem",requireAuth,reportProblem);
  
  //get all problems of a certain reporter
  router.get("/myProblems",requireAuth,getMyProblems);
  
  //get all  resolved problems
  router.get("/allProblemsR",requireAuth,getAllProblemsR);

  //get all  unresolved problems
  router.get("/allProblemsUS",requireAuth,getAllProblemsUS);

  //get all pending problems
  router.get("/allProblemsP",requireAuth,getAllProblemsP);

  //update the status of a problem
  router.patch("/problemStatus",requireAuth,problemStatus);

  //followUp on a problem
  router.patch("/problemFollowUp",requireAuth,problemFollowUp );
  
  
  //after creating all our routes , export the router with the routes attached to it
  module.exports = router;
  