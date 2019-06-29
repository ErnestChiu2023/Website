import React from 'react';
import '../css/about.css';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Arrow from '../images/up.svg';
import ReactSVG from 'react-svg';
import posed from 'react-pose';


const styles = {
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}


const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
});




function About(){
    return(
          <StyleRoot>
            <div style={styles.fadeInUp} >
             <div className="About about_style">
                <Box className="Box">
                <ReactSVG src={Arrow} 
                  beforeInjection={svg => {
                    svg.classList.add('arrow')
                    svg.setAttribute('style', 'width: 150px; height: 125px')
                  }}
                  />
                </Box>
               
                <h1 id="title">About me</h1>
              </div>
            </div>
          </StyleRoot>
    )
}

export default About;