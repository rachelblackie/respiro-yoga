import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./Menu";
import Hero from "./Hero";
import Clases from "./Clases";
import Estudio from "./Estudio";
import Fina from "./Fina";
import Contacto from "./Contacto";
import AltHero from "./AltHero";

function App() {
  const [ready, setReady] = useState(false);

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Castellano"
  );

  useEffect(() => {
    setReady(true);
  }, []);

  if (ready) {
    return (
      <div className="App">
        <Menu
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <AltHero />
        <Clases
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <Estudio
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <Fina
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <Contacto
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
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
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
