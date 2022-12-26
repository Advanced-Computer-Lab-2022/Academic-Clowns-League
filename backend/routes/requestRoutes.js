const express = require("express");
const {
  requestAccess,
  getPendingRequests,
  grantAccess,
  createRefundRequest,
  getRefundRequests
} = require("../controllers/requestController");
const { requireAuth } = require("../controllers/userController");

const router = express.Router();

router.get("/requestAccess",requireAuth,requestAccess);

router.get("/getPendingRequests",requireAuth, getPendingRequests);

router.get("/grantAccess",requireAuth, grantAccess);

router.get("/createRefundRequest", requireAuth, createRefundRequest);

router.get("/getRefundRequests", requireAuth, getRefundRequests);



module.exports = router;
