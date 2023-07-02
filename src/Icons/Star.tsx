import React from "react";

function StarIcon() {
  return (
    <svg
      className="w-3 h-3 lg:w-auto lg:h-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#FBAD39"
        fillRule="evenodd"
        d="M9.167 2.659a.9.9 0 011.716 0l1.55 4.766h5a.908.908 0 01.534 1.667l-4.059 2.942 1.55 4.775a.9.9 0 01-1.391 1.008L10 14.842l-4.058 2.95a.9.9 0 01-1.392-1.008l1.55-4.775-4.058-2.942A.908.908 0 012.575 7.4h5L9.167 2.66z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export { StarIcon, StarIcon as default };
