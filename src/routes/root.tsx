import { useState } from "react";
import { Link } from "react-router-dom";

type LinkHovered = "left" | "none" | "right";

const calculateStyles = (
  linkHovered: LinkHovered
): {
  leftImageClasses: string;
  leftLinkClasses: string;
  rightImageClasses: string;
  rightLinkClasses: string;
} => {
  switch (linkHovered) {
    case "left":
      return {
        leftImageClasses: "blur-none scale-105",
        rightImageClasses: "blur-md",
        leftLinkClasses: "bg-dark-slate-gray text-mint",
        rightLinkClasses: "text-white bg-black",
      };
    case "right":
      return {
        leftImageClasses: "blur-md",
        rightImageClasses: "blur-none scale-105",
        leftLinkClasses: "text-white bg-black",
        rightLinkClasses: "bg-raisin-black text-sunglow",
      };
    default:
      return {
        leftImageClasses: "blur-none",
        rightImageClasses: "blur-none",
        leftLinkClasses: "text-white bg-black",
        rightLinkClasses: "text-white bg-black",
      };
  }
};

export const Root = () => {
  const [linkHovered, setLinkHovered] = useState<LinkHovered>("none");

  const {
    leftImageClasses,
    rightImageClasses,
    leftLinkClasses,
    rightLinkClasses,
  } = calculateStyles(linkHovered);

  return (
    <div className="relative h-screen">
      <img
        src="/logos/white-logo-1000.png"
        alt="White Logo"
        className="absolute z-10 w-16 h-auto top-8 right-8"
      />
      <div
        className={`text-center px-3 py-2 md:px-8 md:py-4 bg-seal-brown rounded-xl md:rounded-3xl align-middle -translate-x-[50%] text-xl md:text-4xl font-bold absolute top-1/5 md:top-1/4 left-1/2 z-10 duration-150 ease-out text-white ${
          linkHovered === "none" ? "" : "opacity-0"
        }`}
      >
        Who are you looking for?
      </div>
      <div className="flex flex-row justify-center h-full overflow-hidden">
        <div className="relative flex items-end md:items-center justify-end w-1/2 h-full bg-gradient-to-r from-[#070605] via-[#2c1b06] to-[#573b14]">
          <img
            src="/images/ray-smiling-software.jpg"
            className={`absolute object-contain h-full duration-100 ease-out ${leftImageClasses}`}
            alt="Ray Softwaring"
          />
          {linkHovered !== "right" && (
            <Link
              to="/sse"
              className={`z-10 px-5 py-2 mr-2 text-lg md:text-xl font-fragment-mono mb-full md:mb-0 rounded-xl ${leftLinkClasses}`}
              onMouseEnter={() => setLinkHovered("left")}
              onMouseLeave={() => setLinkHovered("none")}
            >
              The Software Engineer
            </Link>
          )}
        </div>
        <div className="relative flex items-end md:items-center justify-beginning w-1/2 h-full overflow-hidden bg-gradient-to-r from-[#573b14] to-[#655750]">
          <img
            src="/images/ray-smiling-fiddle.jpg"
            className={`absolute object-contain h-full duration-100 ease-out ${rightImageClasses}`}
            alt="Ray Fiddling"
          />
          {linkHovered !== "left" && (
            <Link
              to="/music"
              className={`z-10 px-5 py-2 ml-4 text-2.5xl md:text-4xl font-niconne mb-full md:mb-0 rounded-xl ${rightLinkClasses}`}
              onMouseEnter={() => setLinkHovered("right")}
              onMouseLeave={() => setLinkHovered("none")}
            >
              The Musician
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
