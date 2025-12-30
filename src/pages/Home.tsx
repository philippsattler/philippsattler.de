import React, { useState, useEffect } from 'react';
import Hero from '../sections/hero/Hero.tsx';
import About from '../sections/about/About.tsx';
import Skills from '../sections/skills/Skills.tsx';
import Experience from '../sections/experience/Experience.tsx';
import Projects from '../sections/projects/Projects.tsx';
import Contact from '../sections/contact/Contact.tsx';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">PS</div>
          <div className="nav-links">
            <button 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => scrollToSection('about')}
            >
              Über mich
            </button>
            <button 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={activeSection === 'experience' ? 'active' : ''} 
              onClick={() => scrollToSection('experience')}
            >
              Erfahrung
            </button>
            <button 
              className={activeSection === 'hobbies' ? 'active' : ''} 
              onClick={() => scrollToSection('hobbies')}
            >
              Hobbys
            </button>
            <button 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero-section">
        <Hero />
      </section>

      <section id="about" className="about-section">
        <About />
      </section>

      <section id="skills" className="skills-section">
        <Skills />
      </section>

      <section id="experience" className="experience-section">
        <Experience />
      </section>

      <section id="hobbies" className="projects-section">
        <Projects />
      </section>

      <section id="contact" className="contact-section">
        <Contact />
      </section>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Philipp Sattler</p>
      </footer>
    </div>
  );
};

export default Home;

