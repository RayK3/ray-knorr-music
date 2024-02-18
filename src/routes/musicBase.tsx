import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import { musicSocials } from "../data/socials";

export const MusicBase = () => {
  useEffect(() => {
    document.title = "Ray Knorr - Musician";
    document.body.classList.add("bg-seal-brown");
  }, []);

  return (
    <div className="relative w-screen h-screen bg-seal-brown">
      <Link to="/" className="absolute z-10 w-16 h-auto top-8 right-8">
        <img src="/sunglow-logo-1000.png" alt="Sunglow Logo" />
      </Link>
      <div className="absolute pb-20 top-32 md:pb-36">
        <p className="px-10 text-xl text-sunglow">Coming soon.</p>
      </div>
      <Footer
        textColour="text-sunglow"
        bgColour="bg-seal-brown"
        iconColour="text-light-sunglow hover:text-sunglow"
        socials={musicSocials}
      />
    </div>
  );
};
