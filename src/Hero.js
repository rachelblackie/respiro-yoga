import React from "react";

import "./Hero.css";
import fireBackground from "./fireBackground.jpg";

export default function Hero() {
  return (
    <div className="head-text">
      <div className="head-image position-relative">
        <img src={fireBackground} className="img-fluid" alt="flames"></img>
      </div>

      <div className="text-on-image text-center">
        <h1>Respiro Yoga</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
    </div>
  );
}
