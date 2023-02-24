import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BaseLayout from "components/layout/BaseLayout";
import PostDetail from "components/PostDetail";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const post = await response.json();
          setPost(post);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchPost();
  }, [id])

  return (
    <>
      <BaseLayout>
        {post && <PostDetail post={post} />}
      </BaseLayout>
    </>
  );
}
