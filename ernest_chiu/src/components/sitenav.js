import React from 'react';
import '../css/component.css';
import '../css/sitenav.css';
import { Link } from 'react-router-dom';

function Sitenav(){
    return(
        <div>
            <nav className="cl-effect-5" id="nav_bar">
                <Link to="/about"><span data-hover="About">About</span></Link>
                <Link to="/resume"><span data-hover="Resume">Resume</span></Link>
                <Link to="/we"><span data-hover="Work Experience">Work Experience</span></Link>
                <Link to="/projects"><span data-hover="Projects">Projects</span></Link>
                <Link to="/connect"><span data-hover="Connect">Connect</span></Link>
            </nav>
        </div>
    )
}

export default Sitenav;