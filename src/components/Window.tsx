const Window = () => {
  const savedTheme = localStorage.getItem("theme");

  return (
    <div className="flex justify-center items-center h-[98dvh] sticky top-0 perspective-[20em]">
      <div className="relative w-[17%] h-[50vh]">
        <div className="w-full h-full border-2 border-gray-800 rounded-3xl bg-zinc-800 rotate-y-5 skew-x-16 overflow-hidden">
          <div className="absolute w-full h-1 bg-white top-0 left-0"></div>
          <div className="absolute w-8 top-0 right-0 h-full bg-white"></div>
          <div className="absolute w-full -bottom-10 right-0 h-14 -rotate-2  bg-white"></div>

          {/* Top Right */}
          <svg
            className="svg-corner absolute top-1 right-8 rotate-90"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_310_2)">
              <path
                d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                //   fill="#632513"
                fill={savedTheme === "light" ? "#242424" : "#fff"}
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          {/* Top Left */}
          <svg
            className="svg-corner absolute top-1 -left-0"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_310_2)">
              <path
                d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                //   fill="#632513"
                fill={savedTheme === "light" ? "#242424" : "#fff"}
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          {/* Bottom Right */}
          <svg
            className="svg-corner rotate-180 absolute bottom-[1.1em] right-[2em]"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_310_2)">
              <path
                d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                //   fill="#632513"
                fill={savedTheme === "light" ? "#242424" : "#fff"}
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className=""></div>

        {/* <svg
          className="animate-spotlight pointer-events-none fixed top-0 left-0 z-[1] "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="white"
              fill-opacity="0.21"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg> */}
      </div>
    </div>
  );
};

export default Window;
