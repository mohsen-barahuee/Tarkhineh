import connectToDB from "../../../../../utils/db"
import UserModel from "../../../../../models/user"
import { serialize } from "cookie"
import { generateToken } from "../../../../../utils/auth"
import { NextResponse } from "next/server"


export async function POST(request) {
    connectToDB()

    const body = await request.json()

    const { phoneNumber } = body

    const userFind = await UserModel.findOne({ phoneNumber })

    if (!userFind) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });

    }
    const token = generateToken({ phoneNumber })
    const response = NextResponse.json({ message: 'User Found' }, { status: 200 });

    response.headers.append("Set-Cookie", serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        path: "/"
    }))


    return response



}