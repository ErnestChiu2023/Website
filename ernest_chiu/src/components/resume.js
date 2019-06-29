import React from 'react';
import '../css/resume.css'
import Sitenav from './sitenav';

function Resume(){
    return(
        <div className="Resume">
          <Sitenav page={"Resume"}/>
          <h1>Resume</h1>
        </div>
    )
}

export default Resume;