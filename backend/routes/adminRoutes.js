const express = require('express')
const{
    getAllAdmins,
    getAdmin,
    deleteAdmin,
    updateAdmin,
    createAdmin
} = require('../controllers/AdminController')

const router = express.Router()



//GET all Admins
router.get('/', getAllAdmins)    


//GET a single Admin   //the : means id is a route parameter
router.get('/:id',getAdmin)


//DELETE a single Admin
router.delete('/:id',deleteAdmin)

//UPDATE a single Admin
router.patch('/:id',updateAdmin)


//POST a new Admin
router.post('/', createAdmin)


//after creating all our routes , export the router with the routes attached to it
module.exports = router
