import foodLabelModel from "../../../../models/food-labe";
import connectToDB from "../../../../utils/db";


export async function POST(req) {
    connectToDB()
    const body = await req.json()

    const label = await foodLabelModel.create({
        title: body.title
    })

    return Response.json(label)
}