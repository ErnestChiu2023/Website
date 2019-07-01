import React from "react";
import "../css/about.css";
import Sitenav from "./sitenav";
import Zoom from "react-reveal/Zoom";
import "../css/we.css";

function WorkExperience() {
  return (
    <div>
      <Sitenav page={"Work Experience"} />
      <Zoom left>
        <div className="Jana">
          <h2>Jana Technology</h2>
        </div>
      </Zoom>
      <Zoom right>
        <div className="Placeholder">
          <h2>Coming Soon</h2>
        </div>
      </Zoom>
      <Zoom left>
        <div className="Placeholder">
          <h2>Coming Soon</h2>
        </div>
      </Zoom>
      <Zoom right>
        <div className="Placeholder">
          <h2>Coming Soon</h2>
        </div>
      </Zoom>
      <Zoom left>
        <div className="Placeholder">
          <h2>Coming Soon</h2>
        </div>
      </Zoom>
      <Zoom right>
        <div className="Placeholder">
          <h2>Coming Soon</h2>
        </div>
      </Zoom>
    </div>
  );
}

export default WorkExperience;
