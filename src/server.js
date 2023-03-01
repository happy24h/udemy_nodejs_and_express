require("dotenv").config();
// import express from "express"; // es module
const express = require("express"); // common js
const path = require("path"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes); // Tham số đầu tiên là tiền tố định nghĩa route

// simple query
// connection.query("select * from Users u", function (err, results, fields) {
//   console.log("check results >>>", results); // results contains rows returned by server
//   console.log("check fields >>>", fields); // fields contains extra meta data about results, if available
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
