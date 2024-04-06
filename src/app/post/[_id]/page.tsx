import { Post } from "@/types";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

interface PostPageParams {
  params: { _id: string };
}
export default async function PostPage({ params }: PostPageParams) {
  const db = (await connectDB).db("forum");
  const post = (await db
    .collection("post")
    .findOne({ _id: new ObjectId(params._id) })) as Post;

  return (
    <div>
      <h2>상세페이지임</h2>
      <Link href="/posts">리스트</Link>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
