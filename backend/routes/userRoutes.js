const express = require("express");
const{
    createUser,
    loginUser,
    logOut,
    requireAuth,
    updateContract,
    resetPassword,
    updatePassword,
    updatePassword2,
} = require('../controllers/userController')

const router = express.Router()

//POST a new User
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/logout", requireAuth, logOut);
router.patch("/reset", resetPassword);
router.patch("/updatePassword", updatePassword);
router.patch("/updatePassword2",requireAuth,updatePassword2);
router.post('/contract',requireAuth,updateContract)


//after creating all our routes , export the router with the routes attached to it
module.exports = router;
