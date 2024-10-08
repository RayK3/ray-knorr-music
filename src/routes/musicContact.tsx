import React from "react";
import { ContactForm, Card } from "../components";
import { MusicBase } from "../pages";

export const MusicContact = () => {
  return (
    <MusicBase title="Contact | Ray Knorr">
      <div className="flex flex-row items-center justify-center w-full pt-8">
        <Card
          title="Contact"
          textColour="text-seal-brown"
          bgColour="bg-white"
          body={<ContactForm textColour="text-dark-sunglow" />}
          className="max-w-7xl w-9/10 md:w-3/4"
          titleClassName="w-full text-center md:pt-4 text-xl md:text-2xl"
        />
      </div>
    </MusicBase>
  );
};
