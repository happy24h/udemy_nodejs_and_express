const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const User = require("../models/user");
const getHomePage = async (req, res) => {
  let results = [];
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  console.log("check user request params", req.params);
  const userId = req.params.id;
  let user = await getUserById(userId);

  return res.render("edit.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log("email = ", email, "name = ", name, "city = ", city);

  // mongoose save vs insert vs create
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.send("Created user success !");
};

const postUpdateUser = async (req, res) => {
  // console.log("check request body >>>", req.body);
  let { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);

  res.redirect("/");
};

const getLoginPage = (req, res) => {
  res.render("login.ejs");
};

module.exports = {
  getHomePage,
  getLoginPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
