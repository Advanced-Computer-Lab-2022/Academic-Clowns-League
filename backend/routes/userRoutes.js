const express = require('express')
const{
    createUser,
    loginUser,
    logOut,
    requireAuth
} = require('../controllers/userController')

const router = express.Router()





//POST a new User
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/logout',requireAuth,logOut);


//after creating all our routes , export the router with the routes attached to it
module.exports = router
