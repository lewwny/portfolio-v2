import '../styles/App.css'
import Navbar from '../components/navbar'
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
							Available for internship.
						</li>
					}
					{work &&
						<li>
							<div className="green_circle"></div>
							Open to work opportunities.
						</li>
					}
					{!internship &&
						<li>
							<div className="red_circle"></div>
							Not available for internship.
							</li>
					}
					{!work &&
						<li>
							<div className="red_circle"></div>
							Not open to work opportunities.
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
		</div>
	)
}

export default App
