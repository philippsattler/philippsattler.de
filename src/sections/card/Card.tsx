import React from "react";
import './Card.css'

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-image-wrapper">
                <img className="profile-image" src="image.jpg" alt="Philipp Sattler" />
            </div>
            <div className="card-content">
                <h2 className="card-name">Philipp Sattler</h2>
                <p className="card-title">Softwareentwickler</p>
                <p className="card-description">
                    Code schreiben, Probleme lösen und dabei ständig dazulernen – das ist meine Leidenschaft. 
                    Aktuell arbeite ich als Softwareentwickler und entwickle Webanwendungen mit Angular und React. 
                    Ab September 2025 beginne ich eine Fortbildung zum Bachelor Professional in IT (IHK) bei der{' '}
                    <a href="https://www.management-qualifizierung.de/it-fortbildungen/bachelor-professional-in-it-ihk" target="_blank" rel="noopener noreferrer" className="card-link">manQ Akademie</a>.
                </p>
                <div className="skills-section">
                    <h3 className="skills-title">Technologien & Skills</h3>
                    <div className="skills-grid">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Angular</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">Git</span>
                    </div>
                </div>
                <div className="languages-section">
                    <h3 className="languages-title">Sprachen</h3>
                    <div className="languages-list">
                        <span className="language-item">Deutsch - Muttersprache</span>
                        <span className="language-item">Englisch - B2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
