import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';

function Navbar() {
	const { t } = useTranslation();

	return (
		<nav className="navbar">
		<div className="navbar-logo">MyApp</div>
		<ul className="navbar-links">
			<li><a href="#projects">{t('nav.projects')}</a></li>
			<li><a href="#education">{t("nav.education")}</a></li>
			<li><a href="#skills">{t("nav.skills")}</a></li>
			<li className="contact">{t("nav.contact")}</li>
		</ul>
		</nav>
	);
}

export default Navbar;