const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");
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

  // Cách code cũ
  // connection.query("select * from Users u", function (err, result, fields) {
  //   console.log(">>> result= ", result);
  // });

  // Cách code mới
  // const [results, fields] = await connection.query("select * from Users u");
  // console.log(" >>> check results: ", results);
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
};
