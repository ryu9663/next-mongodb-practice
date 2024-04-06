import { connectDB } from "@/utils/database";
import styles from "./page.module.scss";
import Link from "next/link";
import { Post } from "@/types";
import PostItem from "@/app/posts/PostItem";

export default async function Posts() {
  const db = (await connectDB).db("forum");
  const posts = (await db.collection("post").find().toArray()) as Post[];

  return (
    <>
      <h2>포스트</h2>
      <div className={styles.list_wrapper}>
        <ul>
          {posts.map((post) => (
            <li key={post.title} className={styles.list_item}>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
