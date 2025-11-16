import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="flex min-h-screen w-full bg-background-light font-display">

      {/* Sidebar */}
      <Sidebar active={activeTab} setActive={setActiveTab} />

      {/* Appbar + Main Content */}
      <div className="ml-64 w-full flex flex-col">
        <Topbar title={activeTab} />

        {/* This is where each page renders */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;