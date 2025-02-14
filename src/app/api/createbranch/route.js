import { writeFile } from "fs/promises";
import path from "path";
import branchModel from "../../../../models/branch";
import connectToDB from "../../../../utils/db";

export async function POST(req) {
  connectToDB()
  const formData = await req.formData()
  const image = formData.get("image")
  const branchName = formData.get("branchName")
  const address = formData.get("address")
  const workTime = formData.get("workTime")

  const fileExtension = path.extname(image.name)

  const buffer = Buffer.from(await image.arrayBuffer())
  const fileName = Date.now() + fileExtension
  const imgPath = path.join(process.cwd(), "public/uploads/" + fileName);
  await writeFile(imgPath, buffer);

  const branch = await branchModel.create({
    branchName,
    address,
    workTime,
    image : `http://localhost:3000/uploads/${fileName}`
  })

  return Response.json({ message: "Branch Created" })

}