import React from "react";
import { Link } from "react-router-dom";

import { HeaderLinkType } from "../data/headerLinks";

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
    <header className={`w-full flex flex-row justify-end ${className}`}>
      <div
        className={`flex flex-row w-4/5 md:w-2/5 items-center px-6 pt-14 pb-4 mx-auto overflow-hidden justify-evenly`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`${textColour} text-xs md:text-lg`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
