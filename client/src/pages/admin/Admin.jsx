import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import RichEditor from '../../components/RichEditor';
import { usePosts } from '../../hooks/usePosts';
import { useAuth } from '../../hooks/useAuth';
import { useConfirm } from '../../hooks/useConfirm';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { fetchAllPosts, createPost, updatePost, deletePost, posts, loading, error } = usePosts();
  const { logout } = useAuth();
  const { confirmAction } = useConfirm();

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);  // Added dependency to fix ESLint warning

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, content, excerpt, metaTitle };
    if (editingId) {
      await updatePost(editingId, payload);
      setEditingId(null);
    } else {
      await createPost(payload);
    }
    resetForm();
    fetchAllPosts();
  };

  const resetForm = () => {
    setTitle(''); setContent(''); setExcerpt(''); setMetaTitle(''); setEditingId(null);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setExcerpt(post.excerpt || '');
    setMetaTitle(post.meta_title || '');
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    confirmAction('Delete post?', async () => {
      await deletePost(id);
      fetchAllPosts();
    });
  };

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Admin Panel</h2>
      <Button onClick={logout}>Logout</Button>
      <Link to="/">View Blog</Link>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Excerpt (SEO)" />
        <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta Title (SEO)" />
        <RichEditor value={content} onChange={setContent} />
        <Button type="submit">{editingId ? 'Update' : 'Create'} Post</Button>
        {editingId && <Button onClick={resetForm}>Cancel</Button>}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>All Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>By {post.author.email}</p>
            <Button onClick={() => handleEdit(post)}>Edit</Button>
            <Button variant="secondary" onClick={() => handleDelete(post.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;