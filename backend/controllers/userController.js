const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
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
        country:user.country
        
    })
dbUser.save()
iUser.save()
res.json({message:"Success"})
    }   
};

const loginUser = async (req, res) => {
    const userLoggingIn = req.body;
    User.findOne({username:userLoggingIn.username}).then(dbUser => {
        if(!dbUser){
            console.log("Incorrect Username")
            return res.json({
                message:"invalid username or password"
            })
        }
        bcrypt.compare(userLoggingIn.password,dbUser.password).then(async isCorrect=>
            {       if(isCorrect){
                   
                    let payload;

                    if(dbUser.role == "iTrainee"){
                         payload= await iTrainee.findOne({username:userLoggingIn.username})}
                    if(dbUser.role == "cTrainee"){
                         payload= await cTrainee.findOne({username:userLoggingIn.username})}
                    
                    
                    
                         const token = jwt.sign({payload}, 'supersecret', {expiresIn: 604800})
                         res.cookie('jwtoken', token, { httpOnly: false, maxAge: 24*60*60*1000 })
                         return res.json({
                           message:"successful",
                           cookie:res.cookies.jwtoken
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
    const token = req.cookies.jwt
    console.log(token);
      
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, 'supersecret', (err, decodedToken) => {
        if (err) return res.json({
          isLoggedIn:false,
          message: "Failed to Authenticate"}) 
          req.user = decodedToken;
          next()
      })
    } else {
      res.json({message:"incorrect token", isLoggedIn:false,token})
      
    }
  }

module.exports = {
  createUser,
  loginUser,
  requireAuth,
  
};
