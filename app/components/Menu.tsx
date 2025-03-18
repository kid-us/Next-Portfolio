import { nav } from "@/constants/nav";
import { MoonStar, Sun, Webhook, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  animate: string;
  onClose: () => void;
  onToggle: () => void;
  theme: string;
}

const MenuPopUp = ({ animate, onClose, onToggle, theme }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={onClose}
        className={`animate__animated ${animate} bg-neutral-700/60 fixed top-0 left-0 w-full h-[100dvh] `}
      ></div>

      <div className="relative">
        <div
          className={`animate__animated ${animate} fixed top-0 right-0 h-[100dvh] w-[72%] rounded-tl-4xl xl nav-bg ps-5 pt-4`}
        >
          {/* Theme */}
          <div className="flex gap-x-5 nav-bg border border-zinc-400 rounded-full py-[9px] px-5 ms-28 me-8">
            {theme === "light" ? (
              <button onClick={onToggle}>
                <MoonStar size={20} className="text-primary" />
              </button>
            ) : (
              <button onClick={onToggle}>
                <Sun size={20} className="text-primary" />
              </button>
            )}
            <button onClick={() => onClose()}>
              <X size={20} />
            </button>
          </div>

          <div className="mt-16 ms-2">
            {nav.map((n) => (
              <Link
                key={n.id}
                href={n.path}
                className="flex items-center text-xl mb-5 border-b pb-5 font-semibold"
              >
                {pathname === n.path && (
                  <span>
                    <Webhook size={19} className="text-primary me-2" />
                  </span>
                )}
                {n.name}
              </Link>
            ))}
          </div>

          <p className="absolute bottom-10 logo-font uppercase text-lg ms-2">
            Kidus{" "}
            <span className="font-poppins text-xs block text-color-secondary">
              creative frontend developer
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuPopUp;
