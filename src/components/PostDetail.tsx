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
        <div className="bg-gray-400 rounded-lg overflow-hidden">
          <img src={`https://via.placeholder.com/500x500?text=${firstWord}`} alt={title} className="object-cover h-64 w-full" />
        </div>
      </div>
      <div className="col-lg-6 mt-3 mt-lg-0">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-base mt-2">{post.body}</p>
      </div>
      <div className="col-12">
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md">Back to posts</Link>
      </div>
    </div>
  );
};

export default PostDetail;
