import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const { setTheme } = useThemeStore();
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [animationClass, setAnimationClass] = useState("");

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
            <nav className="flex justify-between px-5 py-1 items-center rounded-full border w-[45%] overflow-hidden">
              <a href="#" className="logo-font text-center text-3xl uppercase">
                Kidus
              </a>

              <div className="flex gap-x-5 text-sm">
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Contact</p>
              </div>

              {/* Theme */}
              <div>
                {savedTheme === "light" ? (
                  <button onClick={toggleTheme}>
                    <MoonStar size={25} />
                  </button>
                ) : (
                  <button onClick={toggleTheme}>
                    <Sun size={25} />
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
