import React from "react";
import Banner from "Components/Banner";
import styles from "./Home.module.css";
import posts from "Json/posts.json";
import Post from "Components/Post"

export default function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
