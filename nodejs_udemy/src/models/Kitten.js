const mongoose = require("mongoose");
// shape data - xác định hình dạng của các tài liệu trong bộ sưu tập đó.
const kittySchema = new mongoose.Schema({
  name: String,
});

// create modal - Tạo ra bảng
const createModal = mongoose.model("Kitten", kittySchema); // tạo bảng có tên là Kitten và trong mongoose sẽ chuyển thành kittens
// tạo mới đối tượng kế thừa lại thuộc tính createModal
// const cat = new createModal({ name: "Viet anh hoc backend" });
// cat.save();

module.exports = createModal;
