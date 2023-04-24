import React from "react";
import styles from "./Home.module.css";
import posts from "Json/posts.json";
import Post from "Components/PostCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map(post => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>
              <Post post={post} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
