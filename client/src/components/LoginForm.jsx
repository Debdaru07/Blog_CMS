import React from 'react';
import Button from './common/Button';

const LoginForm = ({ onSubmit, email, setEmail, password, setPassword, error }) => (
  <form onSubmit={onSubmit}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      required
    />
    <Button type="submit">Login</Button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </form>
);

export default LoginForm;