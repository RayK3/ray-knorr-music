import { useState } from "react";

type MousePosition = "right" | "center" | "left";

export const Root = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>("center");

  return (
    <div className="relative h-screen">
      <div
        className={`text-center px-8 py-4 bg-[#94511f] rounded-3xl align-middle -translate-x-[50%] text-4xl font-bold absolute top-1/4 left-1/2 z-10 duration-150 ease-out text-white ${
          mousePosition === "center" ? "" : "opacity-0"
        }`}
      >
        Who are you looking for?
      </div>
      <div className="flex flex-row justify-center h-full overflow-hidden">
        <div className="relative flex items-center justify-end w-1/2 h-full bg-gradient-to-r from-[#070605] via-[#2c1b06] to-[#573b14]">
          <img
            src="/ray-smiling-software.jpg"
            className="absolute object-contain h-full duration-100 ease-out blur-md hover:blur-none hover:scale-105"
            alt="Ray Softwaring"
            onMouseEnter={() => setMousePosition("left")}
            onMouseLeave={() => setMousePosition("center")}
          />
          {mousePosition === "right" ? (
            ""
          ) : (
            <a
              href={`/sse`}
              className={`z-10 px-5 py-2 mr-2 text-xl text-white ${
                mousePosition === "center" ? "" : "bg-black"
              } font-fragment-mono rounded-xl`}
            >
              The Software Engineer
            </a>
          )}
        </div>
        <div className="relative flex items-center justify-beginning w-1/2 h-full overflow-hidden bg-gradient-to-r from-[#573b14] to-[#655750]">
          <img
            src="/ray-smiling-fiddle.jpg"
            className="absolute object-contain h-full duration-100 ease-out blur-md hover:blur-none hover:scale-105"
            alt="Ray Fiddling"
            onMouseEnter={() => setMousePosition("right")}
            onMouseLeave={() => setMousePosition("center")}
          />
          {mousePosition === "left" ? (
            ""
          ) : (
            <a
              href={`/music`}
              className={`z-10 px-5 py-2 ml-4 text-4xl text-white ${
                mousePosition === "center" ? "" : "bg-black"
              } font-niconne rounded-xl`}
            >
              The Musician
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
