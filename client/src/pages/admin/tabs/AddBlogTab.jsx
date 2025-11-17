import React from "react";

const AddBlogTab = () => {
  return (
    <div className="w-full min-h-screen bg-background-light px-4 md:px-10 lg:px-20 xl:px-40 py-10 font-display">

      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
        <h1 className="text-primary text-4xl font-black tracking-[-0.033em]">
          Create New Post
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-primary/60">Draft saved at 10:42 AM</span>

          <button
            className="flex h-11 px-6 min-w-[110px] cursor-pointer items-center justify-center 
                       rounded-lg bg-primary/10 text-primary font-bold text-sm tracking-[0.015em] 
                       hover:bg-primary/20 transition-colors"
          >
            Save Draft
          </button>

          <button
            className="flex h-11 px-6 min-w-[110px] cursor-pointer items-center justify-center 
                       rounded-lg bg-primary text-beige font-bold text-sm tracking-[0.015em] 
                       hover:opacity-90 transition-opacity"
          >
            Publish
          </button>
        </div>
      </div>

      {/* Blog Title + Short Desc */}
      <div className="flex flex-col gap-6 mb-10">
        <label className="flex flex-col w-full">
          <p className="text-primary text-base font-medium pb-2">Blog Title</p>
          <input
            placeholder="Post Title"
            className="form-input w-full rounded-lg h-14 px-[15px] 
                       bg-beige border border-primary/20 
                       text-primary placeholder:text-primary/40 
                       text-lg font-semibold focus:ring-2 focus:ring-primary/50 shadow-sm"
          />
        </label>

        <label className="flex flex-col w-full">
          <p className="text-primary text-base font-medium pb-2">Short Description</p>
          <textarea
            placeholder="A brief summary of your post..."
            className="form-input w-full min-h-28 rounded-lg p-[15px] 
                       bg-beige border border-primary/20 
                       text-primary placeholder:text-primary/40
                       focus:ring-2 focus:ring-primary/50 resize-y shadow-sm"
          />
        </label>
      </div>

      {/* Content Editor */}
      <div className="mb-10">
        <p className="text-primary text-base font-medium pb-2">Content</p>

        <div className="rounded-lg border border-primary/20 shadow-sm bg-beige flex flex-col">
          <textarea
            placeholder="Start writing your story..."
            className="form-input w-full min-h-96 rounded-t-lg p-[15px] 
                       bg-beige text-primary placeholder:text-primary/40 
                       resize-y focus:ring-0 border-0"
          />

          {/* Toolbar */}
          <div className="flex items-center gap-4 px-[15px] py-2 border-t border-primary/20 bg-beige/50">
            <div className="flex items-center gap-1">
              {["format_bold", "format_italic", "link", "format_list_bulleted", "format_list_numbered", "code"].map(
                (icon) => (
                  <button
                    key={icon}
                    className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary/70 text-xl">
                      {icon}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-beige rounded-lg border border-primary/20 shadow-sm mb-10">
        <details className="group">
          <summary className="flex items-center justify-between p-4 cursor-pointer">
            <h3 className="text-lg font-bold text-primary">Search Engine Optimization</h3>
            <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>

          <div className="px-4 pb-4 flex flex-col gap-4">
            {/* Slug */}
            <label className="flex flex-col">
              <div className="flex justify-between items-center pb-2">
                <p className="text-primary text-sm font-medium">URL Slug</p>
                <p className="text-primary/50 text-xs">/blog/[slug]</p>
              </div>
              <input
                placeholder="e.g., my-awesome-post"
                className="form-input h-11 px-3 bg-beige/50 border border-primary/20 
                           rounded-lg text-primary placeholder:text-primary/40 focus:ring-2 
                           focus:ring-primary/50"
              />
            </label>

            {/* Meta Title */}
            <label className="flex flex-col">
              <div className="flex justify-between items-center pb-2">
                <p className="text-primary text-sm font-medium">Meta Title</p>
                <p className="text-primary/50 text-xs">0 / 60</p>
              </div>
              <input
                placeholder="Title for search engines"
                className="form-input h-11 px-3 bg-beige/50 border border-primary/20 
                           rounded-lg text-primary placeholder:text-primary/40 focus:ring-2 
                           focus:ring-primary/50"
              />
            </label>

            {/* Meta Description */}
            <label className="flex flex-col">
              <div className="flex justify-between items-center pb-2">
                <p className="text-primary text-sm font-medium">Meta Description</p>
                <p className="text-primary/50 text-xs">0 / 160</p>
              </div>
              <textarea
                placeholder="A brief summary for search engines..."
                className="form-input min-h-24 p-3 bg-beige/50 border border-primary/20 rounded-lg 
                           text-primary placeholder:text-primary/40 resize-y focus:ring-2 
                           focus:ring-primary/50"
              />
            </label>
          </div>
        </details>
      </div>

      {/* Media & Attachments */}
      <div className="flex flex-col gap-4 mb-14">
        <h3 className="text-lg font-bold text-primary">Media & Attachments</h3>

        {/* Upload Box */}
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/30 
                        rounded-lg bg-beige/50 hover:border-primary/50 hover:bg-beige 
                        text-center transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-5xl text-primary/40 mb-2">
            cloud_upload
          </span>
          <p className="text-primary font-semibold">Drag & drop files here</p>
          <p className="text-sm text-primary/60">or</p>

          <button
            className="mt-2 h-9 px-4 rounded-lg bg-primary text-beige text-sm font-medium 
                       hover:opacity-90 transition-opacity"
          >
            Click to upload
          </button>
        </div>

        {/* Sample Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {[1, 2].map((img) => (
            <div
              key={img}
              className="relative group aspect-square rounded-lg overflow-hidden shadow-sm"
            >
              <img
                className="w-full h-full object-cover"
                src={
                  img === 1
                    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBS_7N7XH9wVe9i8KtYCXGyA18Vz78AFZkYETH4Jbzn_IN0bOHbiDfyOEVf3TZvFuJgnv2uAt2eyPqhZVPjZnH4q20XZmxq0Q454Mus1A-SmtwzStJPATpoBVS6Zh2vew6E_zA5QM4RxxsK032Bi8fKpwgubd_-i4HbTTmcy5w_2dkuOLZiqOwE61h5_iVtsNZcNUc9WYXYnEw4g6R43uTHuB2gV68kHGFNV8-A3ju5H8tKpYblX6DIURUxx66oKkaBWquqhZEk5ZlH"
                    : "https://lh3.googleusercontent.com/aida-public/AB6AXuCAj0RV6qkpWJlYhsgRJS7uWsAqgmGBMrMVHPw5LieJ7OHNrFA1fvSsLkKOpJBJ-jfBInLshirm6QIREMlv1yzeIg7cbPyXwbxxmUJcvKLy58mse43vzqZqKdGLcg0H3vrzVobhtUTQRzmkEZV-itYH9JcOktm_LfdVMiFxnbBcfIYOT5HXGMTIMGZHzygNbOj9QnhCZaOjzFtbh2dQrOqNZWjOoRPf14IRjlqPGH01Pm72A3vGFMKbASdmE0tzo7oxwT13ycxAwNnI"
                }
                alt=""
              />

              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="p-2 bg-primary/70 hover:bg-primary text-beige rounded-full">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddBlogTab;