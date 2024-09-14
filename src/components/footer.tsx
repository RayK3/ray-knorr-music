import React, { useEffect, useState } from "react";

import { SocialMediaIconType } from "../data/socials";

interface FooterProps {
  textColour: string;
  iconColour: string;
  bgColour?: string;
  socials: SocialMediaIconType[];
}

export const Footer = ({
  textColour,
  iconColour,
  bgColour = "",
  socials,
}: FooterProps): JSX.Element => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`fixed bottom-0 w-full ${bgColour}`}>
      <div
        className={`flex flex-row items-center px-6 py-4 mx-auto overflow-hidden md:block md:py-10 justify-evenly transition-all duration-500 ${
          atBottom && ""
        }`}
      >
        <div className="flex justify-center space-x-5 md:space-x-10 ">
          {socials.map((item) => (
            <a key={item.name} href={item.href} className={`${iconColour}`}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p
          className={`my-3 ml-6 md:ml-0 md:mt-6 md:mb-0 text-xs leading-5 text-center ${textColour}`}
        >
          &copy; 2024 Ray Knorr. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
