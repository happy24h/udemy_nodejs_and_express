const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getLoginPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const { getContentController } = require("../controllers/contentController");

// router.Method('/route', handler)

// khai báo route
router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.get("/content", getContentController);

router.get("/login", getLoginPage);

router.get("/about", (req, res) => {
  res.render("about.ejs");
});

router.get("/detail", (req, res) => {
  res.send("<h2>This is page detail</h2>");
});

module.exports = router; // export default
