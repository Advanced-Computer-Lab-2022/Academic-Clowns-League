const express = require('express')
const{
    createUser,
    loginUser,
    logOut
} = require('../controllers/userController')

const router = express.Router()





//POST a new User
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/logout',logOut);


//after creating all our routes , export the router with the routes attached to it
module.exports = router
