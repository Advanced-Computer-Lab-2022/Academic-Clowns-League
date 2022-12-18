const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
const Instructor = require("../models/instructorModel");
const Admin = require("../models/adminModel");
require('dotenv').config()

// create new User

const createUser = async (req, res) => {
    const user = req.body;
    const takenUsername = await User.findOne({username:user.username})
    

    if (takenUsername)
        res.json({message:"Username is taken"})
    else{user.password = await bcrypt.hash(req.body.password,10)
    const dbUser = new User({
        username: user.username.toLowerCase(),
        password : user.password,
        role: user.role
    })
    const iUser = new iTrainee({
        username: user.username.toLowerCase(),
        password : user.password,
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        gender:user.gender,
        
    })
dbUser.save()
iUser.save()
res.json({message:"Success"})
    }   
};

const loginUser = async (req, res) => {
 
 
    const userLoggingIn = req.body;
   await User.findOne({username:userLoggingIn.username}).then(dbUser => {
        if(!dbUser){
            console.log("Incorrect Username")
            return res.json({
                message:"invalid username or password"
            })
        }
        bcrypt.compare(userLoggingIn.password,dbUser.password).then(async isCorrect=>
            {       if(isCorrect){
                   
                   

                    if(dbUser.role == "iTrainee"){
                         var payload= await iTrainee.findOne({username:dbUser.username})
                         var role = "itrainee"
                        //console.log("itrainee",payload,dbUser.username)
                    }
                    if(dbUser.role == "cTrainee"){
                         var payload= await cTrainee.findOne({username:dbUser.username})
                         var role = "ctrainee"
                        //console.log(payload)
                    }

                    if(dbUser.role == "Instructor"){
                         var payload= await Instructor.findOne({username:dbUser.username})
                         var role = "instructor"
                        }
                         
                    if(dbUser.role == "Admin"){
                          var payload= await Admin.findOne({username:dbUser.username})
                          var role = "admin"
                        }
                    
                    
                    
                         const token = jwt.sign({payload}, 'supersecret', {expiresIn: 604800})
                         res.cookie('jwtoken', token, { httpOnly: false, maxAge: 24*60*60*1000 })
                         return res.json({
                           message:"successful",
                           payload : payload,
                           role: role
                           
                         })
                         
                         
            } else{
                return res.json({
                    message:"Invalid Username or password"
                })
            }
            })
    })

};
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwtoken
    console.log(token);
      
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, 'supersecret', (err, decodedToken) => {
        if (err) return res.json({
          isLoggedIn:false,
          message: "Failed to Authenticate"}) 
          req.user = decodedToken.payload;
          console.log("User ", decodedToken)
          next()
      })
    } else {
      res.json({message:"incorrect token", isLoggedIn:false,token})
      
    }
  }
const logOut  = async (req, res) => {
   res.cookie('jwtoken', "", { httpOnly: false, maxAge: -1 })
   return res.json({
    message: "Token Deleted"
   })
}

module.exports = {
  createUser,
  loginUser,
  requireAuth,
  logOut,
  
};