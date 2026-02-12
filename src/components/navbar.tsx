import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    onOpenContact: () => void;
}

function Navbar({ onOpenContact }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-logo"><a href="#hero"><img src="/logo.png" alt="Logo" className="logo-img"/></a></div>
            <ul className="navbar-links">
                <li><a href="#projects">{t('nav.projects')}</a></li>
                <li><a href="#education">{t("nav.education")}</a></li>
                <li><a href="#skills">{t("nav.skills")}</a></li>
                
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