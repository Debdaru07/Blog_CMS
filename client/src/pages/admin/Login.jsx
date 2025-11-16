import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setToast("Logging you in...");

    setTimeout(() => setToast("Logged in!"), 1200);

    setTimeout(() => {
      setLoading(false);
      navigate("/admin/dashboard");
    }, 1800);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4 md:p-6 lg:p-8 bg-background-light font-display">

      {/* Toast */}
      {toast && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-theme-beige px-5 py-2 rounded-lg shadow-md transition-all">
          {toast}
        </div>
      )}

      <div className="w-full max-w-md rounded-xl bg-background-light p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-theme-black text-[32px] font-bold text-center">
            BlackBeige CMS
          </h1>

          <LoginForm
            onSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={null}
            loading={loading}    // ← USING loading removes ESLint warning
          />

          <p className="text-theme-black/80 text-sm underline text-center cursor-pointer">
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
