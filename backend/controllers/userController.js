const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
const Instructor = require("../models/instructorModel");
const Admin = require("../models/adminModel");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { findByIdAndUpdate } = require("../models/userModel");

// create new User

const createUser = async (req, res) => {
  const user = req.body;
  const takenUsername = await User.findOne({ username: user.username });

  if (takenUsername) res.status(400).json({ message: "Username is taken" });
  else {
    try {
      user.password = await bcrypt.hash(req.body.password, 10);
      const iUser = await iTrainee.create({
        username: user.username.toLowerCase(),
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        gender: user.gender,
      });
      const dbUser = new User({
        username: user.username.toLowerCase(),
        password: user.password,
        email: user.email,
        role: "iTrainee",
        contract: true
      });
      dbUser.save();
      res.status(200).json(iUser);
      //res.json({message:"Success"})
    } catch (error) {
      res.status(400).json({ message: "Signup Failed", error: error.message });

    }
  }
};
const updateContract = async (req,res) =>{
  console.log(req.user._id)
  try {
    const updatedResult = await User.findOneAndUpdate(
      { username: req.user.username },
      {
        contract:true,
      },
    );
    console.log(updatedResult);
  } catch (error) {
    console.log(error);
  }

console.log("success")
  res.json({message:"Contract Status updated"});

}


  const loginUser = async (req, res) => {

    const userLoggingIn = req.body;
    if(userLoggingIn.username != null && userLoggingIn.password != null){
      await User.findOne({username:userLoggingIn.username}).then(dbUser => {
        if(!dbUser){
            console.log("Incorrect Username")
            return res.json({
                message:"Invalid Username or Password"
            })
        }
        bcrypt.compare(userLoggingIn.password,dbUser.password).then(async isCorrect=>
            {       if(isCorrect){
                    if(dbUser.role == "iTrainee"){
                         var payload= await iTrainee.findOne({username:dbUser.username})
                         var role = "iTrainee"
                        //console.log("itrainee",payload,dbUser.username)
                    }
                    if(dbUser.role == "cTrainee"){
                         var payload= await cTrainee.findOne({username:dbUser.username})
                         var role = "cTrainee"
                        //console.log(payload)
                    }

                    if(dbUser.role == "Instructor"){
                         var payload= await Instructor.findOne({username:dbUser.username})
                         var role = "Instructor"
                        }
                         
                    if(dbUser.role == "Admin"){
                          var payload= await Admin.findOne({username:dbUser.username})
                          var role = "Admin"
                        }
                    
                    
                    
                         const token = jwt.sign({payload}, 'supersecret', {expiresIn: 604800})
                         res.cookie('jwtoken', token, { httpOnly: false, maxAge: 24*60*60*1000 })
                         res.cookie('role', role, { httpOnly: false, maxAge: 24*60*60*1000 })
                         return res.status(200).json({
                           message:"successful",
                           payload : payload,
                           role: role,
                           contract: dbUser.contract
                           
                         })
                         
                         
            } else{
              return res.status(400).json({
                    message:"Invalid Username or Password"
                })
            }
            })
    })
    }
    else{
      res.json({message: "Please enter all fields"})
    }
};
const requireAuth = (req, res, next) => {

  const token = req.cookies.jwtoken;
  console.log(token);

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed to Authenticate",
        });
      req.user = decodedToken.payload;
      
      next();
    });
  } else {
    res.json({ message: "incorrect token", isLoggedIn: false, token });
  }};

const resetPassword = async (req, res) => {
  if (await User.findOne({ email: req.body.email })) {
    const email = req.body.email;

    /*if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such instructor" });
  }*/
    
    const user = await User.findOne({ email: email });
    
    //const instructor = await Instructor.find({ _id: "63715373d953904400b6a4d5" });

    if (!user) {
      return res.status(404).json({ error: "No such user" });
    } else {
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nourhan.khedr24@gmail.com",
          pass: "wtcynstutwftvzyz",
        },
      });
      let details = {
        from: "nourhan.khedr24@gmail.com",
        to: req.body.email,
        subject: "Reset password",
        text: " Reset Password Link",
        html:
          '<p>Click <a href="http://localhost:3000/forgotPassword?id=' +
          user._id +
          '">here</a> to reset your password</p>',
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log("error");
          console.log(req.body.email);
        } else {
          console.log("email sent");
        }
      });
    }

    res.status(200).json(user);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};



const updatePassword2 = async (req, res) => {
  const id = req.user._id;

  const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
  if (req.body.newPassword == req.body.confirmPassword) {
    console.log("im here");

    const user = await User.findOneAndUpdate(
      { username:req.user.username },
      {
        password: encryptedPassword,
      }
    );
    if (user.role == "Instructor") {
      await Instructor.findOneAndUpdate(
        { username: user.username },
        {
          password: encryptedPassword,
        }
      );
    } else if (user.role == "cTrainee") {
      await cTrainee.findOneAndUpdate(
        { username: user.username },
        {
          password: encryptedPassword,
        }
      );
    } else if (user.role == "iTrainee") {
      await iTrainee.findOneAndUpdate(
        { username: user.username },
        {
          password: encryptedPassword,
        }
      );
    } else if (user.role == "Admin") {
      await Admin.findOneAndUpdate(
        { username: user.username },
        {
          password: encryptedPassword,
        }
      );
    }

    res.status(200).json(user);
  } else {
    res.status(400).json({ error: "cant do it" });}


}




const updatePassword = async (req, res) => {
  // console.log(id);
  const id = req.query.id;
  console.log(id);

  //console.log(req.params);
  if (await User.findById(id)) {
    console.log("HI");

    /* if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Instructor" });
    }*/

    //const instructor = await Instructor.findOne({ _id: id });
    const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
    if (req.body.newPassword == req.body.confirmPassword) {
      console.log("im here");

      const user = await User.findOneAndUpdate(
        { _id: id },
        {
          password: encryptedPassword,
        }
      );
      if (user.role == "Instructor") {
        await Instructor.findOneAndUpdate(
          { username: user.username },
          {
            password: encryptedPassword,
          }
        );
      } else if (user.role == "cTrainee") {
        await cTrainee.findOneAndUpdate(
          { username: user.username },
          {
            password: encryptedPassword,
          }
        );
      } else if (user.role == "iTrainee") {
        await iTrainee.findOneAndUpdate(
          { username: user.username },
          {
            password: encryptedPassword,
          }
        );
      } else if (user.role == "Admin") {
        await Admin.findOneAndUpdate(
          { username: user.username },
          {
            password: encryptedPassword,
          }
        );
      }

      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "cant do it" });
    }

    //if (!instructor) {
    //return res.status(400).json({ error: "No such Instructor" });
    //}
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const logOut  = async (req, res) => {
   res.cookie('jwtoken', "", { httpOnly: false, maxAge: -1 });
   res.cookie('role', "", { httpOnly: false, maxAge: -1 });
   
   return res.json({
    message: "Token Deleted"
   })
}

module.exports = {
  createUser,
  loginUser,
  requireAuth,
  logOut,
  resetPassword,
  updatePassword,
  updateContract,
  updatePassword2
};
