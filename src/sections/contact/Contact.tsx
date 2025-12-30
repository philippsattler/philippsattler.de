import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Lass uns in Kontakt treten</h2>
          <p className="contact-intro">
            Ich freue mich über deine Nachricht und die Möglichkeit, mit dir ins Gespräch zu kommen.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-email">
            <a href="mailto:philipp.sattler@web.de" className="email-link">
              <span className="email-icon">✉️</span>
              <div className="email-content">
                <span className="email-label">E-Mail</span>
                <span className="email-address">philipp.sattler@web.de</span>
              </div>
            </a>
          </div>
          <div className="contact-social">
            <a href="https://www.linkedin.com/in/philipp-sattler-98a973247/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img className="social-icon" alt="LinkedIn" src="icons/linkedin.svg" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/philippsattler/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img className="social-icon" alt="GitHub" src="icons/github.svg" />
              <span>GitHub</span>
            </a>
            <a href="https://discord.com/users/philipp_sattler" target="_blank" rel="noopener noreferrer" className="social-link">
              <img className="social-icon" alt="Discord" src="icons/discord.svg" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
