import React from "react";
import "../css/resume.css";
import Sitenav from "./sitenav";
import PDFresume from "../pdf/ErnestChiuResume.pdf";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { styler } from "popmotion";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

function Resume() {
  return (
    <StyleRoot>
      <Sitenav page={"Resume"} />
      <div style={styles.fadeInUp}>
        <div className="Resume">
          <iframe
            title="Resume"
            style={{ width: "50%", height: "1000px", margin: "0% 25vw" }}
            src={PDFresume}
          />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Resume;
