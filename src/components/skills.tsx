import '../styles/skills.css';
import { useTranslation } from 'react-i18next';
import skills from '../data/skills/skills.json';

function Skills() {
    const { t } = useTranslation();
    return (
        <div className="skills">
            <h1 className="section_title">{t("skills.title")}</h1>
            <p className="section_description">{t("skills.description")}</p>
            <div className="skills_container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill_card">
                        <h2 className="skill_name">{skill.name}</h2>
                        <p className="skill_description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;