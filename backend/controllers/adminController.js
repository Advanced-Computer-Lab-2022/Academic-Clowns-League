const Admin = require("../models/adminModel");

// create new Admin

const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({ username, password });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  res.json({ mssg: "GET all individual Admin" });
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};
