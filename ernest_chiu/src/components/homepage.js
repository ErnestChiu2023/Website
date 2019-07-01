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
          {"Hello World, I'm"}
          <br />
          <span className="name">
            <Typed
              strings={["Ernest Chiu!"]}
              typeSpeed={60}
              showCursor={false}
              startDelay={500}
            />
          </span>
          <br />
          {"A Computer Science undergraduate at the University of Waterloo"}
        </div>
        <Sitenav />
      </div>
    </StyleRoot>
  );
}

export default Homepage;
