const express = require("express");
const router = express.Router();

// khai báo route
router.get("/", function (req, res) {
  res.send("Hello World !");
});

router.get("/content", (req, res) => {
  // res.send("This is page content");
  res.render("content.ejs");
});

router.get("/about", (req, res) => {
  res.render("about.ejs");
});

router.get("/detail", (req, res) => {
  res.send("<h2>This is page detail</h2>");
});

module.exports = router; // export default
