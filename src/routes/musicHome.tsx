import React from "react";
import { MusicBase } from "../pages";
import { Card } from "../components";
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
        <Card
          className="p-4 md:px-15"
          body={musicShortBio}
          bgColour="bg-extreme-light-sunglow"
          borderColour="border-extreme-light-sunglow"
          textColour="text-raisin-black"
          bodyClassName="md:p-6 text-md md:text-lg font-raleway"
        />
      </div>
    </MusicBase>
  );
};
