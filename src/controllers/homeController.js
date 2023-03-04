const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
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
  // console.log("check request body >>>", req.body);
  let { email, name, city } = req.body;
  console.log("email = ", email, "name = ", name, "city = ", city);

  // Cách code mới
  let [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );

  console.log(">>> check result: ", results);
  res.send("Created user success !");
};

const postUpdateUser = async (req, res) => {
  // console.log("check request body >>>", req.body);
  let { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeleteUser = async () => {
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
