import '../styles/navbar_projects.css'
import { useState } from 'react';

function NavbarProjects() {
    const [isAISelected, setIsAISelected] = useState(true);
    const [isWebSelected, setIsWebSelected] = useState(false);


    return (
        <nav className="navbar-projects">
            <div className='elt'><p>AI</p></div>
            <div className='column'></div>
            <div className='elt'><p>Web</p></div>
        </nav>
    );
}

export default NavbarProjects;