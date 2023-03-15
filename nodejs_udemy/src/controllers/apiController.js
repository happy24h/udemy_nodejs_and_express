const User = require("../models/user");
const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  // mongoose save vs insert vs create
  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.status(200).json({
    error: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
};
