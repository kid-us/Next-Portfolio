import { MoonStar, Sun, X } from "lucide-react";
import { nav } from "../constant/nav";

interface Props {
  animate: string;
  onClose: () => void;
  onToggle: () => void;
  theme: string;
}

const MenuPopUp = ({ animate, onClose, onToggle, theme }: Props) => {
  return (
    <div className="relative">
      <div
        className={`animate__animated ${animate} fixed top-0 right-0 h-[100dvh] w-[72%] rounded-tl-4xl xl nav-bg ps-5 pt-4`}
      >
        {/* Theme */}
        <div className="flex gap-x-5 nav-bg border border-zinc-400 rounded-full py-[9px] px-5 ms-28 me-8">
          {theme === "light" ? (
            <button onClick={onToggle}>
              <MoonStar size={20} />
            </button>
          ) : (
            <button onClick={onToggle}>
              <Sun size={20} />
            </button>
          )}
          <button onClick={() => onClose()}>
            <X size={20} />
          </button>
        </div>

        <div className="mt-16 ms-2">
          {nav.map((n) => (
            <p key={n.id} className="text-xl mb-5 border-b pb-5">
              <a href={n.path}>{n.name}</a>
            </p>
          ))}
        </div>

        <p className="absolute bottom-10 logo-font uppercase text-lg ms-2">
          Kidus{" "}
          <span className="font-poppins text-xs">
            creative frontend developer
          </span>
        </p>
      </div>
    </div>
  );
};

export default MenuPopUp;
