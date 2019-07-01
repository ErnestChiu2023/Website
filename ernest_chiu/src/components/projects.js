import React from "react";
import "../css/about.css";
import Sitenav from "./sitenav";
import "../css/projects.css";
import Everydayimg from "../images/EverydayApp.png";
import Accomplishlyimg from "../images/ToDoApp.png";
import posed from "react-pose";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  zoomIn: {
    animation: "x .7s",
    animationName: Radium.keyframes(zoomIn, "zoomIn")
  }
};

function EverydayApp() {
  window.location.href = "https://github.com/ErnestChiu2023/everydayapp";
}

function ToDoApp() {
  window.location.href = "https://github.com/ErnestChiu2023/todoApp";
}

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  }
});

function Projects() {
  return (
    <StyleRoot>
      <Sitenav page={"Projects"} />
      <div className="Projects" style={styles.zoomIn}>
        <Box>
          <div className="ProjectBox" onClick={EverydayApp}>
            <h3>Everyday App</h3>
            <p>
              An app for managing daily tasks and information made using React
            </p>
            <p>
              <span>JavaScript</span>
              <span>React</span>
              <span>React Router</span>
              <span>JSX</span>
              <span>Axios.JS</span>
            </p>
            <img src={Everydayimg} className="screenshot" />
          </div>
        </Box>
        <Box>
          <div className="ProjectBox" onClick={ToDoApp}>
            <h3>Accomplishly</h3>
            <p>
              A simple to do app created using Node.JS, ExpressJS, and mongoDB
            </p>
            <p>
              <span>JavaScript</span>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>mongoDB</span>
            </p>
            <img src={Accomplishlyimg} className="screenshot" />
          </div>
        </Box>
      </div>
    </StyleRoot>
  );
}

export default Projects;
