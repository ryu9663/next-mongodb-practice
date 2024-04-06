"use client";
import styles from "./page.module.scss";

import { Post } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

export default function PostItem({ post }: { post: Post }) {
  return (
    <>
      <Link href={`/post/${post._id}`}>
        <h3 className={styles.list_title}>{post.title}</h3>
      </Link>
      <p className={styles.list_content}>{post.content}</p>
      <Link href={"/edit/" + post._id} className={styles.list_btn}>
        ✏️
      </Link>
      <button
        className={styles.list_btn}
        onClick={(e) => {
          e.preventDefault();
          fetch("/api/post/delete", {
            method: "DELETE",
            body: post._id as string,
          }).then(() => {
            window.location.reload();
          });
        }}
      >
        🗑️
      </button>
    </>
  );
}
