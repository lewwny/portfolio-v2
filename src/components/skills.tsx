import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import skillsData from '../data/skills/skills.json';
import '../styles/skills.css';

interface Skill {
    name: string;
    logo: string;
    description: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => {
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
                    <img src={skill.logo} alt={skill.name} className="skill_logo" />
                </div>
                <div className="card_back">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
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
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
}

export default Skills;