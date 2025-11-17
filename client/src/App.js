import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

// Redirect component for /admin → /admin/dashboard
const AdminRedirect = () => <Navigate to="/admin/dashboard" replace />;

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) return <p>Checking auth...</p>;
  return token ? children : <Navigate to="/login" replace />;
};

const AppContent = () => (
  <Router basename="/Blog_CMS">   {/* 👈 IMPORTANT for GitHub Pages */}
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      {/* Admin root → redirect */}
      <Route path="/admin" element={ <ProtectedRoute> <AdminRedirect /> </ProtectedRoute> }/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
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
