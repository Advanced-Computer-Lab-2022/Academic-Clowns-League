require("dotenv").config();

const express = require("express"); //requiring the express package after installing it

const courseRoutes = require("./routes/courseRoutes");
const cTraineeRoutes = require("./routes/cTraineeRoutes");
const iTraineeRoutes = require("./routes/iTraineeRoutes");
const instructorRoutes = require("./routes/instructorRoutes");
const adminRoutes = require("./routes/adminRoutes");
const requestRoutes = require("./routes/requestRoutes");
const problemRoutes = require("./routes/problemRoutes");
const mongoose = require("mongoose");
const app = express(); //this fn creates an express app for us
//var bp = require("body-parser");
//connecting to the db
mongoose
  .connect(process.env.MONGO_URI) //this is asynchronous in nature and takes a bit of time to do
  .then(() => {
    //listening for requests on a port
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and listening on port", process.env.PORT); //we paste this here bc we want to listen to requests only when we connect to the db
    });
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use(express.json());

/*app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));*/
//now any req that comes, it looks as if it has some body to the req, some data to the server, and ifit does, then it passes and attches it to the req obj so we can access it in the request handler
//now we can say req.body
//replaces body-parser in some videos

//this fn will fire for every req that comes in, will help us see in the terminal what's happening
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//now we also want to react to requests, so we set up a route handler
/*
app.get('/',(req,res)=>{
    res.json({mssg:'welcome to the app'})
    //sends back a json string to us
}) */

//routes
app.use("/api/courses", courseRoutes);
app.use("/api/ctrainee", cTraineeRoutes);
app.use("/api/itrainee", iTraineeRoutes);
app.use("/api/instructor", instructorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/problem", problemRoutes);
//means that when we fire a request to this URL, use these routes (courseRoutes)

//GANNA'S TEST COMMENT

//THIS IS MARIAM TEST
