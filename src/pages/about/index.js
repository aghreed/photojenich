import React from "react";
import Header from "../../components/header";
import UISpecs from "../../components/project/project.detail.ui.specs";

import "./_about.scss";

import Spotify from "../../images/spotify.png";
import Instagram from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";

const AboutPage = ({
  location
}) => (
  <div className="about-container">
    <Header location={location} />
    <section className="about-hero-section">
      <div className="about-hero">
        <h2>Hi, I’m Whitney. A humanist, interaction designer, and researcher driven by resiliency.</h2>
        <div className="line"></div>
      </div>
      <div className="article-container">
        <div className="article-row">
          <div className="article">
            <p className="text bold">
            I’m inspired by the human experience. In our ability to achieve in critical moments as well as fail and get back up again. I’m motivated by our unyielding faith in ourselves and a better tomorrow. And that is what I strive to responsibly design a future for.
            </p>
          </div>
          <div className="article"></div>
        </div>
        <div className="article-row">
          <div className="article">
            <p className="text">
            I’m Whitney. A hybrid interaction designer and researcher driven by human resiliency. I grew up in the good town of Milwaukee Wisconsin, where I spent my days as a young whippersnapper finding my love for Dad Yacht Rock, Seinfeld, and Karaoke.
            </p>
            <p className="text">
            It was there as well that I found my deep-rooted passion for two things-- creativity and compassion. On one side I was a lover of art, design, and brainstorming, problem-solving, and making ideas come to life. On the other hand, I found profound joy in helping others. I jumped at the chance of being a nurse for my grandma during her hip surgery and was always there to help my friends on a bad day.
            </p>
            <p className="text">
            And I never saw these things going hand-in-hand. I thought even through college that I would have to choose between design and art or being a doctor or nurse. My interest in these areas of life, however, made me a credit shy of a triple major in Psychology, Graphic Design, and Advertising, and ending up with the latter two.
            </p>
          </div>
          <div className="article">
            <p className="text">
            My motivation for a career that made an impact and that facilitated my creative and humanistic sides, led me to User Experience design, where I self-taught myself the foundations in UX/UI and frontend development, earning me a spot at a job at a large tech startup in Omaha, Nebraska as their sole UX/UI and frontend developer.
            </p>
            <p className="text">
            My drive for mastery in my skill and pushed me to look further, and I found my way to the University of Washington’s Master of Human-Computer Interaction and Design program.
            </p>
            <p className="text">
            It’s in this program that I’ve learned to design for the person, to create with meaning and responsibility, and to solve for problems with validated and informed answers.
            </p>
          </div>
        </div>
      </div>
      <div className="social-container">
        <div className="social-row">
          <div className="social">
            <div className="bar"></div>
            <div className="title">Check out my Experience</div>
            <div className="actions">
              <div className="action" onClick={() => window.open(`/docs/jenich_resume.pdf`, "_blank")}>
                Resume
              </div>
            </div>
          </div>
          <div className="social">
            <div className="bar"></div>
            <div className="title">Get in Touch</div>
            <div className="actions">
              <div className="action" onClick={() => window.open(`mailto:wojenich@uw.edu`)}>
                Email Me
              </div>
            </div>
          </div>
          <div className="social">
            <div className="bar"></div>
            <div className="title">Find me on the World Wide Web</div>
            <div className="actions">
              <div className="actions-icons">
                <div className="action-icon"
                  style={{ backgroundImage: `url(${Spotify})`}}
                  onClick={() => window.open(`https://open.spotify.com/user/audiojenich?si=Q0vHT6ZsRhiAcA1PF8Lt-Q`, "_blank")}
                >
                </div>
                <div className="action-icon"
                  style={{ backgroundImage: `url(${Instagram})`}}
                  onClick={() => window.open(`https://www.instagram.com/photojenich/`, "_blank")}
                >
                </div>
                <div className="action-icon"
                  style={{ backgroundImage: `url(${LinkedIn})`}}
                  onClick={() => window.open(`https://www.linkedin.com/in/whitney-jenich`, "_blank")}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
