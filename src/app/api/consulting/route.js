import connectToDB from "../../../../utils/db"
import consultingModel from "../../../../models/consulting"


export async function POST(req) {
    connectToDB()

    const body = await req.json()
    const { firstName_lastName, time, phoneNumber } = body
    if (!firstName_lastName || !time || !phoneNumber) {
        return Response.json({ message: "Value is not valid" }, { status: 400 })
    }

    await consultingModel.create({
        firstName_lastName, time, phoneNumber
    })


    return Response.json({ message: "Message Sended" })
}