import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const samplePosts = [
    {
      id: 1,
      title: "The Art of Minimalist Web Design",
      excerpt:
        "Discover the principles of creating beautiful, uncluttered websites that focus on user experience.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDS1UNrbPmwO2D73QdtDtIrKbdX3GbHiadliRmPNgG9ri4lB2ncIHQS3FfHtpYWagFOnc5odqyKPGRIztJupK-HDEMnU6KmACkam4aULXy2fPJS1Q2_QeU1Lg9cS50u5kEoPKoNLgzfl9rMoZ7u_-QWfcmMv3d65fWkyhoQNK9oz9lcBIkvcErmyviLdq3XjFuaEv2SyQ8coQyfZEH5xTyJmmG65GsGJ63_VpPGlWKZgdJyPrI9TCHKLoDyslovlny-4D_Tjeocdy62",
      date: "Oct 26, 2023",
      author: "Jane Doe",
    },
    {
      id: 2,
      title: "Unlocking Creativity: A Guide for Developers",
      excerpt:
        "Practical tips and techniques to break through creative blocks and foster innovation in your projects.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4f7P0YaaF2MovX0zBHt31LPga5oSY35S_naLhLbqixOqkj261KUYG-BArCHnFXWpM6_3u6U-AMN9DokKUYQ0xe6RB3wemirNT67iexv2xCphD2nx-0JVXp-EPhmkaDo7yMT_T0v-KFPug--HKynWeZgTIZwF-Mr_qVk6hfiYt2NSw_6_VNaF21e2uFua8xabIPmspHoFgF_VzORDSqCN9AwPhp2Avg_otW0uTPrlfiMCasjRfGNfZRzhTOAdMrDaU2_bVNpxXH3Xp",
      date: "Oct 22, 2023",
      author: "John Smith",
    },
    {
      id: 3,
      title: "Mastering the Black and Beige Palette",
      excerpt:
        "Learn how this timeless color combination can create elegant and sophisticated digital experiences.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgLxSdSamQhHnMe_gL1W9eWf4pHX1cbJ7Gla7Q6Mko7E4S3vG_YRzKIv_iFCSicfsQ86tQifoMRnHxs2Z93uuY7YL7dnRkLR9iIaXXY3U1uV4L4dQTMsiCJttrvb3lSRGW4TChBha2q4r4hCneDwr5Iup-8HMH3JmZuFo5vVSSAvlF-D_TDjSrI8-rxY33pxShM-1930R6l2RBKNr8Prd0vs57X3Gmx8xzZEjcIIG3M-1DaDaRMbSFe7dB-H2OHNPXpUBYJbT36ztb",
      date: "Oct 19, 2023",
      author: "Alex Johnson",
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary dark:text-background-light font-display">

      {/* NAVBAR */}
      <header className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-3 bg-primary text-background-light">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">BlackBeige CMS</h2>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-sm font-medium hover:opacity-80" to="#">Home</Link>
            <Link className="text-sm font-medium hover:opacity-80" to="#">About</Link>
            <Link className="text-sm font-medium hover:opacity-80" to="#">Contact</Link>

            <button className="h-10 px-5 rounded-full bg-background-light text-primary font-bold">
              Subscribe
            </button>
          </div>

          <button className="md:hidden p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-20 flex justify-center">
        <div className="max-w-[1280px] w-full">

          <div className="p-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">From the Blog</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-lg mt-2">
              Explore our latest articles published through the CMS system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {samplePosts.map((post) => (
              <Link
                to={`/consumer/blog/${post.id}`}
                key={post.id}
                className="flex flex-col gap-4 bg-background-light dark:bg-neutral-900/50 rounded-lg shadow-soft hover:shadow-soft-hover transition-shadow cursor-pointer overflow-hidden"
              >
                <div
                  className="w-full aspect-video bg-center bg-cover"
                  style={{ backgroundImage: `url(${post.image})` }}
                />

                <div className="p-4 pt-0 flex flex-col gap-2">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {post.excerpt}
                  </p>
                  <p className="text-xs opacity-70 pt-2">
                    {post.date} • {post.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      {/* FULL PREMIUM FOOTER */}
      <footer className="
        flex flex-col gap-8 px-5 py-12 text-center 
        bg-primary text-background-light
        dark:bg-background-dark dark:border-t dark:border-neutral-800
      ">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link className="text-sm font-normal min-w-40 hover:opacity-80 transition-opacity" to="/consumer">Privacy Policy</Link>
          <Link className="text-sm font-normal min-w-40 hover:opacity-80 transition-opacity" to="/consumer">Terms of Service</Link>
          <Link className="text-sm font-normal min-w-40 hover:opacity-80 transition-opacity" to="/consumer">Contact</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Twitter */}
          <Link className="hover:opacity-80 transition-opacity" to="/consumer">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0..." />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link className="hover:opacity-80 transition-opacity" to="/consumer">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" fillRule="evenodd" d="M16.338 16.338H13.67V12.16..." />
            </svg>
          </Link>

          {/* GitHub */}
          <Link className="hover:opacity-80 transition-opacity" to="/consumer">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" fillRule="evenodd" d="M12 2C6.477 2..." />
            </svg>
          </Link>
        </div>

        <p className="text-sm font-normal opacity-90">© 2024 BlackBeige CMS. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default Blog;
