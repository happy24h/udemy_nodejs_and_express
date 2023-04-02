require("dotenv").config();
// import express from "express"; // es module
const express = require("express"); // common js
const path = require("path"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");

const connection = require("./config/database");
const { MongoClient } = require("mongodb");
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
    // using mongoose
    // await connection();

    // using mongodb driver

    // Connecting URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    // Database name
    const dbName = process.env.DB_NAME;

    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("products");

    collection.insertOne({ name: "Quang Huy", address: "Hà Nội" });
    collection.insertOne({ name: "Việt Anh", address: "Hà Nội", age: "23" });
    let test = await collection.findOne({ age: "23" });
    console.log(">>> find data", test);

    //

    app.listen(port, hostname, () => {
      console.log(
        `Backend zero app listening on port http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
