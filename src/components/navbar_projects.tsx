import '../styles/navbar_projects.css'
import { useState } from 'react';

interface NavbarProjectsProps {
    onSelectionChange: (type: string) => void;
}

function NavbarProjects({ onSelectionChange }: NavbarProjectsProps) {
    //state
    const [isAISelected, setIsAISelected] = useState(true);
    const [isWebSelected, setIsWebSelected] = useState(false);
    const [style_ai, setStyleAI] = useState('elt_selected');
    const [style_web, setStyleWeb] = useState('elt');

    //handlers
    const handleAISelection = () => {
        if (isAISelected) return;
        console.log("AI selected");
        setIsAISelected(true);
        setIsWebSelected(false);
        setStyleAI('elt_selected');
        setStyleWeb('elt');
        onSelectionChange('AI');
    };

    const handleWebSelection = () => {
        if (isWebSelected) return;
        console.log("Web selected");
        setIsAISelected(false);
        setIsWebSelected(true);
        setStyleAI('elt');
        setStyleWeb('elt_selected');
        onSelectionChange('Web');
    };

    return (
        <nav className="navbar-projects">
            <div className={style_ai} onClick={handleAISelection}><p>AI</p></div>
            <div className='column'></div>
            <div className={style_web} onClick={handleWebSelection}><p>Web</p></div>
        </nav>
    );
}

export default NavbarProjects;