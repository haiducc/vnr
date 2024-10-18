// import User from "@/models/userModels"
// import { NextRequest, NextResponse } from "next/server"
// import bcryptjs from 'bcryptjs'
// import jwt from "jsonwebtoken"
// import { connect } from "@/app/dbConfig/dbConfig"

// connect()

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json()
//     const { email, password } = reqBody

//     //check if user exist
//     const user = await User.findOne({ email })

//     if (!user) {
//       return NextResponse.json({ error: "User does mot exited" }, { status: 400 })
//     }

//     //Check if password is correct
//     const validPassword = await bcryptjs.compare(password, user.password)

//     //check if passwor is correct 
//     if (!validPassword) {
//       return NextResponse.json({ error: "Invalid Password", }, { status: 400 })
//     }
//     //create token data
//     const tokenData = {
//       id: user._id,
//       username: user.username,
//       email: user.email
//     }

//     //create Token
//     const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1h' })

//     const response = NextResponse.json({
//       message: "Login successful",
//       sucsess: true,
//     })
//     response.cookies.set('token', token, {
//       httpOnly: true,
//     })
//     return response
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }
// }
export {};