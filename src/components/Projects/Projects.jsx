import React from 'react';
import './Projects.css'
import { projects, projectsENG } from '../Constants/ProjectData'

const Projects = ({language, theme}) => {
    return (
        <div className={theme ? 'Projects-dark' :'Projects'} id='Projects'>
            <h2 className='Projects-title'>{language ? "Projects" : "Proyectos"}</h2>
            <div className='Projects-container'>
                {
                    language ?
                    projectsENG.map((project) => (
                        <div className={theme ? 'Card-dark': 'Card'}>
                            <img src={project.Image} alt="Project image" />
                            <h2>{project.Title}</h2>
                            <p>{project.Description}</p>
                            <h3>Technologies</h3>
                            <div className='Tags-container'>
                                {project.Tags.map((tags) => (
                                    <h3>{tags}</h3>
                                ))}
                            </div>
                            <div className='Card-button-container'>
                                <a href={project.Source} target="_blank"><button className='Card-button'>Code</button></a>
                                <a href={project.Visit} target="_blank"><button className='Card-button'>Visit</button></a>
                            </div>
                        </div>
                    ))
                    :
                    projects.map((project) => (
                        <div className={theme ? 'Card-dark': 'Card'}>
                            <img src={project.Image} alt="Project image" />
                            <h2>{project.Title}</h2>
                            <p>{project.Description}</p>
                            <h3>Tecnologias</h3>
                            <div className='Tags-container'>
                                {project.Tags.map((tags) => (
                                    <h3>{tags}</h3>
                                ))}
                            </div>
                            <div className='Card-button-container'>
                                <a href={project.Source} target="_blank"><button className='Card-button'>Codigo</button></a>
                                <a href={project.Visit} target="_blank"><button className='Card-button'>Visitar</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Projects;