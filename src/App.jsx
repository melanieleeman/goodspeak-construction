import './App.css'
import logotype from './assets/logo_title_grey.png'
import {ContactForm} from "./components/ContactForm/ContactForm.jsx";
import React, {useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className="app-container">
        <div className="background-layer"/>
        <img className="logo" src={logotype} alt="Logo Goodspeak VR"/>
        <div className="coming-text">
          <h1>La révolution de la prise de parole est en marche.</h1>
          <div className="presentation-text">
            <h3>GoodSpeakVR arrive.</h3>
            <p>GoodSpeakVR est une application immersive de coaching en prise de parole en public, qui conjugue réalité virtuelle, intelligence artificielle et technologie digitale pour accompagner les professionnels dans le développement de leur leadership oral.</p>
            <p>Pensée comme un véritable simulateur d’entraînement, la plateforme permet de s’exercer dans des environnements variés (réunion, négociation, interview de crise, conférence…) en bénéficiant de feedbacks personnalisés et précis sur la voix, la posture, le regard, la gestuelle et la structure du discours. </p>
            <p>GoodSpeakVR est autonome, progressive. Elle propose un parcours encadré par GOOS, un coach virtuel exigeant mais bienveillant, qui guide l’utilisateur avant, pendant et après chaque séance.</p>
            <p>GoodSpeakVR permet de répéter, ajuster et progresser sans jugement, avec un accompagnement structuré, ludique et professionnel, directement accessible en VR, sur ordinateur ou smartphone.</p>


          </div>
          <div className="contact-us">
            <p className="bold">Besoin de plus d’informations avant le lancement ?</p>
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
