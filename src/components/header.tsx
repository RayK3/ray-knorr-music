import React from "react";
import { Link } from "react-router-dom";

import { HeaderLinkType } from "../data/headerLinks";

interface HeaderProps {
  textColour: string;
  bgColour: string;
  links: HeaderLinkType[];
}

export const Header = ({
  textColour,
  bgColour,
  links,
}: HeaderProps): JSX.Element => {
  return (
    <header className={`w-full ${bgColour} flex flex-row justify-end`}>
      <div
        className={`flex flex-row w-2/5 items-center px-6 pt-14 pb-4 mx-auto overflow-hidden justify-evenly`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`${textColour} text-lg`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
