import React from "react";
import "../css/about.css";
import image from "../assets/Priyesh.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className="aboutpage-background-color">
        <div className="wrapper">
          <div className="left">
            <img
              src={image}
              alt="user"
              width="100"
            />
            <h4>Priyesh Gangrade</h4>
            <p className="domain">Full Stack Developer</p>
            <p className="location">Chennai, India</p>
            <p className="skills">
              Skills : HTML, CSS, JavaScript, React.js, Vue.js, Node.js,
              Express, MongoDB, TypeScript, Redux
            </p>
          </div>
          <div className="right">
            <div className="info">
              <h3>Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>
                    <a
                      href="mailto:priyeshgangrade786@gmail.com"
                      className="link-color">
                      priyeshgangrade786@gmail.com
                    </a>
                  </p>
                </div>
                <div className="data">
                  <h4>Phone</h4>
                  <p>
                    <a
                      href="tel:8959500854"
                      className="link-color">
                      8959500854
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="projects">
              <h3>Projects</h3>
              <div className="projects_data">
                <div className="data">
                  <h4 className="project-data">
                    TALENT HIRE – JOB PORTAL
                    <span className="website-link">
                      <a
                        href="https://talent-hire-5an4.onrender.com/"
                        className="link-color"
                        target="_blank">
                        • Website
                      </a>
                    </span>
                  </h4>
                  <p>• Implemented user authentication with Auth0.</p>
                  <p>• Developed a job portal using the MEVN stack.</p>
                  <p>
                    • Created a back-end API with Node.js, Express.js, and
                    MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="projects">
              <h3>Resume</h3>
              <div className="projects_data">
                <div className="data">
                  <h4>
                    <span>
                      <a
                        href="https://drive.google.com/file/d/1KbJWRhOZxiWbhxqwEfsuFawFMt5ddisB/view?usp=share_link"
                        target="_blank"
                        className="project-data link-color">
                        • Resume
                      </a>
                    </span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="social_media">
              <ul>
                <li>
                  <a
                    href="https://github.com/PriyeshGangrade26"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      color="#fff"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/priyeshgangrade/"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      color="#fff"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/noISaCYUI4I"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      color="#fff"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { About };
