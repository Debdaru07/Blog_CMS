import React from "react";

const CenteredTitle = ({ title }) => (
  <div className="w-full h-full flex items-center justify-center">
    <h1 className="text-black text-3xl font-bold">{title}</h1>
  </div>
);

export default CenteredTitle;
