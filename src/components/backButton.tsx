import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  className?: string;
}

export const BackButton = ({
  className = "w-6 h-6",
}: BackButtonProps): JSX.Element => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={`${className}`} onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};
