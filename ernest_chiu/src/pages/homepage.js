import React from 'react';
import Typed from 'react-typed';
import '../css/homepage.css';
import '../css/component.css';

function Homepage(){
    return(
        <div className="homepage home">
            {"Hello World, I'm"}
            <br/>
            <span className="name">
                <Typed 
                    strings={['Ernest Chiu!']}
                    typeSpeed={40}
                    showCursor={false}
                />
            </span>
            <br/>
            {"A Computer Science Student at the University of Waterloo"}
            <nav class="cl-effect-5" id="nav_bar_home">
                <a class="About" href="about.html"><span data-hover="About">About</span></a>
                <a class="Resume" href="ErnestChiuResume.pdf"><span data-hover="Resume">Resume</span></a>
                <a class="Work Experience" href="we.html"><span data-hover="Work Experience">Work Experience</span></a>
                <a class="Projects" href="projects.html"><span data-hover="Projects">Projects</span></a>
                <a class="Connect" href="connect.html"><span data-hover="Connect">Connect</span></a>
            </nav>
        </div>
    )
}

export default Homepage;