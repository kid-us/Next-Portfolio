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
        className="marquee fadeout-horizontal border border-secondary-border"
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
                <Atom className="text-feature" />
                <p className="font-bold text-center lg:text-5xl text-4xl text-feature">
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
