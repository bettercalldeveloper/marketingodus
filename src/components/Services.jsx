import React from "react";
import { services } from "../data/services";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className=" max-w-[87%] mx-auto mt-16 md:mt-36 ">
      <Helmet>
        <title>Services - MarketingOdus</title>
        <meta
          name="description"
          content="From SEO to branding, we offer full-stack marketing solutions to move your brand forward."
        />
        <meta property="og:title" content="Our Services - MarketingOdus" />
        <meta
          property="og:image"
          content="https://marketingodus.com/ogimagemo.jpg"
        />
        <link rel="canonical" href="https://marketingodus.com/services" />
      </Helmet>

      <section
        id="home"
        className="  flex flex-col items-center justify-center text-center max-w-[87%] mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          We Give Shape to What You Imagine
        </h1>
        <p className="text-lg md:text-xl font-semibold max-w-7xl mt-5">
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

      <div className="max-w-7xl mx-auto space-y-24 px-6 mt-28">
        {services.map(({ title, description, items }) => (
          <div key={title} className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
            <p className="text-lg md:text-xl  max-w-3xl">{description}</p>
            <ul className="list-disc list-inside space-y-2 ">
              {items.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#contact"
                className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full transition"
              >
                Experience More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
