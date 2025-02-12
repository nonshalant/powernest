import React from "react";

const RectangleSVG = () => {
  return (
    <React.Fragment>
      <svg
        className="eclipse"
        width="1720"
        height="672"
        viewBox="0 0 1720 672"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1317_7847)">
          <ellipse
            cx="860"
            cy="336"
            rx="838"
            ry="256"
            fill="url(#paint0_radial_1317_7847)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1317_7847"
            x="-58"
            y="0"
            width="1836"
            height="672"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1317_7847"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1317_7847"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(860 336) rotate(90) scale(256 838)"
          >
            <stop stop-color="white" />
            <stop offset="0.305" stop-color="#8300BC" />
            <stop offset="0.565" stop-color="#7E14F0" stop-opacity="0.5" />
            <stop offset="0.87" stop-color="#230049" stop-opacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="rect"
        width="1516"
        height="940"
        viewBox="0 0 1516 940"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.6"
          x="0.5"
          y="0.5"
          width="1515"
          height="939"
          rx="69.5"
          stroke="#3A3A3A"
        />
        <rect
          x="10.5"
          y="10.5"
          width="1495"
          height="919"
          rx="59.5"
          fill="black"
          stroke="#3A3A3A"
        />
        <mask
          id="mask0"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="1496"
          height="920"
        >
          <rect x="10" y="10" width="1496" height="920" rx="60" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <rect x="30" y="30" width="395" height="315" rx="40" fill="#1D1D1D" />
          <rect
            x="30"
            y="365"
            width="1456"
            height="315"
            rx="40"
            fill="#1D1D1D"
          />
          <rect
            x="50"
            y="700"
            width="1023"
            height="315"
            rx="40"
            fill="#1D1D1D"
          />
          <rect
            x="1091"
            y="30"
            width="395"
            height="315"
            rx="40"
            fill="#1D1D1D"
          />
          <rect
            x="1093"
            y="700"
            width="393"
            height="315"
            rx="40"
            fill="#1D1D1D"
          />
          <rect
            x="445"
            y="30"
            width="626"
            height="315"
            rx="40"
            fill="#1D1D1D"
          />
        </g>
      </svg>
    </React.Fragment>
  );
};

const Rectangles = () => {
  return (
    <section className="rectangles">
      <div className="rectangle rectangles-container">
        <RectangleSVG />
      </div>
    </section>
  );
};

export default Rectangles;
