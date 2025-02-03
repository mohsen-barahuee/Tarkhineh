import connectToDB from "../../../../../utils/db"
import { NextResponse } from "next/server"
import UserModel from "../../../../../models/user"
import { serialize } from "cookie"
import { generateToken } from "../../../../../utils/auth"



export async function POST(req) {

    // Function for connecting to database
    connectToDB()
    const acceptCode = 1380
    // GETING BODY INFORMATION
    const body = await req.json()

    const { phoneNumber, code } = body

    const isUserExist = await UserModel.findOne({ phoneNumber })

    if (isUserExist) {
        return Response.json({ message: "This Phone Number Is Owned" })
    }
    else {

        // Sending Data For Creating Data In Data Base
        const user = await UserModel.create({ phoneNumber, code })
        //make token for user 
        const token = generateToken({ phoneNumber })
        const response = NextResponse.json({ message: 'User Created successful', token });
        response.headers.append("Set-Cookie", serialize("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: "/"
        }))

        return response


    }

}