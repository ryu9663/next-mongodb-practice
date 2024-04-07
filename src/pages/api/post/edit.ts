import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    const { body } = req;
    const _id = new ObjectId(body._id);
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id }, { $set: { ...body, _id } });
    res.status(200).redirect(302, "/posts");
  }
}
