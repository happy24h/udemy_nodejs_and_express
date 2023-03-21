const mongoose = require("mongoose");
// shape data - xác định hình dạng của các tài liệu trong bộ sưu tập đó.
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true } // createAt, updateAt
);

// create modal - Tạo ra bảng
const Customer = mongoose.model("Customer", customerSchema); // tạo bảng có tên là user và trong mongoose sẽ chuyển thành users

module.exports = Customer;
