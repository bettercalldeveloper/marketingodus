import React from "react";
import ServicesCatalogue from "./ServicesCatalogue";
import MarketingVid from "./MarketingVid";

const Home = () => {
  return (
    <div className="mt-16 md:mt-36">
      <section
        id="home"
        className="  flex flex-col items-center justify-center text-center max-w-[87%] mx-auto"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Marketing Is Evolving — Are You Moving with It?
        </h1>
        <p className="text-lg max-w-3xl mt-5">
          Born in the digital era, we're a marketing agency that empowers brands
          to innovate where data, creativity, and technology converge
        </p>
      </section>

      <section className="max-w-[87%] md:max-w-[70%] mx-auto mt-16 md:mt-36">
        <MarketingVid />
      </section>

      <section className="  mt-16 md:mt-36 mb-16 md:mb-32">
        <div className="max-w-[87%] md:max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Turning Digital Noise Into Brand Voice
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-semibold">
              The MARKETINGODUS Way In the age of endless scrolls, viral trends,
              and millions of competing messages per minute, your brand doesn’t
              just need to exist online — it needs to resonate.
            </p>

            <p>
              Welcome to the era of digital noise, where attention is currency
              and clarity is power.But here's the catch: most businesses shout
              louder… instead of speaking smarter.
            </p>

            <p>
              At MARKETINGODUS, we believe in something better — transforming
              digital chaos into a distinct brand voice that cuts through the
              noise and makes your audience listen, engage, and act.
            </p>
          </div>
        </div>
      </section>

      <ServicesCatalogue />

      <section className="mt-16 md:mt-36 mb-16 max-w-[87%] md:max-w-[30%] mx-auto">
        <p className="font-semibold text-xl md:text-3xl text-center ">
          We don't just go digital - we go directional, guiding your brand with
          purpose, strategy and upward momentum
        </p>
      </section>

      <div className="max-w-[87%] mx-auto text-center">
        <a
          href="/services"
          className="inline-block bg-yellow-500 text-black hover:bg-yellow-400 font-semibold py-3 px-8 rounded-full transition"
        >
          See All Our Services
        </a>
      </div>
    </div>
  );
};

export default Home;
