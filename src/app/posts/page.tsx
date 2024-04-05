import { connectDB } from "@/utils/database";
import styles from "./page.module.scss";
import Link from "next/link";
import { Post } from "@/types";

export default async function Posts() {
  const db = (await connectDB).db("forum");
  const posts = (await db.collection("post").find().toArray()) as Post[];
  console.log(posts);
  return (
    <>
      <h2>포스트</h2>
      <div className={styles.list_wrapper}>
        {posts.map((post) => (
          <Link key={post.title} href={`/post/${post._id}`}>
            <div className={styles.list_item}>
              <h3 className={styles.list_title}>{post.title}</h3>
              <p className={styles.list_content}>{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
