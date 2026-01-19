import '../styles/education.css';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    return (
        <div className="education">
            <h1 className="section_title">{t("education.title")}</h1>
            <p className="section_description">{t("education.description")}</p>
        </div>
    );
}

export default Education;