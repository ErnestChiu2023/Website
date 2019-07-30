import React from "react";
import Typed from "react-typed";
import "../css/homepage.css";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Sitenav from "./sitenav";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

function Homepage() {
  return (
    <StyleRoot>
      <div style={styles.fadeInUp}>
        <div className="homepage home">
          <span className="top_text">Hello World, I'm</span>

          <span className="name">
            <Typed
              strings={["Ernest Chiu!"]}
              typeSpeed={100}
              showCursor={true}
              startDelay={0}
            />
          </span>

          <span className="bottom_text">
            A Computer Science undergraduate at the University of Waterloo
          </span>
        </div>
        <Sitenav page={"Home"} />
      </div>
    </StyleRoot>
  );
}

export default Homepage;
