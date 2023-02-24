import React, { useEffect, useState } from "react";
import BaseLayout from "@/../src/components/layout/BaseLayout";
import PostList from "@/../src/components/PostList";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
        const posts = await response.json();
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <BaseLayout>
        <h1 className="mb-4">Blog</h1>
        <PostList posts={posts} />
      </BaseLayout>
    </>
  );
}

export default Home;
