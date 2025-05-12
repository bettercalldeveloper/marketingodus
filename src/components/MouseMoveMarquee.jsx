import React from "react";

const MouseMoveMarquee = () => {
  // Top and Bottom Rows
  const topItems = [
    ["Built on ", ["Trust", true], ", Driven by ", ["Results", true]],
    ["We Don’t ", ["Sell", true], ". We ", ["Solve", true]],
    ["Strategic, Not Just Stylish"],
  ];
  const botItems = [
    ["Your Brand, In Safe Hands"],
    ["More Collaboration. Less Complication."],
    ["We Don’t Play. We Perform."],
    ["Strategy Over Guesswork. Always"],
  ];

  // Item Renderer
  const renderItems = (items) =>
    [...items, ...items].map((parts, idx) => (
      <div
        key={idx}
        className="inline-block px-4 sm:px-6 md:px-12 text-sm sm:text-base md:text-xl "
      >
        {parts.map((part, i) =>
          Array.isArray(part) && part[1] ? (
            <span key={i} className="font-bold ">
              {part[0]}
            </span>
          ) : (
            <span key={i}>{Array.isArray(part) ? part[0] : part}</span>
          )
        )}
      </div>
    ));

  return (
    <section className="overflow-hidden px-2 sm:px-4 md:px-8 py-8">
      {/* Top row scrolls left */}
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-block w-[200%] animate-marquee-left">
          {renderItems(topItems)}
        </div>
      </div>

      {/* Bottom row scrolls right */}
      <div className="whitespace-nowrap overflow-hidden mt-6">
        <div className="inline-block w-[200%] animate-marquee-right">
          {renderItems(botItems)}
        </div>
      </div>
    </section>
  );
};

export default MouseMoveMarquee;
