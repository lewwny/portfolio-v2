import '../styles/education.css';
import { useTranslation } from 'react-i18next';
import schools from '../data/education/schools.json';

function Education() {
    const { t } = useTranslation();
    return (
        <div className="education">
            <h1 className="section_title">{t("education.title")}</h1>
            <p className="section_description">{t("education.description")}</p>
            <div className="education_container">
                {schools.map((school, index) => (
                    <div key={index} className="education_card">
                        <img src={school.logo} alt={t(`schools.${school.key}.name`)} className="education_logo" />
                        <h2 className="education_name">{t(`schools.${school.key}.name`)}</h2>
                        <h3 className="education_degree">{t(`schools.${school.key}.degree`)}</h3>
                        <p className="education_period">{school.startDate} --- {school.endDate}</p>
                        <p className="education_description">{t(`schools.${school.key}.description`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;