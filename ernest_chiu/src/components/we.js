import React from "react";
import "../css/about.css";
import Sitenav from "./sitenav";
import Zoom from "react-reveal/Zoom";
import "../css/we.css";

function WorkExperience() {
  return (
    <div>
      <Sitenav page={"Work Experience"} />
      <Zoom top>
        <div className="WorkExperience">
          <h1>Jana Technology</h1>
        </div>
      </Zoom>
    </div>
  );
}

export default WorkExperience;
