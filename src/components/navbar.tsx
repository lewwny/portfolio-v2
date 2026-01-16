import '../styles/navbar.css'

function Navbar() {
  return (
	<nav className="navbar">
	  <div className="navbar-logo">MyApp</div>
	  <ul className="navbar-links">
		<li>Projects</li>
		<li>Education</li>
		<li>Skills</li>
		<li className="contact">Contact</li>
	  </ul>
	</nav>
  );
}

export default Navbar;