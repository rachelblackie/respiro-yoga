import React from "react";
import "./App.css";
import "./Clases.css";
import Carousel from "react-bootstrap/Carousel";
import coupleClass from "./images/coupleClass.jpeg";
import privateClass from "./images/privateClass.jpeg";
import groupClass from "./images/groupClass.jpeg";

function Clases(props) {
  let content = {
    Castellano: {
      title: "Clases",
      firstClass: "Hot Yoga",
      firstClassDescription: (
        <div>
          Clase de Yoga con calor
          <ul className="sub-list">
            <li>26 posturas</li>
            <li>2 ejercicios de respiración</li>
            <li>Calor y humedad a 40º creando vida en tu cuerpo</li>
          </ul>
        </div>
      ),
      secondClass: "Low Pressure Yoga",
      secondClassDescription: (
        <div>
          Clase especial que combina:
          <ul className="sub-list">
            <li>Ejercicios hipopresivos reforzando el suelo pélvico</li>
            <li>Propiocepción y conciencia corporal</li>
            <li>Una pequeña meditación basada en Yoga Nidra</li>
          </ul>
        </div>
      ),
      thirdClass: "Yoga Hormonal",
      thirdClassDescription: (
        <ul className="sub-list">
          <li>
            Sesión de yoga especial para equilibrar los síntomas del climaterio
          </li>
          <li>Indicado también para desajustes hormonales a cualquier edad</li>
        </ul>
      ),
      fourthClass: "Yoga Terapeutico",
      fourthClassDescription: (
        <ul className="sub-list">
          <li>Sesión a medida atendiendo a tus necesidades</li>
          <li>
            Trabajamos postura, relajación físico-mental y equilibrio energético
          </li>
        </ul>
      ),
      bottomLine: (
        <div>
          <div>Disponible en clase privada, parejas, o grupos pequeños</div>
          <div> (máximo de 5 participantes)</div>
        </div>
      ),
      privateClassCaption: "Clase privada de yoga",
      coupleClassCaption: "Clase privada de yoga para parejas",
      groupClassCaption: "Clases en grupo reducido (máximo 5 personas)",
    },
    English: {
      title: "Classes",
      firstClass: "Hot Yoga",
      firstClassDescription: (
        <div>
          Hot Yoga class
          <ul className="sub-list">
            <li>26 poses</li>
            <li>2 breathing exercises</li>
            <li>Heat and humidity at 40ºC sparking life in your body</li>
          </ul>
        </div>
      ),
      secondClass: "Low Pressure Yoga",
      secondClassDescription: (
        <div>
          Special class which combines:
          <ul className="sub-list">
            <li>Hypopressive exercises to strengthen your pelvic floor</li>
            <li>Proprioception and body awareness</li>
            <li>A short meditation based on Yoga Nidra</li>
          </ul>
        </div>
      ),
      thirdClass: "Hormonal Yoga",
      thirdClassDescription: (
        <ul className="sub-list">
          <li>Special yoga session to balance the symptoms of menopause</li>
          <li>Also suitable for hormonal imbalances at any age</li>
        </ul>
      ),
      fourthClass: "Therapeutic Yoga",
      fourthClassDescription: (
        <ul className="sub-list">
          <li>Sessions tailored to your needs</li>
          <li>
            We work on posture, physical and mental relaxation, and energy
            balance
          </li>
        </ul>
      ),
      bottomLine: (
        <div>
          <div>Available for individuals, couples, or small groups</div>
          <div>(maximum of 5 participants)</div>
        </div>
      ),
      privateClassCaption: "Private yoga class",
      coupleClassCaption: "Private yoga class for couples",
      groupClassCaption: "Classes in small groups (maximum 5 people)",
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
          <p className="text-center">{content.bottomLine}</p>
        </div>

        <div className="col-lg my-auto">
          <Carousel className="carousel classesCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={privateClass}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-text">
                <h3>{content.privateClassCaption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 clases-carousel-image"
                src={coupleClass}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-text">
                <h3>{content.coupleClassCaption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 clases-carousel-image"
                src={groupClass}
                alt="Clases en grupo"
              />
              <Carousel.Caption className="carousel-text">
                <h3>{content.groupClassCaption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Clases;
