import connectToDB from "../../../../utils/db"
import UserModel from "../../../../models/user"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "../../../../utils/auth"


export async function GET(request) {
    connectToDB()
    const cookie = cookies();

    const getToken = await cookie.catch()


    if (!getToken._parsed.get('token').value) {
        return NextResponse.json({ messsage: "Token Is Empty" })
    }
    else {
        const tokenPayload = verifyToken(getToken._parsed.get('token').value)
        const userAccount = await UserModel.findOne({ phoneNumber: tokenPayload.phoneNumber })

        return Response.json({ userAccount });
    }




}