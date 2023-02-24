import Link from "next/link";
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
    <li key={post.id} className="lg:w-1/2 xl:w-1/3 xxl:w-1/4">
      <div className="mb-3 bg-white rounded-lg shadow">
        <img src={`https://via.placeholder.com/500?text=${firstWord}`} className="w-full" alt={post.title} />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
          <Link href={`/posts/${post.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read more</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostPreview;
