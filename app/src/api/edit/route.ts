import EmployeeSchema from "@/app/models/employeeModal";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
      const reqBody = await request.json();
      const { type, id, data } = reqBody;
  
      let updatedItem;
      switch (type) {
        case "employee":
          data.updateDate = new Date();
          updatedItem = await EmployeeSchema.findByIdAndUpdate(id, data, {
            new: true,
          });
          if (!updatedItem) {
            return NextResponse.json(
              { error: "Không tìm thấy employee" },
              { status: 404 }
            );
          }
          break;
        default:
          return NextResponse.json(
            { error: "Loại dữ liệu không hợp lệ" },
            { status: 400 }
          );
      }
  
      return NextResponse.json(
        { message: `${type} đã được cập nhật thành công`, item: updatedItem },
        { status: 200 }
      );
    } catch (error) {
      console.error("Lỗi trong yêu cầu PATCH:", error);
      return NextResponse.json({ error: "err" }, { status: 500 });
    }
  }
  