import React from "react";
import { MusicBase } from "../pages";
import { musicShortBio } from "../data";

export const MusicHome = () => {
  return (
    <MusicBase title="Ray Knorr - Music">
      <div className="flex flex-col justify-center md:flex-row">
        <img
          className="object-contain w-full px-5 md:w-3/5 md:pl-15 lg:w-1/2"
          src="/ray-music-fiddle-home.jpg"
          alt="Ray smiling with a fiddle in his hands"
        />
        <div className="px-4 pt-8 text-sm md:pt-0 md:text-xl md:px-15 text-sunglow">
          {musicShortBio}
        </div>
      </div>
    </MusicBase>
  );
};
