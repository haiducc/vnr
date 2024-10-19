import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";

await connect();

export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Log dữ liệu đầu vào để kiểm tra
    console.log("Email nhận được:", email);
    console.log("password nhận được:", password);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    // Kiểm tra xem người dùng có tồn tại không
    const user = await User.findOne({
      email: { $regex: new RegExp(email, "i") },
    });
    // const user = await User.find({});
    console.log(User.find({}));
    
    console.log("Người dùng tìm thấy:", user);

    if (!user) {
      return NextResponse.json(
        { error: "Người dùng không tồn tại" },
        { status: 400 }
      );
    }

    // Kiểm tra xem mật khẩu có đúng không
    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("Mật khẩu", validPassword);

    if (!validPassword) {
      return NextResponse.json( 
        { error: "Mật khẩu không hợp lệ" },
        { status: 400 }
      );
    }

    // Tạo dữ liệu token
    const tokenData = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    // Tạo Token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Đăng nhập thành công",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    });

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
