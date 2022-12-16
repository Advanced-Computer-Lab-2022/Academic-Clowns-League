const express = require("express");
const {
  requestAccess,
  getPendingRequests,
  grantAccess
} = require("../controllers/requestController");

const router = express.Router();

router.get("/requestAccess", requestAccess);

router.get("/getPendingRequests", getPendingRequests);

router.get("/grantAccess", grantAccess);



module.exports = router;
