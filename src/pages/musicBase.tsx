import React, { useEffect } from "react";
import { Footer, Header } from "../components";
import { musicSocials, musicHeaderLinks } from "../data";

interface MusicBaseProps {
  title: string;
  children: React.ReactNode;
  bg?: string;
  style?: any;
}

export const MusicBase = ({
  title,
  children,
  bg = "bg-black",
  style = {},
}: MusicBaseProps) => {
  useEffect(() => {
    document.title = title;
    document.body.classList.add(
      "bg-linear-to-br",
      "from-light-seal-brown",
      "to-seal-brown"
    );
  }, [title]);

  return (
    <div className={`relative w-full overflow-hidden ${bg}`} style={style}>
      <div className="flex flex-col overflow-auto min-h-dvh">
        <Header
          textColour="text-light-sunglow hover:text-sunglow"
          className="bg-dark-raisin-black"
          links={musicHeaderLinks}
        />
        <div className="relative overflow-auto grow">{children}</div>
        <Footer
          textColour="text-sunglow"
          iconColour="text-light-sunglow hover:text-sunglow"
          bgColour="bg-dark-raisin-black"
          socials={musicSocials}
        />
      </div>
    </div>
  );
};
