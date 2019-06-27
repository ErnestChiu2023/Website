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
        <div className="About">
          <StyleRoot>
              <div style={styles.fadeInUp}>
                <h1>About</h1>
              </div>
          </StyleRoot>
        </div>
    )
}

export default About;