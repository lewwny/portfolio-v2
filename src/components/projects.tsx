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
            </div>
        </div>
    );
}

export default Projects;