import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I am Selcuk Emir Avci and I enjoy working with technology. I am currently enrolled in University of Calgary, pursuing a Bachelor of Applied Science in Computer Science and minoring in Data Science and Management and Society. I am a person who sets high-goals and pursues them no matter what. I consider myself as creative, hard-worker and passionate. My fast problem solving skills and vision is always helping me to succeed in any field!. My goal is, creating accessible solutions to make daily life easier! My main focus and interest area is Blockchain Development and FinTech Industries. However I am open for any job inquries!",

    highlights: {
      bullets: [
        "Product Management",
        "Client Relationship Management",
        "Analysis and Design",
        "Web3.0 and Blockchain Development",
        "Custom Software Development",
        "Project Management",
        "Data Analysis and Vizualization",
        "FinTech Advisory",
      ],
      heading: "My Services:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Who am I?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a href="selcukemiravci.pdf" download="Selcuk Emir Avci.pdf">
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
