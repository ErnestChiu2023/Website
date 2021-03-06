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

      <div className="container animated slideInUp">
        <a href={PDF}>
          <div className="download_button hvr-grow">
            <span>Download PDF</span>
            <img src={downloadPNG} className="download" />
          </div>
        </a>
        <div className="image">
          <img src={ResumeIMG} className="Resume" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
