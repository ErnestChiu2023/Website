import React from "react";
import "./css/App.css";
import Homepage from "./components/homepage";
import Particles from "react-particles-js";
import WebFont from "webfontloader";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";
import WorkExperience from "./components/we";

WebFont.load({
  google: {
    families: ["Karla", "Nanum Gothic", "Open Sans"]
  }
});

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <div className="background">
          <Particles
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: false,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
        <Route exact path="/" component={Homepage} />
        <Switch>
          <Route path="/pages/About" component={About} />
          <Route path="/pages/Resume" component={Resume} />
          <Route path="/pages/Projects" component={Projects} />
          <Route path="/pages/Work Experience" component={WorkExperience} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
