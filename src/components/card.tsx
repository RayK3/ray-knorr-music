import React from "react";

interface CardProps {
  title: string;
  body: string | JSX.Element;
  bgColour: string;
  textColour: string;
  borderColour?: string;
}

export const Card = ({
  title,
  body,
  bgColour,
  textColour,
  borderColour = "",
}: CardProps): JSX.Element => {
  return (
    <div
      className={`px-4 py-5 mx-8 mt-6 border-2 rounded-2xl sm:px-6 ${bgColour} ${borderColour}`}
    >
      <h3 className={`text-base font-semibold leading-6 ${textColour}`}>
        {title}
      </h3>
      <p className={`mt-1 text-sm ${textColour}`}>{body}</p>
    </div>
  );
};
