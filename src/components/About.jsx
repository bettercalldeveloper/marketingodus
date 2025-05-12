import React from "react";
import MouseMoveMarquee from "./MouseMoveMarquee";
import MarketingVid from "./MarketingVid";

const About = () => {
  return (
    <div className="mt-16 md:mt-36 ">
      <section
        id="home"
        className="  flex flex-col items-center justify-center text-center max-w-[87%] mx-auto"
      >
        <h1 className="text-3xl md:text-4xl max-w-[87%] md:max-w-[70%] font-bold mb-4 line">
          Curating transformative brand journeys in the dynamic era of digital
          innovation
        </h1>
      </section>

      <section className="max-w-[87%] md:max-w-[70%] mx-auto mt-16 md:mt-36">
        <MarketingVid />
      </section>

      <section className="max-w-[87%] md:max-w-[70%] mx-auto mt-16 md:mt-36">
        <p className="text-lg md:text-xl font-medium max-w-7xl mt-5">
          At Marketingodus, we believe every brand begins as an idea—a spark, a
          vision, a possibility. Our job is to take that raw imagination and
          mold it into something tangible, powerful, and alive in the digital
          world. Whether it's a logo that captures your essence, a website that
          tells your story, or a campaign that connects with your audience, we
          translate your ideas into experiences that move people. We're not just
          marketers—we're builders of meaning, sculptors of identity, and
          architects of attention. If you can imagine it, we're here to bring it
          to life with strategy, creativity, and purpose.
        </p>
      </section>

      <section className=" mt-16 md:mt-36">
        <MouseMoveMarquee />
      </section>

      <section className="max-w-[87%] mx-auto mt-16 md:mt-20 flex flex-col md:flex-row space-y-10 md:space-y-0">
        <div className="md:w-[40%] text-2xl md:text-3xl font-bold">
          <p>#GrowWithMarketingOdus</p>
          <p>#ElevateDigitally</p>
        </div>

        <div className="md:w-[60%] space-y-10 text-lg">
          <p>
            MARKETINGODUS began with a simple belief main— that brands don’t
            just need digital presence, they need digital direction(Bold). In a
            world flooded with clicks, content, and competition, we saw too many
            businesses getting lost in the noise. That’s when MARKETINGODUS was
            born — not just as another digital marketing agency, but as a growth
            partner for brands ready to rise.
          </p>
          <p>
            We combine strategy, design, content and direction to help
            businesses not only show up online, but stand out. From building
            conversion-driven websites to crafting viral content and data-backed
            campaigns, every move we make is aimed at upward transformation —
            because at MARKETINGODUS, we don’t just market.
            <span className="font-bold">We move brands forward.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
