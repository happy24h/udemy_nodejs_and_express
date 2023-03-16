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

const getUserById = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  return res.status(200).json({
    error: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let { email, name, city, userId } = req.body;
  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    error: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  let result = await User.deleteOne({
    _id: id,
  });
  console.log(">>> result: ", result);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  getUserById,
  putUpdateUserAPI,
  deleteUserAPI,
};
