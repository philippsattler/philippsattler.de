import React from "react";
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      period: "11/2024 - Jetzt",
      title: "Softwareentwickler",
      tasks: [
        "Webentwicklung mit Angular und React sowie KI-Integration",
        "Automatisierung wiederkehrender Geschäftsprozesse (C#, .NET 8.0)",
        "Ganzheitlicher technischer Support",
        "IT-Systemadministration",
        "IT-Projektmanagement"
      ],
      current: true
    },
    {
      period: "06/2023 - 10/2024",
      title: "Junior Softwareentwickler",
      tasks: [
        "Entwicklung von Webanwendungen mit React, TypeScript und Java",
        "Entwicklung von Java GUI-Anwendungen",
        "Neuentwicklung von QlikSense Apps",
        "Migration von QlikView Apps"
      ]
    },
    {
      period: "09/2020 - 06/2023",
      title: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
      tasks: [
        "Grundlagen verschiedener Programmiersprachen",
        "Erstellung statischer Websites mit HTML5 und CSS3",
        "Serverseitiges und clientseitiges JavaScript mit Node.js und React",
        "Umgang mit Datenbanken",
        "IT-Darstellungstechniken",
        "IT-Projektmanagement",
        "Mikrocontrollerprogrammierung mit Raspberry Pi"
      ]
    },
    {
      period: "09/2025 - jetzt",
      title: "Fortbildung zum Bachelor Professional in IT (IHK)",
      description: "Berufsbegleitende Weiterbildung im Live-Online-Format bei der manQ Akademie. DQR-Niveau 6 (gleichwertig mit Meister, Techniker und Bachelor).",
      description2: "Voraussichtlicher Abschluss September 2027.",
      description3: "",
      link: "https://www.management-qualifizierung.de/it-fortbildungen/bachelor-professional-in-it-ihk",
      current: true
    }
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-label">Erfahrung</span>
          <h2 className="section-title">Mein Werdegang</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-card ${exp.current ? 'current' : ''}`}>
              <div className="experience-period">{exp.period}</div>
              <h3 className="experience-title">{exp.title}</h3>
              {exp.tasks ? (
                <ul className="experience-tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="experience-description">
                    {exp.description}
                    {exp.link && (
                      <> {' '}
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                          Mehr erfahren ↗
                        </a>
                      </>
                    )}
                  </p>
                  {exp.description2 && (
                    <p className="experience-description">{exp.description2}</p>
                  )}
                  {exp.description3 && (
                    <p className="experience-description">{exp.description3}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience;
