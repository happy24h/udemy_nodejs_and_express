const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  getUserById,
  putUpdateUserAPI,
  deleteUserAPI,
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
routerAPI.get("/user/:id", getUserById);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

module.exports = routerAPI; // export default
