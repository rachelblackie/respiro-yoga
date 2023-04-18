import React from "react";
import collage from "./images/collage.jpeg";
import respiroCollage from "./images/respiroCollage.jpg";
import "./AltHero.css";

function AltHero() {
  return (
    <div className="head-text hero" id="hero">
      <div className="head-image position-relative">
        <img
          src={collage}
          className="hero-background img-fluid"
          alt="Respiro Yoga collage"
        ></img>
      </div>
    </div>
  );
}
export default AltHero;
