import React from "react";
import './Projects.css'

const Projects = () => {
  const hobbies = [
    {
      icon: "🖨️",
      title: "3D-Druck",
      description: "3D-Druck verschiedener Modelle"
    },
    {
      icon: "🎾",
      title: "Tennis",
      description: "Aktiv im Verein spielen"
    },
    {
      icon: "🎻",
      title: "Musik",
      description: "Geige im Orchester"
    },
    {
      icon: "💪",
      title: "Fitness",
      description: "Regelmäßiges Training im Fitnessstudio"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Hobbys</span>
          <h2 className="section-title">Was mich antreibt</h2>
        </div>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <div className="hobby-icon">{hobby.icon}</div>
              <div className="hobby-content">
                <h4 className="hobby-title">{hobby.title}</h4>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
