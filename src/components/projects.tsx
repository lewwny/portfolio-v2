import '../styles/projects.css';
import ai_projects from '../data/projects/ai_projects.json';
import web_projects from '../data/projects/web_projects.json';
import NavbarProjects from './navbar_projects';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Projects() {
    const { t } = useTranslation();
    const [displayType, setDisplayType] = useState('AI');


    return (
        <div className="projects">
            <h1 className="section_title">{t("projects.title")}</h1>
            <p className="section_description">{t("projects.description")}</p>
            <div className="projects_section">
                <NavbarProjects onSelectionChange={(type) => setDisplayType(type)}/>
                <div className="projects_container">
                    {displayType === 'AI' && ai_projects.map((project, index) => (
                        <div key={index} className="project_card">
                            <img src={project.image} alt={project.title} className="project_image" />
                            <h2 className="project_title">{project.title}</h2>
                            <div className="project_link_container">
                                <img src="/github.png" alt="github" className="project_link_img" />
                                <a href={project.link} className="project_link" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </div>
                            <p className="project_description">{project.description}</p>
                        </div>
                    ))}
                    {displayType === 'Web' && web_projects.map((project, index) => (
                        <div key={index} className="project_card">
                            <img src={project.image} alt={project.title} className="project_image" />
                            <h2 className="project_title">{project.title}</h2>
                            <div className="project_link_container">
                                <img src="/github.png" alt="github" className="project_link_img" />
                                <a href={project.link} className="project_link" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </div>
                            <p className="project_description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;