import React from "react";
import styles from "./Post.module.css";
import PrincipalButton from "Components/PrincipalButton";

export default function PostCard({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.cover}
        src={`assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />
      <h2 className={styles.title}>{post.title}</h2>
      <PrincipalButton children="Ler" />
    </div>
  );
}
