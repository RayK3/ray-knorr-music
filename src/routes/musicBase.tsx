import React from "react";

export const MusicBase = () => {
  return (
    <div className="relative w-screen h-screen bg-seal-brown">
      <a href="/" className="absolute z-10 w-16 h-auto top-8 right-8">
        <img src="/sunglow-logo-1000.png" alt="Sunglow Logo" />
      </a>
      <div className="absolute top-32">
        <p className="px-10 text-xl font-fragment-mono text-sunglow">
          Coming soon...
        </p>
      </div>
    </div>
  );
};
