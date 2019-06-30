import React from "react";
import "../css/about.css";
import Sitenav from "./sitenav";
import Radium, { StyleRoot } from "radium";
import { fadeInUp } from "react-animations";
import "../css/we.css";

const styles = {
  fadeInUp: {
    animation: "x .7s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

function WorkExperience() {
  return (
    <StyleRoot>
      <Sitenav page={"Work Experience"} />
      <div style={styles.fadeInUp}>
        <div className="WorkExperience">
          <h1>WorkExperience</h1>
        </div>
      </div>
    </StyleRoot>
  );
}

export default WorkExperience;
