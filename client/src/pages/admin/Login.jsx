import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) navigate('/admin');
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center p-4 md:p-6 lg:p-8 bg-background-light font-display"
    >
      <div className="w-full max-w-md rounded-xl bg-background-light p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-theme-black text-[32px] font-bold leading-tight text-center">
            BlackBeige CMS
          </h1>

          <LoginForm
            onSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
          />

          <p className="text-theme-black/80 text-sm underline text-center hover:opacity-75 cursor-pointer">
            Forgot password?
          </p>

          <Link
            to="/"
            className="text-theme-black/80 text-sm text-center hover:opacity-70"
          >
            Back to Blog
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
