import React from "react";
import videosrc from "../assets/desktop.mp4";

function Home() {
  return (
    <div className="videofullscreen">
      <video
        loop
        className="bg-video"
        src={videosrc}
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}

export default Home;
