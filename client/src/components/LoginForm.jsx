import React from 'react';

const LoginForm = ({ onSubmit, email, setEmail, password, setPassword, error, loading }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">

      {/* EMAIL */}
      <label className="flex flex-col w-full">
        <p className="text-theme-black text-base font-medium leading-normal pb-2">
          Email
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input w-full rounded-lg border border-theme-black bg-transparent h-14 
                     p-[15px] text-theme-black placeholder:text-theme-black/60 
                     text-base font-normal leading-normal
                     focus:outline-0 focus:ring-2 focus:ring-theme-black"
        />
      </label>

      {/* PASSWORD */}
      <label className="flex flex-col w-full">
        <p className="text-theme-black text-base font-medium leading-normal pb-2">
          Password
        </p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input w-full rounded-lg border border-theme-black bg-transparent h-14
                     p-[15px] text-theme-black placeholder:text-theme-black/60
                     text-base font-normal leading-normal
                     focus:outline-0 focus:ring-2 focus:ring-theme-black"
        />
      </label>

      {error && (
        <p className="text-red-600 text-sm text-center mt-[-10px]">
          {error}
        </p>
      )}

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className={`flex min-w-[84px] w-full items-center justify-center rounded-lg h-12 px-5 
                    text-base font-bold tracking-[0.015em] transition-opacity

                    ${loading
                      ? "bg-theme-black/40 cursor-not-allowed text-theme-beige/60"
                      : "bg-theme-black text-theme-beige cursor-pointer hover:opacity-90"
                    }

                    focus:outline-none focus:ring-2 focus:ring-theme-black
                    focus:ring-offset-2 focus:ring-offset-background-light`}
      >
        {loading ? "Please wait..." : "Login"}
      </button>

    </form>
  );
};

export default LoginForm;
