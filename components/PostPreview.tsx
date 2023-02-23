import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostPreviewProps {
  post: Post;
}

const PostPreview = ({ post }: PostPreviewProps) => (
  <li key={post.id} className="col-md-6 col-lg-4">
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title h5">{post.title}</h2>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  </li >
);

export default PostPreview;
