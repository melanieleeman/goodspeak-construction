import './App.css'
import logotype from './assets/logo_title_grey.png'
import {ContactForm} from "./components/ContactForm/ContactForm.jsx";
import React, {useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className="app-container">
        <div className="background-layer" />
        <img className="logo" src={logotype} alt="Logo Goodspeak VR"/>
        <div className="coming-text">
          <h1>La révolution de la prise de parole est en marche.</h1>
          <div className="presentation-text">
            <h3>GoodSpeakVR arrive.</h3>
            Une plateforme unique qui conjugue IA, réalité virtuelle <br/> et feedbacks ultra-précis pour transformer vos prises de parole. <br/>
            <div className="more-than-text">
              <span className="bold">Plus qu’une formation</span> : une immersion. <br/>
              <span className="bold">Plus qu’un entraînement</span> : un simulateur d’élite.
            </div>
          </div>
          <div className="contact-us">
            <p>Besoin de plus d’informations avant le lancement ?</p>
            <button className={"primary"} onClick={() => setIsOpen(true)}>Contactez-nous</button>
          </div>
        </div>
        <div className="footer-band">
        </div>


        {isOpen && (
            <div className="modal-backdrop">
              <div className="modal">
                <button className="close" onClick={() => setIsOpen(false)}>×</button>
                <h2>Contactez GoodSpeakVR</h2>
                <ContactForm/>
                <p className="phone">Ou appelez-nous au <a href="tel:+33612791312">06 12 79 13 12</a></p>
              </div>
            </div>
        )}
      </div>
  )
}

export default App
