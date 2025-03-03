import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const { setTheme } = useThemeStore();
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [animationClass, setAnimationClass] = useState("");
  const [scrollWidth, setScrollWidth] = useState(100);

  // Set theme based on localStorage or system preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setSavedTheme(storedTheme);
    } else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.body.classList.add(systemPreference);
      localStorage.setItem("theme", systemPreference);
      setTheme(systemPreference);
      setSavedTheme(systemPreference);
    }

    // Listen for scroll events to adjust the navbar width
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxWidth = 100;
      const minWidth = 50;

      // Calculate the width based on scroll position
      let newWidth =
        maxWidth - (scrollPosition / windowHeight) * (maxWidth - minWidth);
      newWidth = Math.max(minWidth, newWidth); // Prevent width from going below minWidth
      setScrollWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setTheme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Remove old theme and add new theme
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);

    // Update localStorage and state
    localStorage.setItem("theme", newTheme);
    setSavedTheme(newTheme);
    setTheme(newTheme);

    // Trigger theme transition animation
    setAnimationClass("grow");

    // Reset animation after 700ms
    setTimeout(() => setAnimationClass(""), 700);
  };

  return (
    <>
      <div className="fixed w-full">
        <header className="container mx-auto mt-5">
          <div className="flex justify-center">
            <nav
              className={`${scrollWidth < 100 ? "nav-bg" : "bg-background"}
              flex justify-between px-5 py-[7px] items-center rounded-full w-full overflow-hidden`}
              style={{ width: `${scrollWidth}%` }}
            >
              <a href="#" className="logo-font text-center text-2xl uppercase">
                Kidus
              </a>

              <div className="flex gap-x-8 text-sm">
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Contact</p>
              </div>

              {/* Theme */}
              <div>
                {savedTheme === "light" ? (
                  <button onClick={toggleTheme}>
                    <MoonStar size={20} />
                  </button>
                ) : (
                  <button onClick={toggleTheme}>
                    <Sun size={20} />
                  </button>
                )}
              </div>
            </nav>
          </div>
        </header>
      </div>

      <div
        className={`absolute top-0 right-0 w-full h-full ${
          savedTheme === "dark" ? "darkCircle" : "lightCircle"
        } ${animationClass}`}
        style={{ zIndex: -2 }}
      />
    </>
  );
};

export default Navbar;

//   const [viewMenu, setViewMenu] = useState<boolean>(false);

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
