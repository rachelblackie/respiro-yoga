import React from "react";
import "./App.css";
import "./Clases.css";

export default function Clases(props) {
  let content = {
    Castellano: {
      title: "Clases",
      firstClass: "Tipo de clase",
      secondClass: "Tipo de clase",
      thirdClass: "Tipo de clase",
      fourthClass: "Tipo de clase",
    },
    English: {
      title: "Classes",
      firstClass: "Class type",
      secondClass: "Class type",
      thirdClass: "Class type",
      fourthClass: "Class type",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="clases">
      <h2 className="text-center m-3">{content.title}</h2>
      <div className="row m-5">
        <ul>
          <li>
            <strong>Tipo de clase</strong>
          </li>
          <ul>
            <li className="m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
          <li>
            <strong>Tipo de clase</strong>
          </li>
          <ul>
            <li className="m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
          <li>
            <strong>Tipo de clase</strong>
          </li>
          <ul>
            <li className="m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
          <li>
            <strong>Tipo de clase</strong>
          </li>
          <ul>
            <li className="m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
