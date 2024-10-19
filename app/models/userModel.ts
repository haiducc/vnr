export const metadata = {
  title: "Vinara Group",
};

import mongoose from "mongoose";

// Định nghĩa schema cho người dùng
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Vui lòng cung cấp tên người dùng"],
    unique: true,
    trim: true, 
  },
  email: {
    type: String,
    // required: [true, "Vui lòng cung cấp email"],
    unique: true,
    trim: true, 
  },
  password: {
    type: String,
    // required: [true, "Vui lòng cung cấp mật khẩu"],
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Khởi tạo model
const User = mongoose.models.users || mongoose.model("users", userSchema);
console.log("Các mô hình Mongoose hiện tại:", mongoose.models?.users);
console.log("Mô hình Người dùng đã được khởi tạo:", User);

export default User;
