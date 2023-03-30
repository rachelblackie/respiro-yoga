import React from "react";
import meditation from "./meditation.png";
import "./App.css";

export default function Clases() {
  return (
    <div>
      <h2 className="text-center m-3">Clases</h2>
      <div className="row">
        <div className="col text-center my-auto">
          <img
            src={meditation}
            className="img-fluid"
            alt="illustration of woman meditating"
          ></img>
        </div>
        <div className="col my-auto">
          <ul>
            <li>Tipo de clase</li>
            <ul>
              <li>más información</li>
            </ul>
            <li>Tipo de clase</li>
            <ul>
              <li>más información</li>
            </ul>
            <li>Tipo de clase</li>
            <ul>
              <li>más información</li>
            </ul>
            <li>Tipo de clase</li>
            <ul>
              <li>más información</li>
            </ul>
            <li>Tipo de clase</li>
            <ul>
              <li>más información</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
