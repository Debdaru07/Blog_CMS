import React from "react";
import StatCard from "./StatCard";
import QuickAction from "./QuickAction";

const DashboardContent = () => {
  return (
    <main className="p-6">

      <h1 className="text-black text-[32px] font-bold tracking-tight px-4 pb-3 pt-6">
        Welcome back, Admin!
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        <StatCard title="Total Posts" value="128" change="+5.4%" />
        <StatCard title="Total Page Views" value="15,723" change="+12.1%" />
        <StatCard title="Comments" value="34" change="-2.9%" negative />
        <StatCard title="Subscribers" value="450" change="+1.8%" />
      </div>

      {/* Quick Actions */}
      <h2 className="text-black text-[22px] font-bold px-4 pt-8 pb-3">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4 p-4">
        <QuickAction icon="edit_document" label="Write a New Post" primary />
        <QuickAction icon="public" label="View Site" />
        <QuickAction icon="chat_bubble" label="Manage Comments" />
      </div>

    </main>
  );
};

export default DashboardContent;