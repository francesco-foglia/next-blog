import React from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const { title } = post;
  const firstWord = title[0].toUpperCase() + title.slice(1).split(' ')[0];

  return (
    <div className="pb-5 row">
      <div className="col-lg-6">
        <div className="post-detail-img-container">
          <img src={`https://via.placeholder.com/500x500?text=${firstWord}`} alt={title} className="post-detail-img" />
        </div>
      </div>
      <div className="col-lg-6 mt-3 mt-lg-0">
        <h1 className="display-4">{title}</h1>
        <p className="lead my-4">{post.body}</p>
      </div>
      <div className="col-12">
        <Link href="/" className="btn btn-secondary back-to-posts mt-0 mt-lg-3">Back to posts</Link>
      </div>
    </div>
  );
};

export default PostDetail;
