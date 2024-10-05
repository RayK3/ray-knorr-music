import React from "react";

interface CardProps {
  title?: string;
  body: string | JSX.Element;
  bgColour: string;
  textColour: string;
  borderColour?: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
}

export const Card = ({
  title = "",
  body,
  bgColour,
  textColour,
  borderColour = "",
  className = "",
  titleClassName = "",
  bodyClassName = "",
}: CardProps): JSX.Element => {
  return (
    <div
      className={`px-4 pt-5 md:pb-5 mx-8 mt-6 border-2 rounded-2xl sm:px-6 ${bgColour} ${borderColour} ${className}`}
    >
      {title && (
        <h3
          className={`text-base font-semibold leading-6 ${textColour} ${titleClassName}`}
        >
          {title}
        </h3>
      )}
      <div className={`mt-1 text-sm ${textColour} ${bodyClassName}`}>
        {body}
      </div>
    </div>
  );
};
