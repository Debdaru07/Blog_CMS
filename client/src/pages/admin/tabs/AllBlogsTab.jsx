import React from "react";

const samplePosts = [
  {
    title: "The Art of Minimalist Design",
    date: "Oct 26, 2023",
    status: "Published",
  },
  {
    title: "Exploring Duotone Color Palettes",
    date: "Oct 15, 2023",
    status: "Published",
  },
  {
    title: "A Guide to Modern Typography",
    date: "Sep 30, 2023",
    status: "Draft",
  },
  {
    title: "The Future of Web Development",
    date: "Sep 05, 2023",
    status: "Published",
  },
];

const AllBlogsTab = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto gap-8 p-4 sm:p-6 md:p-10">

      {/* Top Row: Title + Button */}
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="text-4xl font-black tracking-[-0.03em] text-primary">
          Manage Posts
        </p>

        <button className="flex h-10 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-beige shadow-sm hover:opacity-90 transition">
          <span className="material-symbols-outlined">add</span>
          <span className="truncate">Create New Post</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-xl border border-primary/10 bg-white/30 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-primary/10 bg-transparent">
                <th className="w-2/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Title</th>
                <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Date</th>
                <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Status</th>
                <th className="w-1/5 px-6 py-4 text-left text-sm font-medium text-primary/70">Actions</th>
              </tr>
            </thead>

            <tbody>
              {samplePosts.map((post, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                >
                  <td className="h-[72px] px-6 py-2 text-sm font-medium text-primary">
                    {post.title}
                  </td>

                  <td className="h-[72px] px-6 py-2 text-sm text-primary/80">
                    {post.date}
                  </td>

                  <td className="h-[72px] px-6 py-2">
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${
                        post.status === "Draft"
                          ? "bg-primary/5 text-primary/70"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="h-[72px] px-6 py-2">
                    <div className="flex items-center gap-2">

                      {/* Edit Button */}
                      <button className="flex h-8 items-center justify-center gap-1.5 rounded-lg bg-black px-3 text-xs font-bold text-beige hover:opacity-80 transition">
                        <span className="material-symbols-outlined text-beige" style={{ fontSize: 16 }}>
                          edit
                        </span>
                        <span className="text-beige">Edit</span>
                      </button>

                      {/* Delete Button */}
                      <button className="flex h-8 items-center justify-center gap-1.5 rounded-lg border border-primary/20 bg-transparent px-3 text-xs font-bold text-primary hover:bg-primary/5 transition">
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                          delete
                        </span>
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

        <button className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-beige">
          1
        </button>
        <button className="flex size-10 items-center justify-center rounded-full text-sm font-normal text-primary hover:bg-primary/10">
          2
        </button>
        <button className="flex size-10 items-center justify-center rounded-full text-sm font-normal text-primary hover:bg-primary/10">
          3
        </button>

        <span className="flex size-10 items-center justify-center text-primary">…</span>

        <button className="flex size-10 items-center justify-center rounded-full text-sm font-normal text-primary hover:bg-primary/10">
          8
        </button>
        <button className="flex size-10 items-center justify-center rounded-full text-sm font-normal text-primary hover:bg-primary/10">
          9
        </button>
        <button className="flex size-10 items-center justify-center rounded-full text-sm font-normal text-primary hover:bg-primary/10">
          10
        </button>

        <button className="flex size-10 items-center justify-center text-primary/60 hover:text-primary">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-primary/20 px-6 py-20 text-center">
        <div className="flex max-w-md flex-col items-center gap-2">
          <p className="text-lg font-bold text-primary">No Posts Yet</p>
          <p className="text-sm text-primary/70">
            It looks like you haven't created any blog posts. Get started by creating your first one.
          </p>
        </div>

        <button className="flex h-10 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-beige shadow-sm hover:opacity-90 transition">
          <span className="material-symbols-outlined">add</span>
          <span className="truncate">Create Your First Post</span>
        </button>
      </div>
    </div>
  );
};

export default AllBlogsTab;