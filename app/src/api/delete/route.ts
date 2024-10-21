import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import EmployeeSchema from "@/app/models/employeeModal";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Lấy id từ query parameter

    if (!id) {
      return NextResponse.json({ error: "ID không được cung cấp" }, { status: 400 });
    }

    const deletedItem = await EmployeeSchema.findByIdAndDelete(id); // Xóa employee dựa trên id

    if (!deletedItem) {
      return NextResponse.json(
        { error: "Không tìm thấy employee với ID đã cho" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Xóa thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi trong yêu cầu DELETE:", error);
    return NextResponse.json({ error: "err" }, { status: 500 });
  }
}
