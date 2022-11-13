import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Coding Skills ", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    // { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 30 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Solidity", ratingPercentage: 30 },
    { skill: "Assembly", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 50 },
  ];

  // const projectsDetails = [
  //   {
  //     title: "Personal Portfolio Website",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "A Personal Portfolio website to showcase all my details and projects at one place.",
  //     subHeading: "Technologies Used: React JS, Bootsrap",
  //   },
  //   {
  //     title: "Mobile E-shop ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "An ecommerce application designed to sell products online wth payment system integration",
  //     subHeading:
  //       "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  //   },
  //   {
  //     title: "Ecommerce Website ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
  //     subHeading:
  //       "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  //   },
  // ];

  /* WORK EXPERIENCE */
  const resumeDetails = [
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MEXC Global"}
          subHeading={"North America Business Development Intern"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div
          className="
        "
        >
          <span className="resume-description-text">
            Assisting in identifying the market trend and opportunities to
            support the business growth. Driving client acquisition and new
            user-base of the company. Working and negotiating strategic
            partnership deals with high net-worth clients.
          </span>
        </div>
        <ResumeHeading
          heading={"UBCS"}
          subHeading={"Chairman/Co-President"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Building a student organization from scratch with the goal of
            bringing students interested in any aspect of the blockchain and
            together.Setting policies and strategic direction for the club, both
            for the near term and for the foreseeable future
          </span>
        </div>
        <ResumeHeading
          heading={"Sovos Turkey"}
          subHeading={"Software Developer Internship"}
          fromDate={"June 2019"}
          toDate={"July 2019"}
        />

        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Learned how to work and collaborate in professional a team
            environment. My main task was to create an Emoji Generator Website
            that fetched data from external sources.
          </span>
          <br />
        </div>
      </div>
    </div>,
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Calgary, Calgary/Canada"}
        subHeading={
          "Bachelor of Applied Science in Computer Science and minoring in Data Science and Management and Society."
        }
        fromDate={"2020"}
        toDate={"Now"}
      />

      <ResumeHeading
        heading={"Riverview High School, Riverview/Canada"}
        subHeading={
          "Varsity Football Team member, District Basketball Coach, Brilliant Labs Project Founder."
        }
        fromDate={"2018"}
        toDate={"2020"}
      />
      {/* { <ResumeHeading
        heading={"Private Doga High School, Istanbul/Turkey "}
        subHeading={
          "Varsity Basketball Team member, Robotics Team Captain, United Nations dMUN member, Vice President."
        }
        fromDate={"2016"}
        toDate={"2018"}
      /> } */}
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="I played many sports since my childhood, mainly varsity basketball and varsity football. I believe that sports have many positive effects on daily life. Even though I don't compete anymore, I still enjoy playing sports."
      />
      <ResumeHeading
        heading="Crypto/NFT Trading and Investing"
        description=" I started investing in crypto in 2020. Ever since then it became my hobby. After I started trading crypto, I also realized that I could also go into NFTs as well. I am currently an investor/team-member for many different projects!"
      />
      <ResumeHeading
        heading="Non-Profit Charity Work"
        description="I like to participate in volunteering work as well. I believe that everyone should try help their communities and society. Helping and getting to know other people is a great way to help the world."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="---"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"More information about me"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
