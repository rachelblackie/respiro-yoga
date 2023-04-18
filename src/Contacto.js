import React from "react";
import "./Contacto.css";

function Contacto(props) {
  let content = {
    Castellano: {
      title: "Contacto",
      toTop: "Volver arriba",
    },
    English: {
      title: "Contact",
      toTop: "Back to top",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div className="text-center m-5" id="contacto">
      <h2>{content.title}</h2>

      <h4>
        <a
          href="https://wa.me/34695567434"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-links"
        >
          <i class="fa-brands fa-whatsapp"></i> +34 695 567 434
        </a>{" "}
      </h4>
      <h4>
        <a
          href="mailto:yogafinaterapia@gmail.com"
          target="_blank"
          rel="noopenener noreferrer"
          className="contact-links"
        >
          <i class="fa-solid fa-square-envelope"></i> yogafinaterapia@gmail.com
        </a>
      </h4>

      <h4 className="mt-5 back-to-top">
        <a href="#hero">
          <i class="fa-solid fa-circle-chevron-up"></i>
          <p>{content.toTop}</p>
        </a>
      </h4>
    </div>
  );
}
export default Contacto;
