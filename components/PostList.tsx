import React from "react";
import PostPreview from "@/../components/PostPreview";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => (
  <ul className="row">
    {posts && posts.map(post => (
      <PostPreview key={post.id} post={post} />
    ))}
  </ul>
);

export default PostList;
