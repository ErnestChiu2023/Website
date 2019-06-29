import React from 'react';
import '../css/about.css'
import Sitenav from './sitenav';

function Projects(){
    return(
        <div className="Projects">
          <Sitenav page={"Projects"}/>
          <h1>Projects</h1>
        </div>
    )
}

export default Projects;