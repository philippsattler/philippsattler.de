import React from "react";
import './Interests.css'

const Interests = () => {
  return (
    <div className="interests">
      <h2 className="section-title">Meine Leidenschaften</h2>
      <div className="interests-container">
        <div className="interest-item">
          <div className="interest-icon">🎾</div>
          <div className="interest-content">
            <h3 className="interest-title">Tennis</h3>
            <p className="interest-text">
              Tennis spiele ich aktiv im Verein. Der Sport bietet mir nicht nur körperliche Bewegung, sondern auch strategisches Denken und den Austausch mit anderen Spielern.
            </p>
          </div>
        </div>
        
        <div className="interest-item">
          <div className="interest-icon">🎻</div>
          <div className="interest-content">
            <h3 className="interest-title">Musik</h3>
            <p className="interest-text">
              Ich spiele Geige im Orchester. Die Musik ist für mich ein wichtiger Ausgleich zum technischen Alltag und ermöglicht es mir, kreativ tätig zu sein.
            </p>
          </div>
        </div>
        
        <div className="interest-item">
          <div className="interest-icon">💪</div>
          <div className="interest-content">
            <h3 className="interest-title">Fitness</h3>
            <p className="interest-text">
              Regelmäßiges Training im Fitnessstudio gehört zu meinem Alltag. Es hilft mir, körperlich fit zu bleiben und mental ausgeglichen zu sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests;

