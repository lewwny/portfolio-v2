import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';

function Navbar() {
	const { t } = useTranslation();

	return (
		<nav className="navbar">
		<div className="navbar-logo">MyApp</div>
		<ul className="navbar-links">
			<li>{t('nav.projects')}</li>
			<li>{t("nav.education")}</li>
			<li>{t("nav.skills")}</li>
			<li className="contact">{t("nav.contact")}</li>
		</ul>
		</nav>
	);
}

export default Navbar;