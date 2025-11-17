// src/pages/admin/tabs/AllBlogsTab.jsx
import React, { useState } from "react";
import AddBlogTab from "./AddBlogTab";

const samplePosts = [
  { title: "The Art of Minimalist Design", date: "Oct 26, 2023", status: "Published" },
  { title: "Exploring Duotone Color Palettes", date: "Oct 15, 2023", status: "Published" },
  { title: "A Guide to Modern Typography", date: "Sep 30, 2023", status: "Draft" },
  { title: "The Future of Web Development", date: "Sep 05, 2023", status: "Published" },
];

const AllBlogsTab = () => {
  const [showAddPage, setShowAddPage] = useState(false);

  return (
    <div className="relative w-full">

      {/* ======= SLIDE-IN ADD BLOG PAGE (Modal Mode) ======= */}
      {showAddPage && (
        <div
          className={`
            absolute inset-0 z-[60] bg-background-light 
            transition-transform duration-500 ease-out
            ${showAddPage ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <AddBlogTab isModal={true} onBack={() => setShowAddPage(false)} />
        </div>
      )}

      {/* ======= MAIN PAGE CONTENT ======= */}
      <div className={`flex flex-col w-full max-w-7xl mx-auto gap-8 p-4 sm:p-6 md:p-10`}>

        {/* Title + Create Button */}
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-4xl font-black tracking-[-0.033em] text-primary">
            Manage Posts
          </p>

          <button
            onClick={() => setShowAddPage(true)}
            className="flex h-10 min-w-[84px] items-center justify-center gap-2
                       rounded-lg bg-primary px-5 text-sm font-bold text-theme-beige
                       shadow-sm hover:opacity-90 transition"
          >
            <span className="material-symbols-outlined">add</span>
            <span className="truncate">Create New Post</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-primary/10 bg-white/30 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-primary/10">
                  <th className="w-2/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Title</th>
                  <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Date</th>
                  <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Status</th>
                  <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Actions</th>
                </tr>
              </thead>

              <tbody>
                {samplePosts.map((post, index) => (
                  <tr key={index} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="h-[72px] px-6 py-2 text-sm font-medium text-primary">
                      {post.title}
                    </td>

                    <td className="h-[72px] px-6 py-2 text-sm text-primary/80">
                      {post.date}
                    </td>

                    <td className="h-[72px] px-6 py-2">
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold
                          ${post.status === "Draft"
                            ? "bg-primary/5 text-primary/70"
                            : "bg-primary/10 text-primary"}
                        `}
                      >
                        {post.status}
                      </span>
                    </td>

                    <td className="h-[72px] px-6 py-2">
                      <div className="flex items-center gap-2">

                        {/* Edit */}
                        <button className="flex h-8 items-center justify-center gap-1.5 rounded-lg 
                                           bg-primary px-3 text-xs font-bold text-theme-beige 
                                           hover:opacity-80 transition">
                          <span className="material-symbols-outlined text-theme-beige" style={{ fontSize: 16 }}>
                            edit
                          </span>
                          Edit
                        </button>

                        {/* Delete */}
                        <button className="flex h-8 items-center justify-center gap-1.5 rounded-lg 
                                           border border-primary/20 bg-transparent px-3 text-xs font-bold 
                                           text-primary hover:bg-primary/5 transition">
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete</span>
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center py-4 gap-2">
          <button className="flex size-10 items-center justify-center text-primary/60 hover:text-primary">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <button className="flex size-10 items-center justify-center rounded-full bg-primary 
                             text-sm font-bold text-theme-beige">
            1
          </button>

          {[2, 3].map((n) => (
            <button key={n}
              className="flex size-10 items-center justify-center rounded-full text-sm font-normal 
                         text-primary hover:bg-primary/10">
              {n}
            </button>
          ))}

          <span className="flex size-10 items-center justify-center text-primary">…</span>

          {[8, 9, 10].map((n) => (
            <button key={n}
              className="flex size-10 items-center justify-center rounded-full text-sm font-normal 
                         text-primary hover:bg-primary/10">
              {n}
            </button>
          ))}

          <button className="flex size-10 items-center justify-center text-primary/60 hover:text-primary">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-primary/20 px-6 py-20 text-center">
          <div className="flex max-w-md flex-col items-center gap-2">
            <p className="text-lg font-bold text-primary">No Posts Yet</p>
            <p className="text-sm text-primary/70">
              It looks like you haven't created any blog posts yet.
            </p>
          </div>

          <button
            onClick={() => setShowAddPage(true)}
            className="flex h-10 min-w-[84px] items-center justify-center gap-2 rounded-lg 
                       bg-primary px-5 text-sm font-bold text-theme-beige shadow-sm 
                       hover:opacity-90 transition"
          >
            <span className="material-symbols-outlined">add</span>
            <span className="truncate">Create Your First Post</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AllBlogsTab;
