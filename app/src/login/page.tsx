// "use client";
// import React from "react";
// import { Button, Form, Input, Typography } from "antd";
// import { useRouter } from "next/navigation";

// function Page() {
//   const [form] = Form.useForm();
//   const { Link } = Typography;
//   const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const router = useRouter();

//   const handleLoginBM = () => {
//     router.push('/src/loginBM');
//   };

//   const onFinish = (values: unknown) => {
//     console.log("Form data:", values);
//   };

//   const onFinishFailed = (errorInfo: unknown) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div>
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//       <img
//         className="m-auto"
//         src="/image/login-admin.png"
//         alt="#"
//         width={300}
//         height={300}
//       />
//       <Form
//         className="min-w-[500px]"
//         form={form}
//         name="login"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 8 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         {/* Trường Email */}
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Không được để email trống",
//             },
//             {
//               pattern: EMAIL_REGEX,
//               message: "Email không hợp lệ",
//             },
//           ]}
//         >
//           <Input placeholder="Enter your email" />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Không được để password trống",
//             },
//           ]}
//         >
//           <Input.Password placeholder="Enter your password" />
//         </Form.Item>

//         {/* Submit Button */}
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submit">
//             Đăng nhập
//           </Button>
//           <span className="p-2">hoặc</span>
//           <Link onClick={handleLoginBM}>Đăng nhập tài khoản BM</Link>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }
// export default Page;
export {};