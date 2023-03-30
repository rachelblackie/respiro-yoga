import React from "react";
import Carousel from "react-bootstrap/Carousel";
import yogaStudioOne from "./yogaStudioOne.jpg";
import yogaStudioTwo from "./yogaStudioTwo.jpg";
import yogaStudioThree from "./yogaStudioThree.jpg";
import "./Estudio.css";

export default function Estudio() {
  return (
    <div>
      <h1 className="text-center m-3">Estudio</h1>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaStudioOne}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaStudioTwo}
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-text">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={yogaStudioThree}
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-text">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
