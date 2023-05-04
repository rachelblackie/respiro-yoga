import React from "react";
import collage from "../images/collage.jpeg";
import brickWall from "../images/brickWall.jpg";
import "../styles/AltHero.css";

function AltHero() {
  return (
    <div
      className="head-text hero"
      id="hero"
      style={{
        backgroundImage: `url(${brickWall})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
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
