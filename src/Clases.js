import React from "react";
import "./App.css";
import "./Clases.css";
import Carousel from "react-bootstrap/Carousel";
import coupleClass from "./images/coupleClass.jpeg";
import privateClass from "./images/privateClass.jpeg";

function Clases(props) {
  let content = {
    Castellano: {
      title: "Clases",
      firstClass: "Bikram Yoga",
      firstClassDescription: "Descripción de primer clase",
      secondClass: "Yoga Hipopresivo",
      secondClassDescription: "Descripción de segunda clase",
      thirdClass: "Yoga Hormonal",
      thirdClassDescription: "Descripción de tercera clase",
      fourthClass: "Clases Privadas para Individuales y Parejas",
      fourthClassDescription: "Descripción de cuarta clase",
      photoCaptionOne: "Clases privadas",
      photoCaptionTwo: "Clases privadas para parejas",
    },
    English: {
      title: "Classes",
      firstClass: "Bikram Yoga",
      firstClassDescription: "Description of first class",
      secondClass: "Hypopressive Yoga",
      secondClassDescription: "Description of second class",
      thirdClass: "Hormonal Yoga",
      thirdClassDescription: "Description of third class",
      fourthClass: "Private Classes for Individuals and Couples",
      fourthClassDescription: "Description of fourth class",
      photoCaptionOne: "Private classes",
      photoCaptionTwo: "Private classes for couples",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="clases">
      <h2 className="text-center m-3">{content.title}</h2>
      <div className="row m-5">
        <div className="col-lg">
          <ul>
            <li>
              <strong>{content.firstClass}</strong>
            </li>
            <ul>
              <li className="m-2">{content.firstClassDescription}</li>
            </ul>
            <li>
              <strong>{content.secondClass}</strong>
            </li>
            <ul>
              <li className="m-2">{content.secondClassDescription}</li>
            </ul>
            <li>
              <strong>{content.thirdClass}</strong>
            </li>
            <ul>
              <li className="m-2">{content.thirdClassDescription}</li>
            </ul>
            <li>
              <strong>{content.fourthClass}</strong>
            </li>
            <ul>
              <li className="m-2">{content.fourthClassDescription}</li>
            </ul>
          </ul>
        </div>

        <div className="col-lg">
          <Carousel className="carousel classesCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={privateClass}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-text">
                <h3>{content.photoCaptionOne}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={coupleClass}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-text">
                <h3>{content.photoCaptionTwo}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Clases;
