import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="text-center m-5">
      <h2>Contacto</h2>

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
          <i class="fa-solid fa-square-envelope"></i> fakeaddress@gmail.com
        </a>
      </h4>
    </div>
  );
}
