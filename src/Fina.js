import React from "react";
import "./Fina.css";
import finaYogaTwo from "./images/finaYogaTwo.gif";

function Fina(props) {
  let content = {
    Castellano: {
      title: "Conoce a Fina",
      bio: "Soy Fina, pero mi mente es amplia. Amo la vida al natural, pero tambièn en la literatura, la filosofía y el cine, que fueron mis primeras vocaciones. Me dediqué a decorar espacios durante algún tiempo. En el año 2019 decidí tomar la senda del Yoga. Una transformación que me lleva a recorrer un camino. Un camino dónde no hay meta, sólo búsqueda gozosa a través del vehículo del cuerpo.",
    },
    English: {
      title: "Meet Fina",
      bio: "I'm Fina. I love life in nature, and also in literature, philosophy and cinema; which were my first vocations. I also worked in interior decoration for some time. In the year 2019 I decided to take the path of Yoga. It has been a transformation that leads me down a new path; a path on which there is no goal, only a joyous search through the vehicle of the body.",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="fina">
      <div className="row m-5">
        <h1 className="text-center">{content.title}</h1>
        <div className="col-lg text-center my-auto">
          <img
            src={finaYogaTwo}
            className="img-fluid fina-photo mb-3"
            alt="yoga pose"
          ></img>
        </div>
        <div className="col-lg">
          <p>{content.bio}</p>
        </div>
      </div>
    </div>
  );
}
export default Fina;
