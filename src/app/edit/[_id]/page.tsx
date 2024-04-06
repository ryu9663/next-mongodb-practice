import { Post } from "@/types";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

interface EditPageProps {
  params: { _id: string };
}

export default async function Edit({ params }: EditPageProps) {
  let db = (await connectDB).db("forum");
  let result = (await db
    .collection("post")
    .findOne({ _id: new ObjectId(params._id) })) as Post;
  return (
    <div className="p-20">
      <h2>수정페이지</h2>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={(result._id as any).toString()}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
