import React from 'react';
import '../css/about.css';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInUp: {
    animation: 'x .9s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

function About(){
    return(
          <StyleRoot>
             <div className="About about_style">
                <div style={styles.fadeInUp} >
                  
                </div>
              </div>
          </StyleRoot>
    )
}

export default About;