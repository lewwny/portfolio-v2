import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';

// 1. On définit le type de la prop qu'on attend
interface NavbarProps {
    onOpenContact: () => void;
}

// 2. On récupère la prop dans le composant
function Navbar({ onOpenContact }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-logo"><a href="#hero">MyApp</a></div>
            <ul className="navbar-links">
                <li><a href="#projects">{t('nav.projects')}</a></li>
                <li><a href="#education">{t("nav.education")}</a></li>
                <li><a href="#skills">{t("nav.skills")}</a></li>
                
                {/* 3. On ajoute le onClick ici */}
                {/* J'ai ajouté style={{cursor: 'pointer'}} pour que la souris change au survol */}
                <li 
                    className="contact" 
                    onClick={onOpenContact} 
                    style={{ cursor: 'pointer' }} 
                >
                    {t("nav.contact")}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;