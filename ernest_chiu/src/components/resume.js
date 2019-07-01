import React from "react";
import "../css/resume.css";
import Sitenav from "./sitenav";
import PDFresume from "../pdf/ErnestChiuResume.pdf";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: "x .7s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

function Resume() {
  return (
    <StyleRoot>
      <Sitenav page={"Resume"} />
      <div style={styles.fadeInUp} className="animation">
        <div className="Resume">
          <iframe
            title="Resume"
            style={{ width: "50%", height: "1200px", margin: "0% 25vw" }}
            src={PDFresume}
          />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Resume;
