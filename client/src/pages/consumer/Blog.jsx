import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Ensure imported
import Loader from '../../components/common/Loader';
import BlogPost from '../../components/BlogPost';
import { usePosts } from '../../hooks/usePosts';

const Blog = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const { fetchPosts, posts = [], loading, total = 0, error } = usePosts();

  useEffect(() => {
    console.log('Fetching posts for page:', page);  // Debug log
    fetchPosts(page, limit);
  }, [page, fetchPosts]);  // Removed limit (constant)

  if (error) {
    console.error('Blog error:', error);  // Log for debug
    return (
      <div>
        <p style={{ color: 'red' }}>Error loading posts: {error}</p>
        <p>Backend may be down—check if server is running on port 5001.</p>
      </div>
    );
  }
  if (loading) return <Loader />;

  return (
    <div>
      <h1>Public Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => <BlogPost key={post.id} post={post} />)
      ) : (
        <p>No posts yet. <Link to="/admin">Add one in Admin</Link></p>
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