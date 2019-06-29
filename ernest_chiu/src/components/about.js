import React from "react";
import "../css/about.css";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Sitenav from "./sitenav";
import { SocialIcon } from "react-social-icons";
import Placeholder from "../images/placeholder.jpeg";

const styles = {
  fadeInUp: {
    animation: "x .7s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

function About() {
  return (
    <StyleRoot>
      <Sitenav page={"About"} />
      <div style={styles.fadeInUp}>
        <div className="About about_style">
          <div className="intro">
            <h3>Nice to meet you! 👋</h3>
            <p>
              My name is <span className="nameintro">Ernest Chiu</span> and I'm
              an aspiring <span className="cs">Computer Scientist</span>{" "}
              interested <br />
              in <span className="sd">Software Development</span> 💻.To
              accomplish my goals, I'm always actively looking
              <br />
              for new opportunities to learn and expand my knowledge in the
              field!
              <br />
              <br />
              On my free time, I like to hang out with friends to play{" "}
              <span className="pool">pool</span>🎱 or{" "}
              <span className="bowling">bowling</span>🎳. <br />
              Other times, I like to stay home to code, read, and play video
              games! <br />
              <br />
              Feel free to contact me! Whether it's a{" "}
              <span className="newproject">new project</span> or <br />
              you just want to <span className="hangout">hang out</span>☕
              contact me through the links below.🙂
            </p>
            <div className="social">
              <SocialIcon
                url="http://www.linkedin.com/in/ernestchiu2023"
                network="linkedin"
                style={{ height: 80, width: 80 }}
              />
              <SocialIcon
                url="https://github.com/ErnestChiu2023"
                network="github"
                style={{ height: 80, width: 80 }}
                bgColor="black"
              />
              <SocialIcon
                url="mailto: ernestchiu@hotmail.ca"
                network="email"
                style={{ height: 80, width: 80 }}
                bgColor="#FF5353"
              />
              <SocialIcon
                url="https://www.facebook.com/ernest.chiu.9"
                network="facebook"
                style={{ height: 80, width: 80 }}
              />
              <SocialIcon
                url="https://www.instagram.com/chiu.ernest/"
                network="instagram"
                style={{ height: 80, width: 80 }}
              />
            </div>
          </div>
          <div className="img">
            <img src={Placeholder} alt="A placeholder image" />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default About;
