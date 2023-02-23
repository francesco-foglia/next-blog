import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BaseLayout from "components/layout/BaseLayout";
import PostDetail from "components/PostDetail";

interface IProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<IProps> = ({ id, title, body }) => {
  const [post, setPost] = useState({ id, title, body });
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response.json();
        setPost(post);
      } catch (err) {
        console.log(err);
        router.push('/error');
      }
    }

    fetchPosts();
  }, [id])

  return (
    <BaseLayout>
      <h1 className="mb-4">Post: {id}</h1>
      <PostDetail post={post} />
    </BaseLayout>
  );
}

export default Post;
