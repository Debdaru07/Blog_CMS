import React from "react";

const QuickAction = ({ icon, label, primary }) => (
  <button
    className={`flex min-w-[158px] flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 shadow-sm transition
      ${
        primary
          ? "bg-black text-theme-beige hover:scale-[1.02]"
          : "border border-black/20 text-black hover:bg-black/5"
      }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

export default QuickAction;
