import React, { useEffect } from "react";
import { Footer, Header } from "../components";
import { musicSocials, musicHeaderLinks } from "../data";

interface MusicBaseProps {
  title: string;
  children: React.ReactNode;
}

export const MusicBase = ({ title, children }: MusicBaseProps) => {
  useEffect(() => {
    document.title = title;
    document.body.classList.add(
      "bg-gradient-to-br",
      "from-light-seal-brown",
      "to-seal-brown"
    );
  }, [title]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-light-seal-brown to-seal-brown">
      <div className="flex flex-col h-full overflow-auto">
        <Header
          textColour="text-sunglow hover:text-sunglow"
          className=""
          links={musicHeaderLinks}
        />
        <div className="relative flex-grow">{children}</div>
        <Footer
          textColour="text-sunglow"
          iconColour="text-light-sunglow hover:text-sunglow"
          bgColour="bg-raisin-black"
          socials={musicSocials}
        />
      </div>
    </div>
  );
};
