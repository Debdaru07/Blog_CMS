// src/pages/admin/tabs/AddBlogTab.jsx
import React from "react";

const AddBlogTab = ({ isModal = false, onBack }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-background-light px-4 md:px-10 lg:px-20 xl:px-40 py-10 font-display relative">

      {/* Back Button — visible only in modal */}
      {isModal && (
        <button
          onClick={onBack}
          className="absolute left-4 top-4 flex items-center gap-2 
                     text-primary font-medium hover:opacity-70 z-[80]"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
      )}

      {/* Add spacing to avoid overlap with back button */}
      <div className={`${isModal ? "pt-14" : ""}`}>

        {/* Page Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
          <h1 className="text-primary text-4xl font-black tracking-[-0.033em]">
            Create New Post
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-primary/60">Draft saved at 10:42 AM</span>

            <button className="h-11 px-6 min-w-[110px] rounded-lg bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition">
              Save Draft
            </button>

            <button className="h-11 px-6 min-w-[110px] rounded-lg bg-primary text-theme-beige font-bold text-sm hover:opacity-90 transition">
              Publish
            </button>
          </div>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col gap-6 mb-10">
          <label>
            <p className="text-primary font-medium pb-2">Blog Title</p>
            <input className="w-full h-14 rounded-lg bg-theme-beige border border-primary/20 px-4 text-lg font-semibold placeholder:text-primary/40 focus:ring-2 focus:ring-primary/50" placeholder="Post Title" />
          </label>

          <label>
            <p className="text-primary font-medium pb-2">Short Description</p>
            <textarea className="w-full min-h-28 rounded-lg bg-theme-beige border border-primary/20 p-4 placeholder:text-primary/40 resize-y focus:ring-2 focus:ring-primary/50" placeholder="A brief summary of your post..." />
          </label>
        </div>

        {/* Content Editor */}
        <div className="mb-10">
          <p className="text-primary font-medium pb-2">Content</p>

          <div className="rounded-lg border border-primary/20 bg-theme-beige shadow-sm">
            <textarea
              className="w-full min-h-96 rounded-t-lg p-4 bg-theme-beige text-primary placeholder:text-primary/40 resize-y focus:ring-0 border-0"
              placeholder="Start writing your story..."
            />

            <div className="flex items-center gap-2 px-4 py-2 border-t border-primary/20 bg-theme-beige/50">
              {[
                "format_bold",
                "format_italic",
                "link",
                "format_list_bulleted",
                "format_list_numbered",
                "code",
              ].map((icon) => (
                <button key={icon} className="p-1.5 rounded-md hover:bg-primary/10 transition">
                  <span className="material-symbols-outlined text-primary/70 text-xl">
                    {icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="bg-theme-beige rounded-lg border border-primary/20 shadow-sm mb-10">
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <h3 className="text-lg font-bold text-primary">Search Engine Optimization</h3>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>

            <div className="px-4 pb-4 flex flex-col gap-4">
              {/* Slug */}
              <label>
                <div className="flex justify-between pb-2">
                  <p className="text-sm font-medium">URL Slug</p>
                  <p className="text-xs text-primary/50">/blog/[slug]</p>
                </div>
                <input className="w-full h-11 px-3 bg-theme-beige/50 border border-primary/20 rounded-lg placeholder:text-primary/40 focus:ring-2 focus:ring-primary/50" placeholder="e.g., my-awesome-post" />
              </label>

              {/* Meta Title */}
              <label>
                <div className="flex justify-between pb-2">
                  <p className="text-sm font-medium">Meta Title</p>
                  <p className="text-xs text-primary/50">0 / 60</p>
                </div>
                <input className="w-full h-11 px-3 bg-theme-beige/50 border border-primary/20 rounded-lg placeholder:text-primary/40 focus:ring-2 focus:ring-primary/50" placeholder="Title for search engines" />
              </label>

              {/* Meta Description */}
              <label>
                <div className="flex justify-between pb-2">
                  <p className="text-sm font-medium">Meta Description</p>
                  <p className="text-xs text-primary/50">0 / 160</p>
                </div>
                <textarea className="w-full min-h-24 p-3 bg-theme-beige/50 border border-primary/20 rounded-lg placeholder:text-primary/40 resize-y focus:ring-2 focus:ring-primary/50" placeholder="A brief summary for search engines..." />
              </label>
            </div>
          </details>
        </div>

        {/* Media Upload */}
        <div className="flex flex-col gap-4 mb-14">
          <h3 className="text-lg font-bold text-primary">Media & Attachments</h3>

          {/* Drop Zone */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/30 rounded-lg bg-theme-beige/50 hover:border-primary/50 hover:bg-theme-beige transition cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-primary/40 mb-2">cloud_upload</span>
            <p className="font-semibold text-primary">Drag & drop files here</p>
            <p className="text-sm text-primary/60">or</p>
            <button className="mt-2 h-9 px-4 rounded-lg bg-primary text-theme-beige hover:opacity-90 transition">Click to upload</button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {[1, 2].map((img) => (
              <div key={img} className="relative group aspect-square rounded-lg overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src={
                    img === 1
                      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBS_7N7XH9wVe9i8KtYCXGyA18Vz78AFZkYETH4Jbzn_IN0bOHbiDfyOEVf3TZvFuJgnv2uAt2eyPqhZVPjZnH4q20XZmxq0Q454Mus1A-SmtwzStJPATpoBVS6Zh2vew6E_zA5QM4RxxsK032Bi8fKpwgubd_-i4HbTTmcy5w_2dkuOLZiqOwE61h5_iVtsNZcNUc9WYXYnEw4g6R43uTHuB2gV68kHGFNV8-A3ju5H8tKpYblX6DIURUxx66oKkaBWquqhZEk5ZlH"
                      : "https://lh3.googleusercontent.com/aida-public/AB6AXuCAj0RV6qkpWJlYhsgRJS7uWsAqgmGBMrMVHPw5LieJ7OHNrFA1fvSsLkKOpJBJ-jfBInLshirm6QIREMlv1yzeIg7cbPyXwbxxmUJcvKLy58mse43vzqZqKdGLcg0H3vrzVobhtUTQRzmkEZV-itYH9JcOktm_LfdVMiFxnbBcfIYOT5HXGMTIMGZHzygNbOj9QnhCZaOjzFtbh2dQrOqNZWjOoRPf14IRjlqPGH01Pm72A3vGFMKbASdmE0tzo7oxwT13ycxAwNnI"
                  }
                  alt=""
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-primary/70 hover:bg-primary text-theme-beige p-2 rounded-full">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddBlogTab;
