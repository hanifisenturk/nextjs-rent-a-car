import React from "react";

const GearIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#90A3BF"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2z"
      ></path>
      <rect width="16" height="16" x="4" y="4" fill="#fff" rx="8"></rect>
      <path
        fill="#90A3BF"
        d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6z"
      ></path>
      <rect width="8" height="8" x="8" y="8" fill="#fff" rx="4"></rect>
      <path fill="#90A3BF" d="M11 17H13V21H11z"></path>
      <path fill="#90A3BF" d="M17 11H21V13H17z"></path>
      <path fill="#90A3BF" d="M3 11H7V13H3z"></path>
    </svg>
  );
};

export { GearIcon, GearIcon as default };
