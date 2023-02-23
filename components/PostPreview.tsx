import React from "react";

interface Post {
  id: number;
  title: string;
}

interface PostPreviewProps {
  post: Post;
}

export default function PostPreview({ post }: PostPreviewProps) {
  return <li key={post.id}>{post.title}</li>;
}
