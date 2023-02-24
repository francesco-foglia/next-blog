import React from "react";
import { useRouter } from "next/router";
import BaseLayout from "src/components/layout/BaseLayout";
import PostDetail from "src/components/PostDetail";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface GetStaticPropsParams {
  id: string;
}

const Post = ({ post }: { post: Post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <BaseLayout>
      {post && <PostDetail post={post} />}
    </BaseLayout>
  );
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: GetStaticPropsParams }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await response.json();

  return { props: { post } };
}
