<<<<<<< HEAD
const express = require("express");
const {
  createUser,
  loginUser,
  logOut,
  requireAuth,
  resetPassword,
  updatePassword,
} = require("../controllers/userController");
=======
const express = require('express')
const{
    createUser,
    loginUser,
    logOut,
    requireAuth,
    updateContract,
} = require('../controllers/userController')

const router = express.Router()



>>>>>>> main

const router = express.Router();

//POST a new User
<<<<<<< HEAD
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/logout", requireAuth, logOut);
router.patch("/reset", resetPassword);
router.patch("/updatePassword", updatePassword);
=======
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/logout',requireAuth,logOut);
router.post('/contract',requireAuth,updateContract)

>>>>>>> main

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
