import React from "react";
import { MusicBase } from "../pages";
import { musicShortBio } from "../data";

export const MusicHome = () => {
  return (
    <MusicBase title="Ray Knorr - Music">
      <div className="absolute pb-20 top-8 md:top-12 md:pb-36">
        <div className="flex flex-row justify-center">
          <img
            className="object-contain w-3/5 pl-10 md:pl-15 lg:w-1/2"
            src="/ray-music-fiddle-home.jpg"
            alt="Ray smiling with a fiddle in his hands"
          />
          <div className="px-10 text-xl md:px-15 text-sunglow">
            {musicShortBio}
          </div>
        </div>
      </div>
    </MusicBase>
  );
};
