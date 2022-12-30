const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// create new Admin

const createAdmin = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
    //const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    const takenUsername = await User.findOne({ username: username });
    if (takenUsername) {
      res.status(400).json({ message: "Username is taken" });
    } else {
      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
          username: username,
          password: encryptedPassword,
        });
        const dbUser = new User({
          username: username,
          password: encryptedPassword,
          role: "Admin",
        });
        dbUser.save();
        res.status(200).json(admin);
      } catch (error) {
        res.status(400).json({error: error.message });
      }
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

//UPDATE an individual Admin
const updateAdmin = (req, res) => {
  res.json({ mssg: "UPDATE an individual Admin" });
};

//DELETE an individual Admin
const deleteAdmin = (req, res) => {
  res.json({ mssg: "DELETE an individual Admin" });
};

//GET a single individual Admin
const getAdmin = (req, res) => {
  res.json({ mssg: "GET a single individual Admin" });
};

//GET all individual Admins
const getAllAdmins = (req, res) => {
  res.json({ mssg: "GET all individual Admin", username: req.user._id });
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};
