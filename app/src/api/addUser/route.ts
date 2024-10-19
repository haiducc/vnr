import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import UserModel from "@/app/models/AddUser";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // Lưu người dùng vào cơ sở dữ liệu
    await UserModel.create({ name, email, password });

    return NextResponse.json(
      { message: "Người dùng đã được tạo thành công" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lỗi trong yêu cầu POST:", error);
    return NextResponse.json(
      { error: "Có gì đó không đúng." },
      { status: 500 }
    );
  }
}
