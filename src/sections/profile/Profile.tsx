import React from "react";
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img className="profile-image" src="image.jpg" alt="Philipp Sattler" />
        </div>
        <div className="profile-content">
          <h2 className="profile-title">Über mich</h2>
          <p className="profile-text">
            Als Softwareentwickler mit fundierter Ausbildung und praktischer Berufserfahrung 
            entwickle ich moderne Webanwendungen mit Angular und React. Meine Leidenschaft 
            für die Softwareentwicklung zeigt sich sowohl in meiner beruflichen Tätigkeit 
            als auch in privaten Projekten mit 3D-Druck und Raspberry Pi.
          </p>
          <p className="profile-text">
            Ab September 2025 beginne ich eine Fortbildung zum Bachelor Professional in IT (IHK) 
            bei der <a href="https://www.management-qualifizierung.de/it-fortbildungen/bachelor-professional-in-it-ihk" target="_blank" rel="noopener noreferrer" className="profile-link">manQ Akademie</a>, 
            um meine fachlichen Kompetenzen weiter auszubauen und mich für anspruchsvolle 
            Führungsaufgaben in der IT-Branche zu qualifizieren.
          </p>
          <div className="profile-languages">
            <h3 className="languages-title">Sprachen</h3>
            <div className="languages-list">
              <span className="language-item">Deutsch (Muttersprache)</span>
              <span className="language-item">Englisch (B2)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;

