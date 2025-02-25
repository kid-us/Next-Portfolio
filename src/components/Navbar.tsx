import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [savedTheme, setSavedTheme] = useState<string>("");
  //   const [viewMenu, setViewMenu] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setSavedTheme(storedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setSavedTheme("dark");
      } else {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
        setSavedTheme("light");
      }
    }
  }, []); // Run once on mount

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update state and document body classes
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setSavedTheme(newTheme);
  };

  //   const [animationClass, setAnimationClass] = useState<string>(
  //     "animate__fadeInLeft"
  //   );

  //   const handleCloseMenu = () => {
  //     setAnimationClass("animate__fadeOutLeft");
  //     setTimeout(() => {
  //       setViewMenu(false);
  //       setAnimationClass("animate__fadeInLeft");
  //     }, 500);
  //   };

  return (
    <nav className="flex justify-between">
      <div className="header-logo bg-nav-bg text-center px-10">
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
              fill={savedTheme === "light" ? "#fff" : "#121212"}
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
              fill={savedTheme === "light" ? "#fff" : "#121212"}
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
      <div className="header-theme bg-nav-bg text-center px-5">
        <div className="flex items-center h-full justify-center">
          {savedTheme === "light" ? (
            <button onClick={toggleTheme}>
              <MoonStar />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <Sun />
            </button>
          )}
        </div>
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
              fill={savedTheme === "light" ? "#fff" : "#121212"}
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
              fill={savedTheme === "light" ? "#fff" : "#121212"}
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_310_2">
              <rect width="30" height="30" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
