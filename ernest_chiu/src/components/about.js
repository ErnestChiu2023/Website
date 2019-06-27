import React from 'react';
import '../css/about.css';
import { bounce, lightSpeedIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s', 
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  lightSpeedIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  }
}

function About(){
    return(
        <div className="About">
          <StyleRoot>
              <div style={styles.lightSpeedIn}>
                <h1>About</h1>
              </div>
          </StyleRoot>
        </div>
    )
}

export default About;