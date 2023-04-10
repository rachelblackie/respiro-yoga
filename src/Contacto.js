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
          href="google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-links"
        >
          <i class="fa-brands fa-whatsapp"></i> +34 555 55 55 55
        </a>{" "}
      </h4>
      <h4>
        <a
          href="mailto:fakeaddress@gmail.com"
          target="_blank"
          rel="noopenener noreferrer"
          className="contact-links"
        >
          <i class="fa-solid fa-square-envelope"></i> placeholder@gmail.com
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
