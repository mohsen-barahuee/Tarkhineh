import connectToDB from "../../../../../utils/db"
import UserModel from "../../../../../models/user"
import { generateToken } from "../../../../../utils/auth"


export async function POST(req, res) {

    // Function for connecting to database
    await connectToDB()

    const acceptCode = 1380
    // GETING BODY INFORMATION
    const { phonNumber, code } = req.body

    // Checking User is Exist
    const isUserExist = await UserModel.findOne({ phonNumber })

    if (isUserExist) {

        return Response.json({ message: "User is Exist" })

    } else {
        // Sending Data For Creating Data In Data Base
        const users = await UserModel.create({ phonNumber })

        //make token for user 
        const token = generateToken({ phonNumber })

        if (users && code == acceptCode) {
            return Response.setHeader(
                "Set-Cookie",
                serialize("token", token, {
                    httpOnly: true,
                    path: "/",
                    maxAge: 60 * 60 * 24,
                })
            ).status(201).json({ message: "User Created Successfully", token })
        } else {
            return Response.status(409).json({ message: "Uknow Error" })

        }

    }



    // console.log("Phone Num : " + phoneNumber, "\ncode : " + code);


    // return res.status(201).json({ message: "POST" })
}