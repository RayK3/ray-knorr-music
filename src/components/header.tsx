import React from "react";
import { Link } from "react-router-dom";

import { HeaderLinkType } from "../data/headerLinks";
import { BackButton } from "./backButton";

interface HeaderProps {
  textColour: string;
  links: HeaderLinkType[];
  className?: string;
}

export const Header = ({
  textColour,
  links,
  className = "",
}: HeaderProps): JSX.Element => {
  return (
    <header className={`w-full flex flex-row justify-end pb-8 ${className}`}>
      <div
        className={`flex flex-row w-full items-center px-6 h-24 overflow-hidden justify-between`}
      >
        <BackButton className="z-10 w-12 h-auto ml-6 md:ml-4 text-dark-sunglow hover:text-sunglow hover:cursor-pointer " />
        <div>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`${textColour} text-xs md:text-lg px-4 py-16 md:px-12`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link to="/" className="z-10 w-16 h-auto mr-6 md:mr-4">
          <img src="/sunglow-logo-1000.png" alt="Sunglow Logo" />
        </Link>
      </div>
    </header>
  );
};
