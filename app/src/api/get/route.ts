// import { NextRequest, NextResponse } from "next/server";
// import { connect } from "@/app/dbConfig/dbConfig";
// import EmployeeSchema from "@/app/models/employeeModal";

// connect();

// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const type = searchParams.get('type');

//     let data;
//     switch (type) {
//       case "employee":
//         data = await EmployeeSchema.find();
//         break;
//       default:
//         return NextResponse.json(
//           { error: "Loại dữ liệu không hợp lệ" },
//           { status: 400 }
//         );
//     }

//     return NextResponse.json(
//       { message: `Lấy danh sách ${type} thành công`, data },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Lỗi trong yêu cầu GET:", error);
//     return NextResponse.json({ error: "err" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import EmployeeSchema from "@/app/models/employeeModal";

connect();

export async function GET() {
  try {
    const employees = await EmployeeSchema.find();

    return NextResponse.json({ data: employees }, { status: 200 });
  } catch (error) {
    console.error("Lỗi trong yêu cầu GET:", error);
    return NextResponse.json({ error: "err" }, { status: 500 });
  }
}
