import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faPython, faReact, faLaravel, faVuejs, faCss3Alt, faPhp, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faFlask, faCube, faCode, faDatabase, faSquareRootAlt, faChartLine, faChartBar, faChartPie, faBrain } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import logo from '../src/assets/hero_setup.webp';
import me from '../src/assets/me.png';

library.add(faGithub, faLinkedin, faPython, faReact, faFlask, faCube, faCode, faDatabase, faSquareRootAlt, faChartLine, faChartBar, faBrain, faLaravel, faVuejs, faCss3Alt, faPhp, faFigma, faChartPie);


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'ARQUITECTO DE SOFTWARE',
    'DISEÑADOR UX/UI',
    'DISEÑADOR DE BASES DE DATOS SQL',
    'DIRECTOR DE PROYECTOS',
    'DESARROLLADOR FULLSTACK',
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribir el texto
        setText((prev) => currentRole.substring(0, prev.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000); // Espera 1s antes de borrar
        }
      } else {
        // Borrar el texto
        setText((prev) => currentRole.substring(0, prev.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cambiar al siguiente rol
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRoleIndex, roles]);

  const handleNavigationClick = (id) => {
    setMenuOpen(false); // Cierra el menú si está abierto
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='principal-content'>
        <header id='header' className='header'>
          <div className='nav-logo'>
            <img src={logo} alt="Logo" onClick={() => handleNavigationClick('home')} />
          </div>
          <div
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`nav-navigation ${menuOpen ? 'open' : ''}`}>
            <nav id='navbar' className='navbar'>
              <a onClick={() => handleNavigationClick('home')}>Inicio</a>
              <a onClick={() => handleNavigationClick('proyects')}>Proyectos</a>
              <a onClick={() => handleNavigationClick('about')}>Acerca de</a>
              <a onClick={() => handleNavigationClick('contact')}>Contacto</a>
            </nav>
          </div>
          <div className='nav-social'>
            <div className='github-icon'>
              <a href="https://github.com/ouroboros1599" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>
            </div>
            <div className='linkedin-icon'>
              <a href="https://www.linkedin.com/in/jesuscastillomorales1599/" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </div>
          </div>
        </header>
        <div className='main-content'>
          <section id='home' className='home'>
            <div className='presentation'>
              <div className='presentation-text'>
                <p className='text-presentation'>Hola a todos 👋</p>
                <p className='text-presentation'>Soy Jesús Castillo</p>
                <div className='proyect-role'>
                  <p className="typewriter">{text}</p>
                </div>
                <p className='presentation-subtext'>+4 años de experiencia</p>
                <p className="presentation-text">Ingeniero Civil Informático</p>
              </div>
              <div className='presentation-card'>
                <img src={me} alt="me" className='me-img' />
              </div>
            </div>
          </section>
          <section id='proyects' className='proyects'>
            <div className="proyects">
              <div className="grid">

                <div className="proyect-card">
                  <h3 className="proyect-title">Gestión de paradas mayores</h3>
                  <p className="proyect-description">
                    Diseñé y lideré la implementación de un sistema de gestión de paradas mayores para SMEC Chile,
                    asegurando un desarrollo eficiente y alineado con los objetivos estratégicos de la organización.
                    Durante la planificación, implementé buenas prácticas de gestión y utilicé el enfoque estructurado del PMBOK para las etapas de monitoreo y control.
                  </p>
                  <p className='tech-title'>Tecnologías</p>
                  <div className="technologies">
                    <div className='laravel-icon'>
                      <FontAwesomeIcon icon={['fab', 'laravel']} size="2x" />
                    </div>
                    <div className='github-icon'>
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </div>
                    <div className='vue-icon'>
                      <FontAwesomeIcon icon={['fab', 'vuejs']} size="2x" />
                    </div>
                    <div className='figma-icon'>
                      <FontAwesomeIcon icon={['fab', 'figma']} size="2x" />
                    </div>
                    <div className='mysql-icon'>
                      <FontAwesomeIcon icon={['fas', 'database']} size="2x" />
                    </div>
                  </div>
                </div>

                <div className="proyect-card">
                  <h3 className="proyect-title">Videojuego</h3>
                  <p className="proyect-description">
                    Planifiqué y ejecuté el desarrollo de un videojuego enfocado en la convivencia escolar para el Colegio Dr. Adriano Machado Pardo.
                    Durante la planificación, implementé buenas prácticas de gestión y utilicé el enfoque estructurado del PMBOK para las etapas de monitoreo y control.
                  </p>
                  <p className='tech-title'>Tecnologías</p>
                  <div className="technologies">
                    <div className='flask-icon'>
                      <FontAwesomeIcon icon={['fas', 'flask']} size="2x" />
                    </div>
                    <div className='unity-icon'>
                      <FontAwesomeIcon icon={['fas', 'cube']} size="2x" />
                    </div>
                    <div className='react-icon'>
                      <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
                    </div>
                    <div className='git-icon'>
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </div>
                    <div className='mysql-icon'>
                      <FontAwesomeIcon icon={['fas', 'database']} size="2x" />
                    </div>
                  </div>
                </div>

                <div className="proyect-card">
                  <h3 className="proyect-title">Modelo predictivo</h3>
                  <p className="proyect-description">
                    Desarrollé un modelo predictivo utilizando diferentes tecnologias logrando obtener un 99% de precisión.
                    Este proyecto destaca por el uso de metodologias robustas en aprendizaje automatico para resultados altamente precisos.
                  </p>
                  <p className='tech-title'>Tecnologías</p>
                  <div className="technologies">
                    <div className='python-icon'>
                      <FontAwesomeIcon icon={['fab', 'python']} size="2x" />
                    </div>
                    <div className='numpy-icon'>
                      <FontAwesomeIcon icon={['fas', 'square-root-alt']} size="2x" />
                    </div>
                    <div className='matplotlib-icon'>
                      <FontAwesomeIcon icon={['fas', 'chart-line']} size="2x" />
                    </div>
                    <div className='seaborn-icon'>
                      <FontAwesomeIcon icon={['fas', 'chart-bar']} size="2x" />
                    </div>
                  </div>
                </div>

                <div className="proyect-card">
                  <h3 className="proyect-title">Bot Scrapper</h3>
                  <p className="proyect-description">
                    Desarrollé un bot que hace scrapping a una web inmobiliaria española.
                    Este proyecto destaca por el uso de metodologias robustas en aprendizaje automatico para resultados altamente precisos.
                  </p>
                  <p className='tech-title'>Tecnologías</p>
                  <div className="technologies">
                    <div className='python-icon'>
                      <FontAwesomeIcon icon={['fab', 'python']} size="2x" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <section id='about' className='about'>
            <h1>about</h1>
          </section>
          <section id='contact' className='contact'>
            <h1>contact</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
