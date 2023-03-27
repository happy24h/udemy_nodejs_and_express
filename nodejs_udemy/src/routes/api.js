const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  getUserById,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");

const {
  postCreateCustomer,
  postCreateArrayCustomerService,
  getAllCustomers,
  putUpdateCustomer,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");
// khai báo route
routerAPI.get("/", (req, res) => {
  res.send("hello world with apis");
});

routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "hello world",
  });
});

//users
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.get("/user/:id", getUserById);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// customers
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomerService);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.get("/info", (req, res) => {
  console.log("check req.query: ", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("check req.params: ", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI; // export default
