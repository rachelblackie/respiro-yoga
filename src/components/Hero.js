import React from "react";

import "../styles/Hero.css";
import fireBackgroundMobile from "../images/fireBackgroundMobile.jpg";

function Hero(props) {
  let content = {
    Castellano: {
      subtitle: "Estudio de yoga en Lliria",
    },
    English: {
      subtitle: "Yoga studio in Lliria",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div className="head-text hero" id="hero">
      <div className="head-image position-relative">
        <img
          src={fireBackgroundMobile}
          className="hero-background img-fluid"
          alt="flames"
        ></img>
      </div>
      <div className="text-on-image text-center">
        <h1 className="hero-heading">Respiro Yoga</h1>
        <h4>{content.subtitle}</h4>
      </div>
    </div>
  );
}
export default Hero;
