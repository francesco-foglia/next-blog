import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostPreviewProps {
  post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const firstWord = post.title[0].toUpperCase() + post.title.slice(1).split(' ')[0];
  return (
    <li key={post.id} className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <img src={`https://via.placeholder.com/300?text=${firstWord}`} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h2 className="card-title h5">{post.title}</h2>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </li>
  );
};

export default PostPreview;
