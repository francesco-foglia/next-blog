import React, { useEffect, useState } from "react";
import BaseLayout from "@/../src/components/layout/BaseLayout";
import PostList from "@/../src/components/PostList";
import Loading from "@/../src/components/Loading";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pageSize = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/posts?_start=${page - 1}&_limit=${pageSize}`);
        const posts = await response.json();
        setPosts(posts);
        setIsLoading(false);
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
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}>
            Prev
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        </div>
        {isLoading ? <Loading /> : <PostList posts={posts} />}
      </BaseLayout>
    </>
  );
}

export default Home;
