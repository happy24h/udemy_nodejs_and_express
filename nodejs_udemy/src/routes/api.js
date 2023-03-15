const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
} = require("../controllers/apiController");

// khai báo route
routerAPI.get("/", (req, res) => {
  res.send("hello world with apis");
});
routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "hello world",
  });
});
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);

module.exports = routerAPI; // export default
