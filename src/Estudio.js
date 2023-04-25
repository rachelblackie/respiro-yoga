import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hotRoom from "./images/hotRoom.jpeg";
import receptionArea from "./images/receptionArea.jpeg";
import receptionDecor from "./images/receptionDecor.jpeg";
import coatRack from "./images/coatRack.jpeg";
import shower from "./images/shower.jpeg";
import sink from "./images/sink.jpeg";
import vista from "./images/vista.jpeg";
import yogaClass from "./images/yogaClass.jpeg";
import yogaStudents from "./images/yogaStudents.jpeg";
import yogaStudio from "./images/yogaStudio.jpeg";
import heater from "./images/heater.jpeg";
import rainbowVista from "./images/rainbowVista.jpeg";
import eveningVista from "./images/eveningVista.jpeg";
import "./Estudio.css";

function Estudio(props) {
  let content = {
    Castellano: {
      title: "Estudio",
      hotRoom: "Hot Room",
      vista: "Vista desde el estudio",
      reception: "Zona de recepción",
      vestuario: "Vestuario",
      shower: "Ducha",
      bathroom: "Baño",
      yogaClass: "Clase de yoga",
    },
    English: {
      title: "Studio",
      hotRoom: "Hot Room",
      vista: "View from the studio",
      reception: "Reception area",
      vestuario: "Changing area",
      shower: "Shower",
      bathroom: "Bathroom",
      yogaClass: "Yoga class",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="estudio" className="estudio">
      <h1 className="text-center m-3">{content.title}</h1>
      <div className="container">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={hotRoom}
              alt="Yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.hotRoom}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaStudio}
              alt="Yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.hotRoom}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={heater}
              alt="Yoga class in progress"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.hotRoom}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaClass}
              alt="Yoga class in progress"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.yogaClass}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaStudents}
              alt="Yoga class in progress"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.yogaClass}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={vista}
              alt="View from yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.vista}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={rainbowVista}
              alt="View from yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.vista}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={eveningVista}
              alt="View from yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.vista}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionArea}
              alt="Yoga studio reception"
            />

            <Carousel.Caption className="carousel-text">
              <h3>{content.reception}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionDecor}
              alt="Yoga studio reception"
            />

            <Carousel.Caption className="carousel-text">
              <h3>{content.reception}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={coatRack}
              alt="Yoga studio changing area"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.vestuario}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={shower}
              alt="Yoga studio shower"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.shower}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={sink}
              alt="Yoga studio bathroom"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.bathroom}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Estudio;
