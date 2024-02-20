import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../components";
import { musicSocials, musicHeaderLinks } from "../data";

export const MusicBio = () => {
  useEffect(() => {
    document.title = "Ray Knorr - Bio";
    document.body.classList.add("bg-seal-brown");
  }, []);

  return (
    <div className="relative w-screen h-screen bg-seal-brown">
      <Link to="/" className="absolute z-10 w-16 h-auto top-8 right-8">
        <img src="/sunglow-logo-1000.png" alt="Sunglow Logo" />
      </Link>
      <Header
        textColour="text-dark-sunglow"
        bgColour="bg-seal-brown"
        links={musicHeaderLinks}
      />
      <div className="absolute pb-20 top-32 md:pb-36">
        <p className="px-10 text-xl text-sunglow">Bio coming soon.</p>
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
