import mongoose from 'mongoose';

// Định nghĩa cấu trúc cho người dùng
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Trường này là bắt buộc
    },
    email: {
        type: String,
        required: true, // Trường này là bắt buộc
        unique: true, // Đảm bảo email là duy nhất
        match: /.+\@.+\..+/ // Định dạng email hợp lệ
    },
    password: {
        type: String,
        required: true, // Trường này là bắt buộc
        minlength: 6 // Mật khẩu tối thiểu 6 ký tự
    },
    createdAt: {
        type: Date,
        default: Date.now // Tự động lấy thời gian hiện tại
    }
});

// Tạo mô hình người dùng từ schema
const UserModel = mongoose.model('users', userSchema);

export default UserModel;
