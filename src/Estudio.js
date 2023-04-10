import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hotRoom from "./images/hotRoom.jpeg";
import receptionArea from "./images/receptionArea.jpeg";
import receptionDecor from "./images/receptionDecor.jpeg";
import coatRack from "./images/coatRack.jpeg";
import collage from "./images/collage.jpeg";
import shower from "./images/shower.jpeg";
import sink from "./images/sink.jpeg";
import vista from "./images/vista.jpeg";
import "./Estudio.css";

function Estudio(props) {
  let content = {
    Castellano: {
      title: "Estudio",
      slideOne: "Respiro Yoga",
      slideTwo: "Hot Room",
      slideThree: "Vista desde el estudio",
      slideFour: "Zona de recepción",
      slideFive: "Zona de recepción",
      slideSix: "Vestuario",
      slideSeven: "Ducha",
      slideEight: "Baño",
    },
    English: {
      title: "Studio",
      slideOne: "Respiro Yoga",
      slideTwo: "Hot Room",
      slideThree: "View from the studio",
      slideFour: "Reception area",
      slideFive: "Reception area",
      slideSix: "Changing area",
      slideSeven: "Shower",
      slideEight: "Bathroom",
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
              src={collage}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideOne}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={hotRoom}
              alt="Yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideTwo}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={vista}
              alt="View from yoga studio"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideThree}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionArea}
              alt="Yoga studio reception"
            />

            <Carousel.Caption className="carousel-text">
              <h3>{content.slideFour}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionDecor}
              alt="Yoga studio reception"
            />

            <Carousel.Caption className="carousel-text">
              <h3>{content.slideFive}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={coatRack}
              alt="Yoga studio changing area"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideSix}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={shower}
              alt="Yoga studio shower"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideSeven}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={sink}
              alt="Yoga studio bathroom"
            />
            <Carousel.Caption className="carousel-text">
              <h3>{content.slideEight}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Estudio;
