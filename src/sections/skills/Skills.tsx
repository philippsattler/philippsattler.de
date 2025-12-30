import React from "react";
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Datenbanken",
      skills: ["Java", "C#", "Node.js", "SQL"]
    },
    {
      title: "Tools & Methoden",
      skills: ["Git", "IT-Projektmanagement", "QlikSense", "QlikView", "WordPress", "KI"]
    },
    {
      title: "Hardware & Embedded",
      skills: ["Raspberry Pi", "Mikrocontrollerprogrammierung"]
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologien & Kompetenzen</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
