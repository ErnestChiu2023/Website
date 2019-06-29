import React from 'react';
import '../css/about.css';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Arrow from '../images/up.svg';
import ReactSVG from 'react-svg';
import posed from 'react-pose';
import { Link } from 'react-router-dom';
import Sitenav from './sitenav';

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
  },
  hover: {
    scale: 1.4,
  }
});


function About(){
    return(
          <StyleRoot>
            <Sitenav page={"About"}/>
            <div style={styles.fadeInUp} >
             <div className="About about_style">
                <Link to="/">
                  <Box className="Back">
                    <ReactSVG src={Arrow} 
                      beforeInjection={svg => {
                        svg.classList.add('arrow')
                        svg.setAttribute('style', 'width: 70px; height: 50px')
                      }}
                      />
                  </Box>
                </Link>
               
                <h1 id="title">About me</h1>
              </div>
            </div>
          </StyleRoot>
    )
}

export default About;