import React from "react";
import { MusicBase } from "../pages";
import { musicLongBio } from "../data";

export const MusicBio = () => {
  return (
    <MusicBase
      title="Bio | Ray Knorr"
      bg="bg-local bg-no-repeat bg-cover bg-black bg-right"
      style={{ backgroundImage: 'url("/images/ray-ben-cgm-old3.jpg")' }}
    >
      <div className="flex flex-col items-center w-full h-fit backdrop-brightness-50">
        <div className="w-full py-8 text-xl text-center md:w-3/5 md:text-6xl md:py-16 font-ibmplex text-light-sunglow">
          RAY KNORR - BIO
        </div>
        <div className="flex flex-row justify-between w-full h-full md:w-3/5">
          <p className="px-10 text-xl whitespace-pre-line text-very-light-sunglow font-raleway">
            {musicLongBio}
          </p>
        </div>
      </div>
    </MusicBase>
  );
};
