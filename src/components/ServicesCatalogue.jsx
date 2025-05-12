import React from "react";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaBullhorn,
  FaSearch,
  FaPenFancy,
  FaEnvelopeOpenText,
  FaDraftingCompass,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  { name: "Web Design", icon: <FaLaptopCode /> },
  { name: "Logo Design", icon: <FaPencilRuler /> },
  { name: "FB / Insta / YouTube Marketing", icon: <FaBullhorn /> },
  { name: "SEO", icon: <FaSearch /> },
  { name: "Content Writing", icon: <FaPenFancy /> },
  { name: "Email Campaigns", icon: <FaEnvelopeOpenText /> },
  { name: "UX/UI Prototyping", icon: <FaDraftingCompass /> },
  { name: "Brand Strategy Workshops", icon: <FaLightbulb /> },
];

const ServicesCatalogue = () => {
  return (
    <div className="overflow-hidden py-8">
      <div
        className="inline-block whitespace-nowrap animate-marquee"
        style={{ minWidth: "200%" }}
      >
        {[...services, ...services].map(({ name, icon }, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-block text-white text-center px-4 sm:px-6 md:px-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl">{icon}</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold">
                {name}
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServicesCatalogue;
