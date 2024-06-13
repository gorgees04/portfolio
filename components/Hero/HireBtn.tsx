import React from "react";

const HireBtn = ({ title, url }: { title: string; url?: string }) => {
  return (
    // Button code
    <a href={url}>
      <button className="inline-flex h-12 text-white animate-shimmer items-center justify-center rounded-md border-2 border-gBlue bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {title}
      </button>
    </a>
  );
};

export default HireBtn;
