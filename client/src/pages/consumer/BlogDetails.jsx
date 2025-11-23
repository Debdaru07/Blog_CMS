import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="relative flex w-full flex-col bg-background-light font-display text-primary">

      {/* NAVBAR */}
      <header className="sticky top-0 z-10 w-full border-b border-black/10 bg-background-light/80 px-4 py-3 backdrop-blur-sm sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-5">
              <svg fill="none" viewBox="0 0 48 48">
                <path d="M44 4H30.66V17.33H17.33V30.66H4V44H44V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold">BlackBeige CMS</h2>
          </div>

          <div className="hidden items-center gap-9 md:flex">
            <Link className="text-sm font-medium" to="/consumer">Home</Link>
            <Link className="text-sm font-medium" to="/consumer">About</Link>
            <Link className="text-sm font-medium" to="/consumer">Blog</Link>
            <Link className="text-sm font-medium" to="/consumer">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-10 rounded-full bg-primary px-5 text-sm font-bold text-background-light hover:opacity-80">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT — FIXED SPACING */}
      <main className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 mt-6 mb-12">
        <article className="flex w-full max-w-4xl flex-col items-center">

          {/* IMAGE */}
          <div className="mb-8 w-full overflow-hidden rounded-xl md:mb-10">
            <img
              className="h-auto w-full max-h-[480px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCanIWY03DoN810btKGj6ZJcMPQA5-qbJaKSoT7IbPcwhWYCajK7hzhvm2HzmlId4bvuzF5VBjxX7Cl5wDdxf1Nxk7stU0cbjQ2uQD1cyPQhS1DtCYGaD5_2zN_Ua0glr88A4RPL21BaXfdzWaodFmD54pi8xDkfvTaKHTvWEPO9jxP7oiygbV09-y99SnTGbgBYNJGxucjzemZgkRkaSzt7_iIEB3YgAe9CS14De1pzkN12wUqu7ft00XbqaKEsMGlfyD5PgADDw69"
              alt="Minimalist Architecture"
            />
          </div>

          {/* TITLE + META */}
          <div className="max-w-3xl w-full px-4 text-center flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              The Art of Minimalist Architecture
            </h1>
            <p className="text-base text-black/60">
              By Alex Doe • Published on October 26, 2023 • 7 min read
            </p>
          </div>

          {/* BLOG BODY */}
          <div className="prose prose-lg mx-auto mt-8 max-w-3xl px-4 text-primary"
               style={{ "--tw-prose-body": "#000", "--tw-prose-headings": "#000" }}>
            <p className="text-lg leading-relaxed">
              Minimalist architecture is about achieving better design through simplicity.
              It's an approach that values stripping away the non-essential to reveal the true
              essence of a space.
            </p>

            <p className="text-lg leading-relaxed">
              The core philosophy is not about absence, but about purpose. Every element serves
              a function and contributes to serenity.
            </p>

            <h2 className="font-bold text-2xl">Core Tenets of Minimalism</h2>

            <p className="text-lg leading-relaxed">
              Clean lines, functional forms, and sculpted natural light define the space.
            </p>

            <blockquote className="border-l-4 border-black pl-4 italic text-black/80">
              "The ability to simplify means to eliminate the unnecessary so that the necessary may speak."
              – Hans Hofmann
            </blockquote>

            <p className="text-lg leading-relaxed">
              Minimalist architecture promotes calm and focus by removing clutter and noise
              from the visual environment.
            </p>
          </div>

          {/* RELATED SECTION */}
          <section className="mt-14 w-full pt-10 border-t border-black/10">
            <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-primary">
              You might also like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group cursor-pointer flex flex-col overflow-hidden rounded-lg border border-black bg-background-light transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL5oyd2iKwSwzl20kBtV9QAeggqirJ-SNyfYVp3f9fLh4cAiqUPC_iw7sHzlgWo1du5I-L21TfmWaQY1gPXdSbAlPcZtLI6XKO44mTqVD8DxFh3fjCqCdQsPeQ61kY869CRhKSoDL0jERZUa3UT1NLA_DbvokFTh2-k7wnQ9IpcZNszR3J9rslU3fKrUjkmXrOhXSOdeQsoYl_25Nu5gLqAuDy1Pkb40hcwkIgGSDSgYOAWKIEBfTET9DrNttm1ePBSDdFAsIdQE1N"
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">Interior Minimalism: A Guide</h3>
                  <p className="text-sm text-black/70">
                    Discover how to bring minimalist principles into your home.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer flex flex-col overflow-hidden rounded-lg border border-black bg-background-light transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsTfNuv6n2NtHTx_zLd6mf5fdY_XI-c3sph9IbCtT6VCKyzp0EL4mHE_5OQhCSLMXpNmQeu-W-K-6sLzcM4Otx3tZcA0qgIT_p_dNXsnm95DvzbqszbpXpSAJY7DkkXpSh8HcEnEe7lwoaXpcq2-1uuQIoqEiyyPTpAXQW3pTdGx7XwXrEEeXHcGbxbnQMSvdU1NOAWUaTR7iYZSTIYBeCrSeiI-zI20W8dqN3iGbSLfd-HkAGhspIUaz7ZVsJnYDKw4sXziOqGvnL"
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">The Role of Geometry in Design</h3>
                  <p className="text-sm text-black/70">
                    Explore how shapes and lines create powerful spaces.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer flex flex-col overflow-hidden rounded-lg border border-black bg-background-light transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVSJhVk30DK4KnKS06Gf0qquGnVwtS5XnPOpqR-RJWEe1uYXFjSDGX1IFV_QTVUMsE4dIXAp6Of0eCFh32nJbqo49MB-QwkPLQWl5Ad3otG4pljw7dl3kgNFp8JSx93Lq1z81R6_rO5ZpfT3X6EGu19HEBTR3itZx-JVeTSpJAE-Ihu8WyZ5_l4ysho2Qx-0vb2FWcCV3X4Lmq390YAualdKpj201bC5Krvhf3Ufdd2Pju3veMaoPnVxodPV5dv6bwAwTP0E8XQr0"
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">Sustainable Minimalist Homes</h3>
                  <p className="text-sm text-black/70">
                    Learn how minimalism and sustainability go hand-in-hand.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>

      {/* FOOTER */}
      <footer className="px-5 py-12 text-center bg-primary text-background-light">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link className="text-sm hover:opacity-80" to="/consumer">Privacy Policy</Link>
          <Link className="text-sm hover:opacity-80" to="/consumer">Terms of Service</Link>
          <Link className="text-sm hover:opacity-80" to="/consumer">Contact</Link>
        </div>

        <p className="text-sm opacity-80">
          © 2024 BlackBeige CMS. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default BlogDetails;
