import React from 'react';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Connect from './connect';
import WorkExperience from './we';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/pages.css';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

function Pages(){
    return(
        <StyleRoot>
            <div style={styles.fadeInUp}>
                <div id="pages_background">
                    <Switch>
                        <Route path='/pages/about' component={About}/>
                        <Route path='/pages/resume' component={Resume}/>
                        <Route path='/pages/projects' component={Projects}/>
                        <Route path='/pages/connect' component={Connect}/>
                        <Route path='/pages/we' component={WorkExperience}/>
                    </Switch>
                </div>
            </div>
        </StyleRoot>
    )
}

export default Pages;