import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, Header, ContactForm, Card } from "../components";
import { musicSocials, musicHeaderLinks } from "../data";

export const MusicContact = () => {
  useEffect(() => {
    document.title = "Ray Knorr - Contact";
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
      <div className="flex flex-row items-center justify-center w-full">
        <Card
          title="Contact"
          textColour="text-seal-brown"
          bgColour="bg-white"
          body={<ContactForm textColour="text-dark-sunglow" />}
          className="max-w-7xl w-9/10 md:w-3/4"
          titleClassName="w-full text-center md:pt-4 text-xl md:text-2xl"
        />
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
