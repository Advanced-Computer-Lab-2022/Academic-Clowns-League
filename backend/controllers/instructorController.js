const Instructor = require("../models/instructorModel");

// create new Instructor

/*const createInstructor = async (req, res) => {
  const { username, password, country, ratings, reviews, email, miniBio } =
    req.body;

  //add instructor to DB
  try {
    const instructor = await Instructor.create({
      username,
      password,
      country,
      ratings,
      reviews,
      email,
      miniBio,
    });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/

const createInstructor = async (req, res) => {
  const { username, password, country, email, miniBio,name } = req.body;
  try {
    const instructor = await Instructor.create({
      username,
      password,
      country,
      email,
      miniBio,
      name
    });
    //Instructor.create() is async that's why we put async around the handler fn, so u can use await right here
    //now we're storing the response of Instructor.create() (which is the doc created along with its is) in Instructor
    //inside create, u pass thru an object representing the doc u wanna create

    //status 200 to say everything is okay, and send back an obj which is the Instructor created
    res.status(200).json(Instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE an individual Instructor
const updateInstructor = (req, res) => {
  res.json({ mssg: "UPDATE an individual Instructor" });
};

//DELETE an individual Instructor
const deleteInstructor = (req, res) => {
  res.json({ mssg: "DELETE an individual Instructor" });
};

//GET a single individual Instructor
const getInstructor = (req, res) => {
  res.json({ mssg: "GET a single individual Instructor" });
};

//GET all individual Instructors
const getAllInstructor = (req, res) => {
  res.json({ mssg: "GET all individual Instructor" });
};

module.exports = {
  createInstructor,
  getAllInstructor,
  getInstructor,
  deleteInstructor,
  updateInstructor,
};
