const Admin = require("../models/AdminModel");

// create new Admin

const createAdmin = (req, res) => {
  res.json({ mssg: "POST a new individual Admin" });
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
  res.json({ mssg: "GET all individual Admin" });
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};
