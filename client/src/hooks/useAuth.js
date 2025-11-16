import { useState } from 'react';
import api from '../services/api';
import { useAuth as useAuthContext } from '../contexts/AuthContext';  // Renamed import

export const useAuth = () => {
  const { dispatch } = useAuthContext();  // Now uses renamed import
  const [error, setError] = useState('');

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      dispatch({ type: 'LOGIN', payload: res.data });
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
      return false;
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return { login, logout, error };
};