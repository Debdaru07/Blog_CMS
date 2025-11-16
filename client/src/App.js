import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';
import Blog from './pages/consumer/Blog';
import Admin from './pages/admin/Admin';
import Login from './pages/admin/Login';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) return <p>Checking auth...</p>;
  return token ? children : <Navigate to="/login" />;
};

const AppContent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
    </Routes>
  </Router>
);

const App = () => (
  <AuthProvider>
    <PostsProvider>
      <AppContent />
    </PostsProvider>
  </AuthProvider>
);

export default App;