require("dotenv").config();
// import express from "express"; // es module
const express = require("express"); // common js
const path = require("path"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes); // Tham số đầu tiên là tiền tố định nghĩa route

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
