import React from "react";
import { MusicBase } from "../pages";
import { musicLongBio } from "../data";

export const MusicBio = () => {
  return (
    <MusicBase title="Ray Knorr - Bio">
      <p className="px-10 h-[70vh] overflow-auto text-xl whitespace-pre-line text-sunglow">
        {musicLongBio}
      </p>
    </MusicBase>
  );
};
