import "./BounceBall.css";

const BounceBall = () => {
  return (
    <svg
      className="BounceBall"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1978_509)">
        <path
          id="HeaderBounce-line"
          d="M-29.5 -27C229 24 211.955 305.819 211.955 305.819C321.5 150 488.839 237.308 488.839 237.308C330.5 246.5 293.333 387.52 293.333 387.52C562 363 600.954 571.112 600.954 571.112C725.5 372.5 914 494 914 494"
          stroke="black"
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="HeaderBounce-line"
          d="M674.001 -22C261.366 -96 261.366 342.549 261.366 342.549C407 208.5 508 326 508 326C598 468.5 623 566.5 623 566.5C751.5 463 849.5 592.5 849.5 592.5"
          stroke="black"
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <ellipse
          id="HeaderBounce-ball"
          cx="150.377"
          cy="447.024"
          rx="149.377"
          ry="149.484"
          fill="#F2554B"
        />
        <ellipse
          id="HeaderBounce-ball"
          cx="631.211"
          cy="682.987"
          rx="111.332"
          ry="111.412"
          fill="#E6A443"
        />
        <ellipse
          id="HeaderBounce-ball"
          cx="600.634"
          cy="249.042"
          rx="111.332"
          ry="111.412"
          fill="#284351"
        />
      </g>
      <defs>
        <clipPath id="clip0_1978_509">
          <rect width="800" height="800" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BounceBall;
