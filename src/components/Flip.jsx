import React, { useState } from "react";
import "./Flip.css";

export default function FlipCard({
  imageSrc,
  imageAlt = "Card front image",
  children,
  hover = false, // set to true if you want hover-to-flip on desktop
}) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`flipcard ${hover ? "flip-on-hover" : ""}`}>
      <div
        className={`flipcard-inner ${flipped ? "is-flipped" : ""}`}
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-pressed={flipped}
        aria-label="Flip card"
      >
        <div className="flipcard-face flipcard-front">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="flipcard-face flipcard-back">{children}</div>
      </div>
    </div>
  );
}
