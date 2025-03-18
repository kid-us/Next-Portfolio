"use client";

import { Menu, MoonStar, Sun, Webhook, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/constants/nav";
import MenuPopUp from "./components/Menu";
import useThemeStore from "@/store/themeStore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "animate.css";

const Navbar = () => {
  const { setTheme, theme } = useThemeStore();
  const pathname = usePathname();
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [animationClass, setAnimationClass] = useState("");
  const [scrollWidth, setScrollWidth] = useState(100);
  const [viewMenu, setViewMenu] = useState<boolean>(false);

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

  const [menuAnimationClass, setMenuAnimationClass] = useState<string>(
    "animate__fadeInRight"
  );

  const handleCloseMenu = () => {
    document.body.style.overflow = "auto";
    setMenuAnimationClass("animate__fadeOutRight");
    setTimeout(() => {
      setViewMenu(false);
      setMenuAnimationClass("animate__fadeInRight");
    }, 500);
  };

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "darkCircle" : "lightCircle"
        } ${animationClass}`}
      />

      <div className="fixed w-full">
        <header className="container mx-auto lg:mt-5 mt-4">
          <div className="flex justify-center">
            {/* Large Device Nav */}
            <nav
              className={`${scrollWidth < 100 ? "nav-bg" : "bg-background"}
              lg:flex hidden justify-between px-5 py-[7px] items-center rounded-full w-full overflow-hidden`}
              style={{ width: `${scrollWidth}%` }}
            >
              <a href="#" className="logo-font text-center text-3xl uppercase">
                Kidus
              </a>
              <div className="flex gap-x-9 text-[15px]">
                {nav.map((n) => (
                  <Link href={n.path} key={n.id} className="flex gap-x-3">
                    {pathname === n.path && (
                      <span className="rotate-75">
                        <Webhook size={12} />
                      </span>
                    )}
                    {n.name}
                  </Link>
                ))}
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

            {/* Small Device Nav */}
            <nav
              className={`lg:hidden flex justify-between px-5 items-center rounded-full w-full overflow-hidden`}
            >
              <a href="#" className="logo-font text-center text-3xl uppercase">
                Kidus
              </a>

              {/* Theme */}
              <div className="flex gap-x-5 nav-bg border border-zinc-400 rounded-full py-[9px] px-5">
                {savedTheme === "light" ? (
                  <button onClick={toggleTheme}>
                    <MoonStar size={20} />
                  </button>
                ) : (
                  <button onClick={toggleTheme}>
                    <Sun size={20} />
                  </button>
                )}
                {viewMenu ? (
                  <button onClick={() => handleCloseMenu()}>
                    <X size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setViewMenu(true);
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    <Menu size={20} />
                  </button>
                )}
              </div>
            </nav>
          </div>
        </header>
      </div>

      {/* Menu */}
      {viewMenu && (
        <MenuPopUp
          animate={menuAnimationClass}
          onClose={() => handleCloseMenu()}
          theme={savedTheme}
          onToggle={() => toggleTheme()}
        />
      )}
    </>
  );
};

export default Navbar;
