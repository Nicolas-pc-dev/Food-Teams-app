import React from "react";

function Vector() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="568"
      height="663"
      fill="none"
      viewBox="0 0 568 663"
    >
      <g filter="url(#filter0_i_1_27)">
        <path
          fill="#71A634"
          d="M70 411C42 164.5 59.5 176 1.5.5H567V660c-38.5 11.667-469.792-9.475-497-249z"
        ></path>
      </g>
      <path
        stroke="#71A634"
        d="M70 411C42 164.5 59.5 176 1.5.5H567V660c-38.5 11.667-469.792-9.475-497-249z"
      ></path>
      <defs>
        <filter
          id="filter0_i_1_27"
          width="566.692"
          height="666.979"
          x="0.808"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_1_27"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector;
