import "./App.css";

function App() {
  return (
    <div className="bg-white h-[100dvh] p-2">
      <header className="header-main">
        <div className="flex justify-between">
          <div className="header-logo bg-white text-black text-center px-10">
            <a
              href="#"
              className="flex items-center h-full justify-center font-semibold"
            >
              Kidus
            </a>
            <svg
              className="svg-corner corner-logo-box-one"
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2)">
                <path
                  d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                  fill="#F9F8F6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              className="svg-corner corner-logo-box-two"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2)">
                <path
                  d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                  fill="#F9F8F6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Theme */}
          <div className="header-theme bg-white text-black text-center px-5">
            <a
              href="#"
              className="flex items-center h-full justify-center font-semibold"
            >
              Kidus
            </a>
            <svg
              className="svg-corner theme-curve-down"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2)">
                <path
                  d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                  fill="#F9F8F6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <svg
              className="svg-corner theme-curve-top"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2)">
                <path
                  d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                  fill="#F9F8F6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      <div className="h-[98dvh] bg-black rounded-2xl"></div>
    </div>
  );
}

export default App;
