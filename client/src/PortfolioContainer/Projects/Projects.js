import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import shape from "../../../src/assets/Projects/shape-bg.png";
export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"Some Of My Projects"} />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Designed and developed a custom website to showcase my
                      portfolio. I decided to use React.js, Typescript and other
                      JavaScript libraries and frameworks to complete this
                      website. Learned a lot about React.js and how it works.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>Summer 2022</h5>
                    </ul>
                  </div>
                  <div className="client-info">

                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Worked with a team of 18 students to design and implement
                      a self-checkout system along with its graphical user
                      interface. Project consisted of automated testing,
                      software documentation, and presentation. Contributed and
                      managed the project components through GitHub and
                      implemented in Java.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>University of Calgary 2022</h5>
                    </ul>
                  </div>
                  <div className="client-info">

                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Worked with 5 students to design and implement a social
                      engineering quiz website to test people's ability to
                      recognize and avoid scam/phishing messages. Contributed
                      and managed the project components through GitHub and
                      implemented in React.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>University of Calgary 2021</h5>
                    </ul>
                  </div>
                  <div className="client-info">
  
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      24 hour challenge where I worked with a group to create a
                      telegram bot to provide mental health resources to
                      telegram users. Implemented a telegram bot API system and
                      connected it to our Django database to provide necessary
                      resources. This bot gives recommendations based on who
                      users are, how familiar they are with mental health issues
                      and type of resources they are looking for. Used Python
                      and collaborated the project through GitHub
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>CodeTheChange 2021</h5>
                    </ul>
                  </div>
                  <div className="client-info">
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I made my personal website to learn more about frontend
                      development. Learned the basics of web development and how
                      frontend frameworks interacts with each other. Used HTML,
                      CSS, Javascript.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>Summer 2021</h5>
                    </ul>
                  </div>
                  <div className="client-info">
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Solved the watering issue of my high school's hydroponic
                      towers. As a solution, I designed a self monitoring IoT
                      plant watering system that had a digital screen , alarm
                      system for unusual water levels and an app that shows the
                      water level with remote internet access.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>Riverview High School 2020</h5>
                    </ul>
                  </div>
                  <div className="client-info">

                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      During my internship at Sovos Turkey, I was given a task
                      to complete a React Javascript website that generates
                      emojis using a real time database. I worked with a team
                      and a supervisor to complete this task.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <h5>Sovos Turkey 2019</h5>
                    </ul>
                  </div>
                  <div className="client-info">

                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
