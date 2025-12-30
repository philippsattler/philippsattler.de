import React, { useState, useEffect } from "react";
import './Hero.css'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Softwareentwickler";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else if (!isDeleting && currentIndex === fullText.length) {
        // Wait before starting to delete
        setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
        setTimeout(typeText, deletingSpeed);
      } else {
        // Reset and start again
        isDeleting = false;
        setTimeout(typeText, 500);
      }
    };

    // Start typing after a short delay
    const startTimeout = setTimeout(() => {
      typeText();
    }, 1000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <img className="hero-image" src="image.jpg" alt="Philipp Sattler" />
          <div className="hero-image-glow"></div>
        </div>
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="hero-greeting">Hey, ich bin</span>
            <span className="hero-name-main">Philipp Sattler</span>
          </h1>
          <p className="hero-title">
            <span className="typed-text">{displayedText}</span>
            <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </p>
          <p className="hero-description">
            Ich entwickle moderne Webanwendungen mit Angular & React. 
            Leidenschaftlich, motiviert und stets bereit für neue Herausforderungen.
          </p>
          <div className="hero-badges">
            <span className="hero-badge">React</span>
            <span className="hero-badge">Angular</span>
            <span className="hero-badge">TypeScript</span>
            <span className="hero-badge">Java</span>
            <span className="hero-badge">C#</span>
          </div>
          <div className="hero-cta">
            <button 
              className="cta-button primary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kontakt aufnehmen
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  )
}

export default Hero;
