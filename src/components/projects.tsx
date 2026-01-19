import '../styles/projects.css';
import ai_projects from '../data/projects/ai_projects.json';
import web_projects from '../data/projects/web_projects.json';
import NavbarProjects from './navbar_projects';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
    return (
        <div className="projects">
            <h1 className="section_title">{t("projects.title")}</h1>
            <p className="section_description">{t("projects.description")}</p>
            <div className="projects_section">
                <NavbarProjects />
            </div>
        </div>
    );
}

export default Projects;