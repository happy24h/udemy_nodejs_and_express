const connection = require("../config/database");

const getHomePage = (req, res) => {
  // process data
  // call model
  let users = [];

  // simple query
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log("check results >>>", results); // results contains rows returned by server
    // console.log("check fields >>>", fields); // fields contains extra meta data about results, if available
    console.log(">> check users: ", users);

    res.send(JSON.stringify(users));
  });
};

const getLoginPage = (req, res) => {
  res.render("login.ejs");
};

module.exports = {
  getHomePage,
  getLoginPage,
};
