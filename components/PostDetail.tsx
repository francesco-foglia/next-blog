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
  const capitalizeTitle = post.title[0].toUpperCase() + post.title.slice(1);
  return (
    <div className="pb-5">
      <h1 className="display-4">{post.title}</h1>
      <p className="lead my-3">{post.body}</p>
      <img src={`https://via.placeholder.com/1000x300?text=${capitalizeTitle}`} alt={post.title} className="post-detail-img my-3 d-none d-lg-block" />
      <img src={`https://via.placeholder.com/1000x600?text=${capitalizeTitle}`} alt={post.title} className="post-detail-img my-3 d-block d-lg-none" />
      <Link href="/" className="btn btn-secondary">Back to posts</Link>
    </div>
  );
};

export default PostDetail;
