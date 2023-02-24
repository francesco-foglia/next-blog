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
  const [page, setPage] = useState<number>(1);
  const pageSize = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts?_start=${page - 1}&_limit=${pageSize}`);
        const posts = await response.json();
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <BaseLayout>
        <h1 className="mb-4">Blog</h1>
        <div className="buttons mb-3">
          <button
            className="btn btn-secondary"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}>
            Prev
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        </div>
        <PostList posts={posts} />
      </BaseLayout>
    </>
  );
}

export default Home;
