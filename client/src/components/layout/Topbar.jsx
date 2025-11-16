import React from "react";

const Topbar = ({ title }) => (
  <header className="flex items-center whitespace-nowrap border-b border-black/10 px-10 py-4 bg-background-light">
    <h2 className="text-black text-lg font-bold leading-tight tracking-[-0.015em]">
      {title}
    </h2>
    <div className="flex flex-1 justify-end gap-4 items-center">
      <button className="flex cursor-pointer items-center justify-center 
                         overflow-hidden rounded-full h-10 w-10 
                         bg-black/5 text-black 
                         hover:bg-black/10 transition-colors duration-200">
        <span className="material-symbols-outlined text-xl">
          notifications
        </span>
      </button>
    </div>
  </header>
);

export default Topbar;
