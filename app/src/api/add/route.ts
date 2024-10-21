import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import UserModel from "@/app/models/AddUserModal";
import EmployeeSchema from "@/app/models/employeeModal";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { type, data } = reqBody;

    let newItem;
    switch (type) {
      case "users":
        newItem = await UserModel.create(data);
        break;
      case "employee":
        newItem = await EmployeeSchema.create(data);
        break;
      default:
        return NextResponse.json(
          { error: "Loại dữ liệu không hợp lệ" },
          { status: 400 }
        );
    }

    return NextResponse.json(
      { message: `${type} đã được tạo thành công`, itemId: newItem._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lỗi trong yêu cầu POST:", error);
    return NextResponse.json({ error: "err" }, { status: 500 });
  }
}
