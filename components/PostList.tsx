import React from "react";
import PostPreview from "@/../components/PostPreview";

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts && posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </ul>
  );
}
