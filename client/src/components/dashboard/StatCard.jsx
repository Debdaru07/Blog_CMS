import React from "react";

const StatCard = ({ title, value, change, negative }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 border border-black/10 bg-white/50 shadow-sm hover:shadow-lg transition">
    <p className="text-black/80 text-base font-medium">{title}</p>
    <p className="text-black text-3xl font-bold">{value}</p>
    <p className={`${negative ? "text-[#e70808]" : "text-[#078807]"} text-base`}>
      {change}
    </p>
  </div>
);

export default StatCard;
