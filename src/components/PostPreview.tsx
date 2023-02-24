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
    <li key={post.id} className="lg:w-1/2 xl:w-1/3 xxl:w-1/4 flex">
      <div className="post-preview bg-white rounded-lg drop-shadow-lg border-2 p-4 mr-4 mb-4">
        <img src={`https://via.placeholder.com/300?text=${firstWord}`} className="m-auto rounded-lg" alt={post.title} />
        <div className="px-6 pt-4 px-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-700 mt-4">{post.body}</p>
          <Link href={`/posts/${post.id}`}>
            <button className="read-more-btn bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 my-5 rounded">Read more</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostPreview;
