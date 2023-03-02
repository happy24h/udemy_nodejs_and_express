const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = (req, res) => {
  console.log("check request body >>>", req.body);

  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;

  console.log("email = ", email, "name = ", name, "city = ", city);

  // INSERT INTO Users (email, name, city)
  // VALUES ("vietanhhappy99@gmail.com", "Viet Anh", "Ha Noi");
  connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    (error, results) => {
      console.log("check result", results);
      if (error) return res.json({ error: error });
      return res.send("create user success !");
    }
  );
};

const getLoginPage = (req, res) => {
  res.render("login.ejs");
};

module.exports = {
  getHomePage,
  getLoginPage,
  postCreateUser,
};
