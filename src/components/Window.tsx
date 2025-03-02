import { useEffect, useState } from "react";

const Window = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Listen for theme changes in localStorage
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, [theme]);

  // const fillColor = theme === "light" ? "#fff" : "#242424";

  return (
    <div className="flex justify-center items-center h-[98dvh] sticky top-0 perspective-[20em]">
      <div className="relative w-[250px] md:w-[17%] h-[50vh]">
        <div className="w-full h-full border-2 border-gray-800 rounded-3xl bg-background transform rotate-y-[5deg] skew-x-[16deg] overflow-hidden shadow-xl">
          {/* Top and Side Bars */}
          <div className="absolute w-full h-1 bg-nav-bg top-0 left-0"></div>
          <div className="absolute w-8 top-0 right-0 h-full bg-nav-bg"></div>
          <div className="absolute w-full -bottom-10 right-0 h-14 -rotate-2 bg-nav-bg"></div>

          {/* SVG Corners */}
          {[
            { className: "top-[3.5px] right-8 rotate-90", id: "clip1" },
            { className: "top-[3px] -left-0", id: "clip2" },
            { className: "rotate-180 bottom-[1.1em] right-[2em]", id: "clip3" },
          ].map(({ className, id }) => (
            <svg
              key={id}
              className={`svg-corner absolute ${className}`}
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath={`url(#${id})`}>
                <path
                  d="M30 0H0V30C0 10.431 10.431 0 30 0Z"
                  fill={theme === "light" ? "#fff" : "#242424"}
                />
              </g>
              <defs>
                <clipPath id={id}>
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Window;
