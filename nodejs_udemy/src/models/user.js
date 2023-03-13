const mongoose = require("mongoose");
// shape data - xác định hình dạng của các tài liệu trong bộ sưu tập đó.
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

// create modal - Tạo ra bảng
const User = mongoose.model("user", userSchema); // tạo bảng có tên là user và trong mongoose sẽ chuyển thành users
// tạo mới đối tượng kế thừa lại thuộc tính User
// const cat = new User({ name: "Viet anh hoc backend" });
// cat.save();

module.exports = User;
