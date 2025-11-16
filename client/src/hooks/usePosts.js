import { useState } from 'react';
import api from '../services/api';
import { usePosts as usePostsContext } from '../contexts/PostsContext';

export const usePosts = () => {
  const context = usePostsContext();
  const { dispatch } = context;
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);

  const fetchPosts = async (page = 1, limit = 5) => {
    dispatch({ type: 'FETCH_START' });
    setError('');  // Clear previous error
    try {
      const res = await api.get(`/posts?page=${page}&limit=${limit}`);
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data.posts });
      setTotal(res.data.total);
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Fetch failed (check backend)';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      console.error('API Error:', err);  // Log for debug
    }
  };

  const createPost = async (postData) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await api.post('/posts', postData);
      dispatch({ type: 'CREATE_SUCCESS', payload: res.data });
      return res.data;
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Create failed';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await api.put(`/posts/${id}`, postData);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
      return res.data;
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Update failed';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      throw err;
    }
  };

  const deletePost = async (id) => {
    dispatch({ type: 'FETCH_START' });
    try {
      await api.delete(`/posts/${id}`);
      dispatch({ type: 'DELETE_SUCCESS', payload: id });
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Delete failed';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      throw err;
    }
  };

  const fetchAllPosts = async () => {
    dispatch({ type: 'FETCH_START' });
    setError('');
    try {
      const res = await api.get('/posts/my');
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Fetch all failed';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      console.error('API Error:', err);
    }
  };

  return { 
    ...context, 
    total, 
    error,  // From local state
    fetchPosts, 
    createPost, 
    updatePost, 
    deletePost, 
    fetchAllPosts 
  };
};