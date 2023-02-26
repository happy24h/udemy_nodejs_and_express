const getHomePage = (req, res) => {
  // process data
  // call model
  res.send("This is home page");
};

const getLoginPage = (req, res) => {
  res.render("login.ejs");
};

module.exports = {
  getHomePage,
  getLoginPage,
};
