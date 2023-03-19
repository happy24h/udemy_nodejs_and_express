require("dotenv").config();
// import express from "express"; // es module
const express = require("express"); // common js
const path = require("path"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");

const connection = require("./config/database");
const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// config req.body form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes); // Tham số đầu tiên là tiền tố định nghĩa route
app.use("/v1/api/", apiRoutes); // Tham số đầu tiên là tiền tố định nghĩa route
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(
        `Backend zero app listening on port http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
