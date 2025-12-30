import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-number">404</div>
          <h1 className="not-found-title">Ups! Diese Seite existiert nicht</h1>
          <p className="not-found-description">
            Es sieht so aus, als hätte sich diese Seite in den digitalen Weiten verlaufen. 
            Vielleicht hat sie sich mit einem Bug versteckt? 🐛
          </p>
          <p className="not-found-subtitle">
            Aber keine Sorge – ich kann dir helfen, den richtigen Weg zu finden!
          </p>
          <div className="not-found-actions">
            <button 
              className="not-found-button primary"
              onClick={() => navigate('/')}
            >
              Zur Startseite
            </button>
            <button 
              className="not-found-button secondary"
              onClick={() => window.history.back()}
            >
              Zurück gehen
            </button>
          </div>
          <div className="not-found-links">
            <button className="not-found-link" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Über mich</button>
            <button className="not-found-link" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Skills</button>
            <button className="not-found-link" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Erfahrung</button>
            <button className="not-found-link" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Kontakt</button>
          </div>
        </div>
        <div className="not-found-illustration">
          <div className="not-found-code">
            <span className="code-line">if (page.exists()) {'{'}</span>
            <span className="code-line">  return page.content;</span>
            <span className="code-line">{'}'} else {'{'}</span>
            <span className="code-line error-line">  return 404; // 😅</span>
            <span className="code-line">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

