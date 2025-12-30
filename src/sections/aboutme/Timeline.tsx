import React from "react";
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="aboutme">
      <h2 className="section-title">Berufserfahrung & Ausbildung</h2>
      <div className="about-grid">
        <div className="about-card featured">
          <div className="about-card-header">
            <div className="about-icon">💼</div>
            <h3 className="about-card-title">Softwareentwickler</h3>
          </div>
          <p className="about-card-date">11/2024 - Jetzt</p>
          <p className="about-card-text">
            Aktuell arbeite ich als Softwareentwickler und bin verantwortlich für die Webentwicklung mit Angular und React. 
            Zu meinen Aufgaben gehören die IT-Systemadministration, IT-Projektmanagement sowie die Mikrocontrollerprogrammierung 
            mit dem Raspberry Pi.
          </p>
        </div>
        
        <div className="about-card">
          <div className="about-card-header">
            <div className="about-icon">👨‍💻</div>
            <h3 className="about-card-title">Junior Softwareentwickler</h3>
          </div>
          <p className="about-card-date">06/2023 - 10/2024</p>
          <p className="about-card-text">
            Als Junior Softwareentwickler entwickelte ich Webanwendungen mit React, TypeScript und Java. 
            Zudem war ich für die Entwicklung von Java GUI-Anwendungen, die Neuentwicklung von QlikSense Apps 
            sowie die Migration von QlikView Apps verantwortlich.
          </p>
        </div>
        
        <div className="about-card">
          <div className="about-card-header">
            <div className="about-icon">🎓</div>
            <h3 className="about-card-title">Ausbildung Fachinformatiker</h3>
          </div>
          <p className="about-card-date">09/2020 - 06/2023</p>
          <p className="about-card-text">
            Während meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung lernte ich die Grundlagen verschiedener 
            Programmiersprachen, erstellte statische Websites mit HTML5 und CSS3, arbeitete mit serverseitigem und clientseitigem 
            JavaScript mit Node.js und React, beschäftigte mich mit IT-Darstellungstechniken, IT-Projektmanagement 
            und Mikrocontrollerprogrammierung mit dem Raspberry Pi.
          </p>
        </div>
        
        <div className="about-card">
          <div className="about-card-header">
            <div className="about-icon">🚀</div>
            <h3 className="about-card-title">Fortbildung Bachelor Professional</h3>
          </div>
          <p className="about-card-date">09/2025 - 09/2027 (geplant)</p>
          <p className="about-card-text">
            Ab September 2025 beginne ich eine Fortbildung zum Bachelor Professional in IT (IHK) bei der{' '}
            <a href="https://www.management-qualifizierung.de/it-fortbildungen/bachelor-professional-in-it-ihk" target="_blank" rel="noopener noreferrer" className="about-link">manQ Akademie</a>. 
            Diese berufsbegleitende Weiterbildung im Live-Online-Format (DQR-Niveau 6) ermöglicht es mir, mein Wissen auf ein höheres Niveau zu bringen 
            und mich für anspruchsvolle Aufgaben in der IT-Branche zu qualifizieren. Der Abschluss steht auf einer Stufe mit Meister, Techniker und Bachelor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
