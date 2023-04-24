import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../Json/posts.json";

export default function Post() {
  const parameters = useParams();
  const paramId = Number(parameters.id);
  const post = posts.find(post => {
    return post.id === paramId;
  });

  console.log(post);

  return <h1>{post.title}</h1>;
}
