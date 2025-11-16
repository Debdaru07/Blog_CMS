import React, { useState, useEffect } from 'react';
import Loader from '../components/common/Loader';
import BlogPost from '../components/BlogPost';
import { usePosts } from '../hooks/usePosts';

const Blog = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const { fetchPosts, posts = [], loading, total = 0, error } = usePosts();  // Default to [] and 0

  useEffect(() => {
    fetchPosts(page, limit);
  }, [page, fetchPosts]);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <Loader />;

  return (
    <div>
      <h1>Public Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => <BlogPost key={post.id} post={post} />)
      ) : (
        <p>No posts yet.</p>
      )}
      <div>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </button>
        <span> Page {page} of {Math.ceil(total / limit)}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={page * limit >= total}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;