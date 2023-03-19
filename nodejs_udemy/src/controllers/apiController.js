const User = require("../models/user");

const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");

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

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await uploadSingleFile(req.files.image);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  // console.log(req.files);
  //upload single => files is an object
  //upload multiple => files is an array
  if (Array.isArray(req.files.image)) {
    //upload multiple
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    //upload single
    return await postUploadSingleFileApi(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  getUserById,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
};
