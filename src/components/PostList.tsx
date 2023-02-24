import React from "react";
import PostPreview from "./PostPreview";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul className="flex flex-row flex-wrap">
    {posts && posts.map(post => (
      <PostPreview key={post.id} post={post} />
    ))}
  </ul >
);

export default PostList;
