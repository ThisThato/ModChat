const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}; //Get Users

exports.addUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Unable to add user",
    });
  }
}; //AddUsers

exports.deleteUser = async (req, res, next) => {
  res.send("DELETE User");
};
