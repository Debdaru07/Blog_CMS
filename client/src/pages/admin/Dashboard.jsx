import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-background-light font-display">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-black text-theme-beige p-4 flex flex-col justify-between">

        {/* Logo */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className="rounded-full bg-cover bg-center size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAj4Itm8PcQLCxfuZfnrVAA74CqsU1QRruFtWp42lVl4T7EN9Bqh8oGBsAMiT1-ZOW8B5EmzwRYQEjnMuU4MCXxHu7DT0AzHmR7flQwyZvUEqOr_zhcCQmPJEciPGLuo6_A7htnaQp4V0KrBUTGrZQABnd4xPjl_lTHenI48SQk5CDDRA2tnNS4hGpR0QOPXqyOzzJwcBe7QeNsz2Hhe4naP6KKzbW2E3PCFNzF0_mMbEj-7f1BBNSPjVPkU9Vjy0MNUBlH4Yobiqo');",
              }}
            />
            <div>
              <h1 className="text-theme-beige text-base font-medium">
                BlackBeige
              </h1>
              <p className="text-theme-beige/70 text-sm">CMS</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <SideItem active icon="dashboard" label="Dashboard" />
            <SideItem icon="add_box" label="Add New Blog" />
            <SideItem icon="article" label="All Blogs" />
            <SideItem icon="photo_library" label="Media Library" />
          </div>
        </div>

        {/* Logout */}
        <div>
          <SideItem icon="logout" label="Logout" />
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full">

        {/* TopBar */}
        <header className="flex items-center justify-between border-b border-black/10 px-10 py-4">
          <h2 className="text-black text-lg font-bold tracking-tight">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <button className="rounded-full h-10 w-10 bg-black/5 hover:bg-black/10 flex items-center justify-center transition">
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
            </button>

            <div
              className="rounded-full bg-cover bg-center size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-DTnIvGpPZW487XzCWSr6_c1PCmdqL85hNufbcutFl5an4DJMAlQ9rfvi7Yotz5Wwj55w5zHPA0Mbxz2yGhVyEdzNp1kY-wCgDipL8KdxZqdNXvMhMe3NjHB9yssOqM7ALvgS48DTyqXZksvOEHf1C5lSqYlZW3TgcITDKUbomBNcHxlS-oPJ8ktIUr4_Gb0ce9m1eRKMVOVVIV38zeVvQ00WdXSRQ_bM2UJsjGehSR3bl21_T-sLOVhhIEwCqxBOY8-2pTpHRDk8');",
              }}
            />
          </div>
        </header>

        {/* Content */}
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
      </div>
    </div>
  );
};

/* --- Components --- */

const SideItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
      active ? "bg-theme-beige/10 text-theme-beige" : "hover:bg-theme-beige/10"
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <p className="text-sm font-medium">{label}</p>
  </div>
);

const StatCard = ({ title, value, change, negative }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 border border-black/10 bg-white/50 shadow-sm hover:shadow-lg transition">
    <p className="text-black/80 text-base font-medium">{title}</p>
    <p className="text-black text-3xl font-bold">{value}</p>
    <p className={`${negative ? "text-[#e70808]" : "text-[#078807]"} text-base`}>
      {change}
    </p>
  </div>
);

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

export default Dashboard;
