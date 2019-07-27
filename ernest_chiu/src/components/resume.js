import React from "react";
import "../css/resume.css";
import Sitenav from "./sitenav";
import ResumeIMG from "../images/ErnestChiuResume.jpg";
import PDF from "../pdf/ErnestChiuResume.pdf";
import downloadPNG from "../images/download.png";
import "animate.css";
import "hover.css";

function Resume() {
  return (
    <div>
      <Sitenav page={"Resume"} />

      <div className="container">
        <a href={PDF}>
          <div className="download_button hvr-grow">
            <span>Download PDF</span>
            <img src={downloadPNG} className="download" />
          </div>
        </a>
        <img src={ResumeIMG} className="Resume animated slideInUp" />
      </div>
    </div>
  );
}

export default Resume;
