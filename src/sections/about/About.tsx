import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">Über mich</span>
          <h2 className="section-title">Wer ich bin</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Als junger, motivierter Softwareentwickler mit fundierter Ausbildung und praktischer 
              Berufserfahrung entwickle ich moderne Webanwendungen mit Angular und React. 
              Meine Leidenschaft für die Softwareentwicklung zeigt sich sowohl in meiner beruflichen 
              Tätigkeit als auch in privaten Projekten.
            </p>
            <p className="about-paragraph">
              Aktuell absolviere ich eine Fortbildung zum Bachelor Professional in IT (IHK) 
              bei der <a href="https://www.management-qualifizierung.de/it-fortbildungen/bachelor-professional-in-it-ihk" target="_blank" rel="noopener noreferrer" className="about-link">manQ Akademie</a>, 
              um meine fachlichen Kompetenzen weiter auszubauen und mich für anspruchsvolle 
              Führungsaufgaben in der IT-Branche zu qualifizieren.
            </p>
            <div className="about-fortbildung-content">
              <p className="about-paragraph" style={{ marginBottom: '0.75rem' }}>Schwerpunkte der Fortbildung (Fachrichtung: Softwareentwicklung):</p>
              <ul className="about-fortbildung-list">
                <li>Softwarelösungen planen, entwickeln, implementieren und evaluieren</li>
                <li>IT-Projektmanagement: Projektplanung, Budgetierung, Risikomanagement und Ressourcensteuerung</li>
                <li>Führen von Mitarbeitenden und Teams: Führungsmethoden, Konfliktlösung, Teamentwicklung</li>
                <li>Geschäftsprozesse durch IT-Einsatz analysieren und optimieren</li>
                <li>Qualitätssicherung und Projektcontrolling</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Jahre Erfahrung</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologien</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

