import React from "react";
import mainVideo from "../assets/mainvisual.mp4"; // your video file

const MarketingVid = () => {
  return (
    <div className="overflow-hidden">
      <video
        src={mainVideo}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover"
      />
    </div>
  );
};

export default MarketingVid;
