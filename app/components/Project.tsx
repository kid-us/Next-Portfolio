import { Atom } from "lucide-react";
import React from "react";
import Title from "./Title";
import FeaturesGrid from "./Bento";

const Project = () => {
  return (
    <div className="my-32">
      <Title title="My Work" alignment="justify-start" />
      <p className="mt-3 lg:text-4xl text-3xl font-bold">Selected Projects</p>
      <p className="text-sm text-color-secondary mt-2">
        Here's a curated selection showcasing my expertise and the achieved
        results.
      </p>

      {/* <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 mt-10">
        <div className="relative lg:row-span-2 border rounded-xl p-10">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis, maiores ea. Vitae provident repellendus praesentium
                aspernatur! Facere distinctio quisquam consectetur ipsam dolorum
                perferendis aliquam est et, velit, vel voluptatibus corporis!
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>

        <div className="relative max-lg:row-start-1 border rounded-xl">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Performance
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores
                impedit.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"></div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>

        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 border rounded-xl">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Security
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi.
              </p>
            </div>
            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2"></div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>

        <div className="relative lg:row-span-2 border rounded-xl">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Powerful APIs
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget sem sodales gravida.
              </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow">
              <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                      NotificationSetting.jsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">
                      App.jsx
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-6 pb-14"></div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div> */}

      <FeaturesGrid />
    </div>
  );
};

export default Project;
