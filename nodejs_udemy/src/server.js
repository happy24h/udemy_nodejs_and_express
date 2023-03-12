require("dotenv").config();
// import express from "express"; // es module
const express = require("express"); // common js
const path = require("path"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const mongoose = require("mongoose");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config req.body form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes); // Tham số đầu tiên là tiền tố định nghĩa route

// shape data - xác định hình dạng của các tài liệu trong bộ sưu tập đó.
const kittySchema = new mongoose.Schema({
  name: String,
});

// create modal - Tạo ra bảng
const createModal = mongoose.model("Kitten", kittySchema); // tạo bảng có tên là Kitten và trong mongoose sẽ chuyển thành kittens
// tạo mới đối tượng kế thừa lại thuộc tính createModal
const cat = new createModal({ name: "Viet anh hoc backend" });
cat.save();

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
