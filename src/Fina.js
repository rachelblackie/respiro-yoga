import React from "react";
import "./Fina.css";
import finaYoga from "./images/finaYoga.jpeg";

function Fina(props) {
  let content = {
    Castellano: {
      title: "Conoce a Fina",
      bio: "En el año 2019 decidí tomar la senda del Yoga. Una transformación que me lleva a recorrer un camino. Un camino dónde no hay meta, sólo búsqueda gozosa a través del vehículo del cuerpo.",
    },
    English: {
      title: "Meet Fina",
      bio: "In the year 2019 I decided to take the path of Yoga. It has been a transformation that leads me down a new path; a path on which there is no goal, only a joyous search through the vehicle of the body.",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="fina">
      <div className="row m-5">
        <div className="col-lg text-center my-auto">
          <img
            src={finaYoga}
            className="img-fluid clases-image fina-photo"
            alt="yoga instructor"
          ></img>
        </div>
        <div className="col-lg">
          <h1>{content.title}</h1>
          <p>{content.bio}</p>
        </div>
      </div>
    </div>
  );
}
export default Fina;
