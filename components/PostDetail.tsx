import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title h5">{post.title}</h2>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}
