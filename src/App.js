import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./Menu";
import Hero from "./Hero";
import Clases from "./Clases";
import Estudio from "./Estudio";
import Fina from "./Fina";
import Contacto from "./Contacto";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (ready) {
    return (
      <div className="App">
        <Menu />
        <Hero />
        <Clases />
        <Estudio />
        <Fina />
        <Contacto />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center mt-5">Loading...</h1>
        <h2 className="text-center">
          <i class="fa-sharp fa-solid fa-fire-flame-curved"></i>
        </h2>
      </div>
    );
  }
}

export default App;
