import '../styles/skills.css';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    return (
        <div className="skills">
            <h1 className="section_title">{t("skills.title")}</h1>
            <p className="section_description">{t("skills.description")}</p>
        </div>
    );
}

export default Skills;