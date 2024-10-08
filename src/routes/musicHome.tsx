import React from "react";
import { MusicBase } from "../pages";
import { musicShortBio, gammonsKnorrBio, rayAndKaiBio } from "../data";

export const MusicHome = () => {
  return (
    <MusicBase title="Music | Ray Knorr">
      <div className="w-full py-8 pl-10 text-4xl text-left md:pl-0 md:text-center md:text-6xl md:py-16 font-ibmplex text-light-sunglow">
        RAY KNORR
      </div>
      <div className="flex flex-col justify-center md:pt-12 md:flex-row">
        <img
          className="object-contain w-full px-5 md:w-3/5 md:pl-15 lg:w-1/2"
          src="/images/ray-music-fiddle-home.jpg"
          alt="Ray smiling with a fiddle in his hands"
        />
        <p className="px-10 pt-8 text-xl whitespace-pre-line md:pt-0 text-very-light-sunglow font-raleway">
          {musicShortBio}
        </p>
      </div>
      <div className="w-full pt-12 pb-6 pl-8 text-5xl text-left md:pl-0 md:text-center md:text-6xl md:pt-32 md:pb-12 font-ibmplex text-light-sunglow">
        Projects
      </div>
      <div className="flex flex-col justify-center">
        <div className="px-8">
          <div className="w-full py-6 text-4xl text-left font-ibmplex text-light-sunglow">
            Gammons & Knorr
          </div>
          <div className="flex flex-col md:flex-row">
            <img
              className="object-contain w-full md:px-0 md:pl-15 md:w-1/3"
              src="/images/ray-tom-tunes-on-tap.jpg"
              alt="Gammons & Knorr | Tunes on Tap at Copper Bottom Brewing, Montague, PEI"
            />
            <p className="pt-8 text-lg whitespace-pre-line md:pt-0 md:pl-12 text-very-light-sunglow font-raleway">
              {gammonsKnorrBio}
            </p>
            {/* links -
        https://drive.google.com/drive/folders/1bJ32yqyff9B5KjaRtvGsdHNO5qBz1C5M?usp=drive_link
        https://www.instagram.com/gammonsandknorr/ */}
          </div>
        </div>
        <div className="flex flex-col p-8">
          <div className="w-full py-6 text-4xl text-left font-ibmplex text-light-sunglow">
            Ray & Kai
          </div>
          <div className="flex flex-col md:flex-row">
            <img
              className="object-contain w-4/5 md:w-1/2"
              src="/images/ray-kai-at-julies.jpg"
              alt="Ray & Kai | Tunes and Video Shoot at Julie's in Vancouver, BC"
            />
            <p className="pt-8 text-lg whitespace-pre-line md:pt-0 md:pl-12 text-very-light-sunglow font-raleway">
              {rayAndKaiBio}
            </p>
          </div>
        </div>
      </div>
    </MusicBase>
  );
};
