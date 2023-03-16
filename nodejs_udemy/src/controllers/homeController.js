const User = require("../models/user");
const getHomePage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  console.log("check request params", req.params);
  const userId = req.params.id;
  let user = await User.findById(userId).exec();

  return res.render("edit.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  // mongoose save vs insert vs create
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  let result = await User.deleteOne({
    _id: id,
  });
  console.log(">>> result: ", result);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
