import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import ProjectOverview from '../components/project/project.overview';

import AstraiaImage from '../images/astraia.png';
import TheWaitImage from '../images/the_wait.png';
import OlympicsImage from '../images/olympics.png';
import ConnectImage from '../images/connect.png';
import AllergiesImage from '../images/allergies.png';

export const Home = () => (
  <div>
    <Hero />
    <Header />
    <ProjectOverview
      title="Astraia"
      vertical="Research & Ideation"
      text="Project managment application for the court, streamlining processes and communication."
      image={AstraiaImage}
    />
    <ProjectOverview
      title="The Wait"
      vertical="Experience Design"
      text="Redesigning the wait experience for patients and loved ones during a surgery or procedure."
      image={TheWaitImage}
    />
    <ProjectOverview
      title="Olympics"
      vertical="Speculative Case Study"
      text="Speculative case study of the safety and security surrounding the 2028 Los Angeles Olympics."
      image={OlympicsImage}
    />
    <ProjectOverview
      title="Connect"
      vertical="Prototyping Experiment"
      text="Taking phones out of hands practicing the act of talking and listening."
      image={ConnectImage}
    />
    <ProjectOverview
      title="Allergies"
      vertical="Capstone Project"
      text="Capstone project mentored by Artefact on helping preteens manage their food allergies."
      image={AllergiesImage}
    />
    <Footer />
  </div>
)

export default Home;
