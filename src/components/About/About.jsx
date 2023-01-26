import React from 'react';
import './About.css'
const About = ({language, theme}) => {
    return (
        <div className={theme ? 'About-dark' : 'About'} id='About'>
            <div className='About-container'>
                <h2>{language ? "About me" : "Acerca de mi"}</h2>
                <p> {language ? "In addition to being a full-stack programmer, I am a psychologist and I have had experience working in the organizational and occupational areas, serving 15 companies from different sectors, previously i studied electronic engineering in computing where I had my first contact with programming which I loved passionately, due to health problems I had to change careers, however, i decided to resume my programming studies with a lot of discipline, since I always wanted to work in the area." : "Ademas de programador full-stack, soy psicologo y he tenido experiencia trabajando en las areas organizacional y ocupacional, atendiendo 15 empresas de diferentes rubros, anteriormente estudie ingenieria electronica en computación donde tuve mi primer contacto con la programación la cual ame con pasión, por problemas de salud tuve que cambiar de carrera, sin embargo, decidi retomar mis estudios de programación con mucha disciplina,  ya que siempre quize trabajar en el area."}
                </p>
                <h2>{language ? "Soft skills" : "Habilidades blandas"}</h2>
                <ul className='Skills'>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Discipline" : "Disciplina"}</li>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Organization" : "Organización"}</li>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Assertiveness" : "Asertividad"}</li>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Communication skills" : "Habildidades de comunicación"}</li>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Team work" : "Trabajo en equipo"}</li>
                    <li className={theme ? 'Skills-elements-dark' :'Skills-elements'}>{language ? "Time management" : "Gestion del tiempo"}</li>
                </ul>
            </div>
        </div>
    );
};

export default About;