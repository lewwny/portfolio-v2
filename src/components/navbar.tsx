import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/navbar.css';

interface NavbarProps {
    onOpenContact: () => void;
}

function Navbar({ onOpenContact }: NavbarProps) {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#hero" onClick={closeMenu}>
                    <img src="/logo.png" alt="Logo" className="logo-img"/>
                </a>
            </div>

            <button className="burger-menu" onClick={toggleMenu}>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a href="#projects" onClick={closeMenu}>
                        {t('nav.projects')}
                    </a>
                </li>
                <li>
                    <a href="#education" onClick={closeMenu}>
                        {t("nav.education")}
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={closeMenu}>
                        {t("nav.skills")}
                    </a>
                </li>
                <li 
                    className="contact" 
                    onClick={() => { onOpenContact(); closeMenu(); }} 
                    style={{ cursor: 'pointer' }}
                >
                    {t("nav.contact")}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;