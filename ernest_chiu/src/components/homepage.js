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
                    typeSpeed={40}
                    showCursor={false}
                />
            </span>
            <br/>
            {"A Computer Science Student at the University of Waterloo"}
           
        </div>
    )
}

export default Homepage;