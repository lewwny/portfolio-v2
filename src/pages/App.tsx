import '../styles/App.css'
import Navbar from '../components/navbar'
import Education from '../components/education';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { useTranslation } from 'react-i18next';
import {useState} from 'react';

function App() {
	//setter
	const { t } = useTranslation();
	const [internship, setInternship] = useState(true);
	const [work, setWork] = useState(false);

	//handlers
	const toggleInternship = () => {
		setInternship(!internship);
	};
	const toggleWork = () => {
		setWork(!work);
	};
	//render
	return (
		<div className="app">
			<section id="hero"></section>
			<Navbar />
			<div className="hero">
				<h1>{t("hero.title")}</h1>
				<h3>{t("hero.subtitle")}</h3>
				<p>{t("hero.description")}</p>
			</div>
			<div className="work">
				<ul>
					{internship &&
						<li>
							<div className="green_circle"></div>
							{t("hero.internship")}
						</li>
					}
					{work &&
						<li>
							<div className="green_circle"></div>
							{t("hero.work")}
						</li>
					}
					{!internship &&
						<li>
							<div className="red_circle"></div>
							{t("hero.no_internship")}
							</li>
					}
					{!work &&
						<li>
							<div className="red_circle"></div>
							{t("hero.no_work")}
						</li>
					}
				</ul>
			</div>
			<div className="network">
				<ul>
					<li>
						<a href="www.linkedin.com/in/leny-garcia-a95488340" target="_blank" rel="noopener noreferrer">
							<img src ="/linkedin.png" alt="linkedin" />
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://www.github.com/lewwny" target="_blank" rel="noopener noreferrer">
						<img src ="/github.png" alt="github" />
							GitHub
						</a>
					</li>
					<li>
						<a href="mailto:lenygarcia0302@gmail.com">
						<img src ="/mail.jpg" alt="mail" />
							Mail
						</a>
					</li>
				</ul>
			</div>
			<div className="line"></div>
			<section id="projects"></section>
			<Projects />
			<div className="line"></div>
			<section id="education"></section>
			<Education />
			<div className="line"></div>
			<section id="skills"></section>
			<Skills />
			<div className="line"></div>
			<footer>
				<p className='footer'>© 2026 Leny Garcia. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default App
