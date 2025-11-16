import React from "react";

const Topbar = ({ title }) => (
  <header className="flex items-center justify-between border-b border-black/10 px-10 py-4 bg-background-light">
    <h2 className="text-black text-lg font-bold tracking-tight">{title}</h2>

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
);

export default Topbar;