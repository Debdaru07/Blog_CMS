import { useState } from 'react';
import api from '../services/api';
import { usePosts as usePostsContext } from '../contexts/PostsContext';

export const usePosts = () => {
  const context = usePostsContext();  // Pull state from context
  const { dispatch } = context;
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);  // Local for total (per-fetch)

  const fetchPosts = async (page = 1, limit = 5) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await api.get(`/posts?page=${page}&limit=${limit}`);
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data.posts });
      setTotal(res.data.total);  // Set local total
      return res.data;  // Return full { posts, total }
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Couldnt fetch';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      return null;
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
    try {
      const res = await api.get('/posts/my');
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      return res.data;
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Fetch all failed';
      dispatch({ type: 'FETCH_ERROR', payload: errMsg });
      setError(errMsg);
      return null;
    }
  };

  // Return context state + local total + methods
  return { 
    ...context,  // posts, loading, error from context
    total, 
    fetchPosts, 
    createPost, 
    updatePost, 
    deletePost, 
    fetchAllPosts 
  };
};