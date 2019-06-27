import React from 'react';
import Typed from 'react-typed';
import '../css/homepage.css';

function Homepage(){
    return(
        <div className="homepage home">
            {"Hello World, I'm"}
            <br/>
            <span className="name">
                <Typed 
                    strings={['Ernest Chiu!']}
                    typeSpeed={60}
                    showCursor={false}
                    startDelay={500}
                />
            </span>
            <br/>
            {"A Computer Science Student at the University of Waterloo"}
           
        </div>
    )
}

export default Homepage;