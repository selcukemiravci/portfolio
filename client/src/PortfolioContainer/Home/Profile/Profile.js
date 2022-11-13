import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            {/* <div className="colz-icon">
              <a href="https://www.linkedin.com/in/selcukemiravci/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.twitter.com/selcukemiravci/">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.github.com/selcukemiravci/">
                <i className="fa fa-github-square"></i>
              </a>
            </div> */}
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I am <span className="highlighted-text"> Emir</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Computer Science Student 💻",
                    1000,
                    "Entrepreneur 🌐",
                    1000,
                    "Software Developer 💻",
                    1000,
                    "Blockchain Enthusiast ₿",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Create accessible solutions to make daily life easier!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Contact Me{" "}
            </button>
            <a href="selcukemiravci.pdf" download="Selcuk Emir Avci.pdf">
              <button className="btn highlighted-btn"> Download CV </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
