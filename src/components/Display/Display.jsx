import React from 'react';
import './Display.css'
const Display = ({language, theme}) => {
    return (
        <div className={ theme ? 'Display-dark' : 'Display'}>
            <div className='Display-container'>
                <div className='Display-dev'>
                    <img src="/Me2.jpg" alt="" className='Display-dev-photo' />
                    <div className='Display-dev-container'>
                        <h1 className='Display-dev-name'>{language ? "Hi! my name is Evelio Medina" : "¡Hola! mi nombre es Evelio Medina"}</h1>
                        <h2 className='Display-dev-title'>{language ? "I'm a Full-Stack Developer and Psychologist" : "Soy desarrollador Full-Stack y Psicologo"}</h2>
                        <p className='Display-dev-text'>{language ? "I welcome you to my portfolio, here you can find a compilation of my projects and a resume of my technical, soft and complementary skills, i hope you enjoy your stay and if you like my profile..." : "te doy la bienvenida a mi portafolio, aca podras encontrar mis proyectos y un resumen de mis habilidades tecnicas, blandas y complementarias espero tengas una estadia estupenda y si mi perfil es de tu agrado..."}
                        </p>
                        <a className='Whatsapp-link' href='https://api.whatsapp.com/send?phone=584145765691' target="_blank">
                            <button className='Contact-button'>{language ? "Contact me!" : "¡Contactame!"}</button>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Display;