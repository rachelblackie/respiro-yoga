import React from "react";

import "./Hero.css";
import fireBackgroundMobile from "./fireBackgroundMobile.jpg";

export default function Hero() {
  return (
    <div className="head-text">
      <div className="head-image position-relative">
        <img
          src={fireBackgroundMobile}
          className="img-fluid"
          alt="flames"
        ></img>
      </div>

      <div className="text-on-image text-center">
        <h1 className="hero-heading">Respiro Yoga</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
    </div>
  );
}
