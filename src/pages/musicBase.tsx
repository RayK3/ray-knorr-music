import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, Header, BackButton } from "../components";
import { musicSocials, musicHeaderLinks } from "../data";

interface MusicBaseProps {
  title: string;
  children: React.ReactNode;
}

export const MusicBase = ({ title, children }: MusicBaseProps) => {
  useEffect(() => {
    document.title = title;
    document.body.classList.add("bg-seal-brown");
  }, [title]);

  return (
    <div className="relative w-screen h-screen bg-seal-brown">
      <BackButton className="absolute z-10 w-12 h-auto text-dark-sunglow hover:text-sunglow hover:cursor-pointer top-12 left-4 md:left-16" />
      <Link to="/" className="absolute z-10 w-16 h-auto top-8 right-8">
        <img src="/sunglow-logo-1000.png" alt="Sunglow Logo" />
      </Link>
      <Header
        textColour="text-dark-sunglow hover:text-sunglow"
        className="pt-16 bg-seal-brown md:pt-0"
        links={musicHeaderLinks}
      />
      <div className="relative">{children}</div>
      <Footer
        textColour="text-sunglow"
        bgColour="bg-seal-brown"
        iconColour="text-light-sunglow hover:text-sunglow"
        socials={musicSocials}
      />
    </div>
  );
};
