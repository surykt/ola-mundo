import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../Json/posts.json";
import PostModel from "Components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Post() {
  const parameters = useParams();
  const paramId = Number(parameters.id);
  const post = posts.find(post => {
    return post.id === paramId;
  });

  console.log(post);

  return(
    <PostModel
      photoCover={`/assets/posts/${post.id}/capa.png`}
      title={post.title}
    >
      <ReactMarkdown>
        {post.text}
      </ReactMarkdown>
    </PostModel>
  );
}
