import React from "react";

type Props = {
  color?: string;
};

const ArrowDownIcon = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={color || "#1A202C"}
        stroke="#1A202C"
        strokeWidth="0.5"
        d="M7 9.8a1.59 1.59 0 01-1.125-.467L2.07 5.529a.44.44 0 010-.618.44.44 0 01.619 0l3.803 3.803c.28.28.735.28 1.015 0l3.803-3.803a.44.44 0 01.619 0c.169.17.169.45 0 .618L8.126 9.333A1.59 1.59 0 017 9.799z"
      ></path>
    </svg>
  );
};

export { ArrowDownIcon, ArrowDownIcon as default };
