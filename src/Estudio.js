import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hotRoom from "./hotRoom.jpeg";
import receptionArea from "./receptionArea.jpeg";
import receptionDecor from "./receptionDecor.jpeg";
import coatRack from "./coatRack.jpeg";
import "./Estudio.css";

export default function Estudio() {
  return (
    <div id="estudio" className="estudio">
      <h1 className="text-center m-3">Estudio</h1>
      <div className="container">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={hotRoom}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <h3>Hot Room</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionArea}
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-text">
              <h3>Zona de recepción</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={receptionDecor}
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-text">
              <h3>Zona de recepción</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={coatRack}
              alt="Fourth slide"
            />
            <Carousel.Caption className="carousel-text">
              <h3>Vestuario</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
