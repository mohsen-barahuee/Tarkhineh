import connectToDB from "../../../../utils/db";
import { writeFile } from "fs/promises";
import path from "path";
import foodModel from "../../../../models/food";


export async function POST(req) {

    connectToDB()

    const formData = await req.formData()
    const title = formData.get("title")
    const deatails = formData.get("deatails")
    const price = formData.get("price")
    const score = formData.get("score")
    const image = formData.get("image")
    const label = formData.get("label")


    const fileExtension = path.extname(image.name)
    const buffer = Buffer.from(await image.arrayBuffer())
    const fileName = Date.now() + fileExtension
    const imgPath = path.join(process.cwd(), "public/uploads/" + fileName);
    await writeFile(imgPath, buffer);

    const food = await foodModel.create({
        title,
        deatails,
        price,
        score,
        image: `http://localhost:3000/uploads/${fileName}`,
        label
    })


    return Response.json({ message: "Food created" })

}


export async function GET(req) {
    connectToDB()

    const allFoodes = await foodModel.find()
        .populate("label")
        .lean()

    return Response.json(allFoodes)

}