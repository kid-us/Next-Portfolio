import SeriousFacts from "./components/SeriousFacts";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 lg:mt-32 mt-24">
        <div className="lg:col-span-2">
          <p className="mb-6 text-color-secondary">Hi there, it's Kidus</p>
          <p className="lg:text-5xl text-3xl font-bold">
            Designing modern, responsive, and engaging web experiences that
            bring ideas to life.
          </p>
        </div>
        <div></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-x-10">
        <div className="flex col-span-2 items-center">
          <div className="border border-secondary-border w-full lg:mt-0 mt-5 lg:mb-0 mb-10"></div>
        </div>

        <div>
          <SeriousFacts />
        </div>
      </div>
    </div>
  );
}
