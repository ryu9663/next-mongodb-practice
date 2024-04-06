import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == "GET") {
    res.status(200).json({ name: "안녕" });
  }
  if (req.method == "POST") {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    if (!content) {
      return res.status(400).json({ message: "content is required" });
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne({ title, content });
      res.status(200).redirect("/posts");
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
}
