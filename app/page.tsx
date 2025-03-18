import SeriousFacts from "./components/SeriousFacts";
import SocialLinks from "./components/SocialLinks";
import { Hand } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 lg:mt-32 mt-20">
        <div className="lg:col-span-2">
          <p className="mb-6 text-color-secondary flex">
            <Hand className="text-primary" /> <span className="mx-2"></span> Hi
            there, it's Kidus
          </p>
          <p className="lg:text-5xl text-3xl font-bold  lg:leading-14">
            Designing <span className="text-primary">modern, responsive,</span>{" "}
            and <span className="text-primary">engaging web experiences</span>{" "}
            that bring ideas to life.
          </p>
        </div>
        <div></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-x-10">
        <div className="lg:col-span-2 lg:flex lg:items-center">
          <div className="w-full">
            <div className="border border-secondary-border w-full lg:mt-0 mt-10"></div>
            {/* Social Link */}
            <div className="flex lg:gap-x-10 gap-x-6 my-10">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div>
          <SeriousFacts />
        </div>
      </div>
    </div>
  );
}
