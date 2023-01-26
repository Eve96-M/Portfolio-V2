import React from 'react';
import './Technologies.css'
const Technologies = ({language, theme}) => {
    return (
        <div className={theme ? 'Technologies-dark' : 'Technologies'} id='Technologies'>
            <div className='Technologies-container'>
                <h2>{language ? "Technologies" : "Tecnologias"}</h2>
                <ul className='Technologies-elements'>
                    <li><img src="/Reactjs.svg" alt="ReactJS" className={theme ? 'Dark-filter-image' : 'Light-filter-image'}/><br /><span className='Title-accent'>Front End</span><br />
                        { language ? "Knowledge of ": "Conocimientos de"} React.Js,<br /> HTML5, CSS, JS
                    </li>
                    <li><img src="/Nodejs.svg" alt="NodeJS" className={theme ? 'Dark-filter-image' : 'Light-filter-image'} /><br /><span className='Title-accent'>Back End</span><br />
                    { language ? "Knowledge of ": "Conocimientos de"} Node.JS
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Technologies;