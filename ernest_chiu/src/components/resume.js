import React from "react";
import "../css/resume.css";
import Sitenav from "./sitenav";
import ResumeIMG from "../images/ErnestChiuResume.jpg";
import PDF from "../pdf/ErnestChiuResume.pdf";
import downloadPNG from "../images/download.png";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "hover.css";

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
        <div className="container">
          <a href={PDF}>
            <div className="download_button hvr-grow">
              <span>Downlaod PDF</span>
              <img src={downloadPNG} className="download" />
            </div>
          </a>
          <img src={ResumeIMG} />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Resume;
