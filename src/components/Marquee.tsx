import React from "react";
import "./marquee.css";

interface Testimony {
  id: number;
  name: string;
  img?: string;
  comment: string;
}

const Marquee = () => {
  const testimonies: Testimony[] = [
    {
      id: 1,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 2,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 3,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 4,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 5,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 6,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 7,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 8,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 9,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
    {
      id: 10,
      name: "Jon Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab adipisci temporibus in dolorem, reprehenderit eius quam, eos alias, voluptas consequatur facilis. A officia maxime repellat quaerat minima assumenda fuga.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Forward Marquee */}
      <div
        className="marquee fadeout-horizontal"
        style={{ "--num-items": testimonies.length } as React.CSSProperties}
      >
        <div className="marquee-track">
          {testimonies.map((t) => (
            <div
              className="marquee-item"
              style={{ "--item-position": t.id } as React.CSSProperties}
            >
              <p className="font-bold">{t.name}</p>
              <p className="text-sm italic mt-5">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revese */}
      <div
        className="marquee fadeout-horizontal mt-10"
        style={
          {
            "--num-items": testimonies.length,
            "--direction": "reverse",
          } as React.CSSProperties
        }
      >
        <div className="marquee-track">
          {testimonies.map((t) => (
            <div
              className="marquee-item"
              style={{ "--item-position": t.id } as React.CSSProperties}
            >
              <p className="font-bold">{t.name}</p>
              <p className="text-sm italic mt-5">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
