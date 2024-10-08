import React, { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({
  children,
  className = "",
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      role="tooltip"
      className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${className} ${
        isVisible ? "opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
    </div>
  );
};
