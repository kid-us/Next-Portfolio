import { Atom } from "lucide-react";
import "./marquee.css";

interface Testimony {
  id: number;
  feature: string;
}

const Feature = () => {
  const testimonies: Testimony[] = [
    {
      id: 1,
      feature: "Developments",
    },
    {
      id: 2,
      feature: "Animation",
    },
    {
      id: 3,
      feature: "Websites",
    },
    {
      id: 4,
      feature: "Design",
    },
    {
      id: 5,
      feature: "Creative",
    },
    {
      id: 6,
      feature: "Believer",
    },
  ];

  return (
    <div className="py-20">
      <div
        className="marquee fadeout-horizontal border border-secondary"
        style={{ "--num-items": testimonies.length } as React.CSSProperties}
      >
        <div className="marquee-track">
          {testimonies.map((t) => (
            <div
              key={t.id}
              className="marquee-item"
              style={{ "--item-position": t.id } as React.CSSProperties}
            >
              <div className="flex items-center gap-x-2">
                <Atom className="text-zinc-800" />
                <p className="font-bold text-center text-5xl text-zinc-800">
                  {t.feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
