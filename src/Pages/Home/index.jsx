import React from "react";
import styles from "./Home.module.css";
import posts from "Json/posts.json";
import Post from "Components/PostCard";

export default function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
}
