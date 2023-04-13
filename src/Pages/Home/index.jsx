import React from "react";
import Banner from "Components/Banner";
import styles from "./Home.module.css";
import posts from "Json/posts.json";

export default function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
