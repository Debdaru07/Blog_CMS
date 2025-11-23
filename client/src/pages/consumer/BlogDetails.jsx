import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  // Static placeholder content (you can make dynamic later)
  const post = {
    title: "The Art of Minimalist Architecture",
    date: "October 26, 2023",
    readTime: "7 min read",
    author: "Alex Doe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCanIWY03DoN810btKGj6ZJcMPQA5-qbJaKSoT7IbPcwhWYCajK7hzhvm2HzmlId4bvuzF5VBjxX7Cl5wDdxf1Nxk7stU0cbjQ2uQD1cyPQhS1DtCYGaD5_2zN_Ua0glr88A4RPL21BaXfdzWaodFmD54pi8xDkfvTaKHTvWEPO9jxP7oiygbV09-y99SnTGbgBYNJGxucjzemZgkRkaSzt7_iIEB3YgAe9CS14De1pzkN12wUqu7ft00XbqaKEsMGlfyD5PgADDw69",
    content: `
      Minimalist architecture is about achieving better design through simplicity — a design
      of spaces, light, and materials. It's an approach that values stripping away the
      non-essential to reveal the true essence of a space.

      The core philosophy is not about absence, but about purpose. Every element serves a
      function and contributes to the overall tranquility and aesthetic.
    `,
  };

  return (
    <div className="min-h-screen bg-background-light font-display text-primary">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-10 w-full border-b border-black/10 bg-background-light/80 backdrop-blur-sm px-4 py-3 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/consumer/blog" className="text-primary">
              <span className="material-symbols-outlined">chevron_left</span>
            </Link>
            <h2 className="text-lg font-bold">BlackBeige CMS</h2>
          </div>

          <div className="hidden md:flex gap-8 text-primary">
            <Link to="#" className="text-sm">Home</Link>
            <Link to="#" className="text-sm">About</Link>
            <Link to="#" className="text-sm">Blog</Link>
            <Link to="#" className="text-sm">Contact</Link>
          </div>

          <button className="h-10 px-5 rounded-full bg-primary text-background-light font-bold">
            Subscribe
          </button>
        </div>
      </header>

      {/* MAIN POST */}
      <main className="flex justify-center px-4 py-10 sm:px-8 md:py-16">
        <article className="flex flex-col items-center max-w-4xl w-full">

          {/* COVER IMAGE */}
          <div className="w-full rounded-xl overflow-hidden mb-10">
            <img src={post.image} className="w-full h-auto max-h-[500px] object-cover" alt="" />
          </div>

          {/* TITLE + META */}
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
              {post.title}
            </h1>

            <p className="text-black/60 text-base">
              By {post.author} • Published on {post.date} • {post.readTime}
            </p>
          </div>

          {/* BODY CONTENT */}
          <div className="prose prose-lg mt-10 max-w-none text-primary">
            <p className="leading-relaxed text-lg">
              Minimalist architecture is about achieving better design through simplicity — a design
              of spaces, light, and materials. It's an approach that values stripping away the
              non-essential to reveal the true essence of a space.
            </p>

            <p className="leading-relaxed text-lg">
              The core philosophy is not about absence, but about purpose. Every element serves a
              function and contributes to the overall tranquility and aesthetic.
            </p>

            <blockquote className="border-l-4 border-black pl-4 italic text-black/80">
              "The ability to simplify means to eliminate the unnecessary so that the necessary may speak." — Hans Hofmann
            </blockquote>

            <p className="leading-relaxed text-lg">
              Ultimately, minimalist design seeks to create a sanctuary from chaos, offering calm
              and clarity to those who inhabit it.
            </p>
          </div>

        </article>
      </main>

    </div>
  );
};

export default BlogDetails;
