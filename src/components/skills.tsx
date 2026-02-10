import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import skillsData from '../data/skills/skills.json';
import '../styles/skills.css';

interface Skill {
    key: string;
    logo: string;
}

const SkillCard = ({ skill, t }: { skill: Skill; t: any }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div 
            className={`skill_card ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={handleFlip}
        >
            <div className="card_inner">
                <div className="card_front">
                    <img src={skill.logo} alt={t(`skillsList.${skill.key}.name`)} className="skill_logo" />
                </div>
                <div className="card_back">
                    <h3>{t(`skillsList.${skill.key}.name`)}</h3>
                    <p>{t(`skillsList.${skill.key}.description`)}</p>
                </div>
            </div>
        </div>
    );
};

export function Skills() {
    const { t } = useTranslation();
    const skills = skillsData as Skill[];

    return (
        <section className="skills">
            <h1 className="section_title">{t("skills.title")}</h1>
            <p className="section_description">{t("skills.description")}</p>
            <div className="skills_container">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} t={t} />
                ))}
            </div>
        </section>
    );
}

export default Skills;