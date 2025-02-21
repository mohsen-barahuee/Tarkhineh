import connectToDB from "../../../../utils/db"
import UserModel from "../../../../models/user"

export async function PUT(request, { params }) {

    connectToDB()
    const { id } = await params
    const body = await request.json()

    const { username, phoneNumber, firstName, lastName, email, birthDay, } = body

    const updateUser = await UserModel.findOneAndUpdate({ _id: id }, { username, phoneNumber, firstName, lastName, email, birthDay, })


    return Response.json({ updateUser } ,{status : 201})

}