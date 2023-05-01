import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./Post.css"
import posts from "../../Json/posts.json";
import PostModel from "Components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "Pages/NotFound";
import DefaultPage from "Components/DefaultPage";

export default function Post() {
  const parameters = useParams();
  const paramId = Number(parameters.id);
  const post = posts.find(post => {
    return post.id === paramId;
  });

  if(!post) {
    return <NotFound />
  }

  return(
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
          <PostModel
            photoCover={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.text}
              </ReactMarkdown>
            </div>
          </PostModel>
        }/>
      </Route>
    </Routes>
  );
}
