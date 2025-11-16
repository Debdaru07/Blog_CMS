import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setToast("Logging you in...");

    // After 1 second → change text + show checkmark
    setTimeout(() => {
      setToast("Logged in");
    }, 1000);

    // Redirect after another 500ms
    setTimeout(() => {
      setLoading(false);
      navigate("/admin/dashboard");
    }, 1500);
  };

  const isSuccess = toast === "Logged in!";

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4 md:p-6 lg:p-8 bg-background-light font-display">

      {/* Toast */}
      {toast && (
        <div
          className="
            absolute top-6 left-1/2 -translate-x-1/2
            bg-black text-theme-beige px-5 py-2 rounded-lg shadow-md
            flex items-center gap-2 z-50 animate-fadeIn
          "
        >
          {/* Dynamic Icon */}
          {!isSuccess ? (
            <span className="material-symbols-outlined animate-spin">
              settings
            </span>
          ) : (
            <span className="material-symbols-outlined text-[#3cd37a]">
              check_circle
            </span>
          )}

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
            loading={loading}
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
