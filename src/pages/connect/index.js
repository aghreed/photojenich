import React from "react";
import Header from '../../components/header';
import ProjectDetailHero from "../../components/project/project.detail.hero";
import ProjectDetailBrief from "../../components/project/project.detail.brief";
import SegwayQuote from "../../components/project/project.detail.segway.quote";
import SegwayBulletList from "../../components/project/project.detail.segway.bullet.list";
import SingleTitledParagraph from "../../components/project/project.detail.single.titled.paragraph";
import UISpecs from "../../components/project/project.detail.ui.specs";
import NextProject from "../../components/project/project.detail.next.project";
import ParagraphImage from "../../components/project/project.detail.paragraph.image";
import BulletListImage from "../../components/project/project.detail.bullet.list.image";
import ProjectReflections from "../../components/project/project.detail.reflections";

import "./connect.scss";

import TheWaitBig from "../../images/connect/connect_big.png";
import TheSpeaker from "../../images/connect/connect_thespeaker.png";
import TheListener from "../../images/connect/connect_thelistener.png";
import WhatTheySaw from "../../images/connect/connect_whattheysee.png";
import OurQuestions from "../../images/connect/connect_ourquestions.png";
import ConnectIceBreaker from "../../images/connect/connect_icebreaker.png";
import ConnectPowerOfVoice from "../../images/connect/connect_powerofvoice.png";
import ConnectDesign from "../../images/connect/connect_design.png";
import ConnectBuild from "../../images/connect/connect_build.png";
import ConnectTest from "../../images/connect/connect_test.png";
import ConnectForgettingTheirPhone from "../../images/connect/connect_forgettingtheirphone.png";

const ConnectColor = '#FC589E';
const ConnectBackgroundColor = '#FFEFF6';

const TheWaitPage = ({
  location
}) => (
  <div className="connect-container">
    <Header location={location}/>
    <ProjectDetailHero
      image={TheWaitBig}
      title="Connect"
      duration="1 Week"
      role="Prototyping, Testing, & Design"
      projectColor={ConnectColor}
    />
    <ProjectDetailBrief
      text="In a recent study published on Tech Crunch, it was stated that humans spend an average of five hours a day on their mobile devices––on major social media sites, games, entertainment, shopping, and more. While mobile phones essentially bring people closer together than ever before, we are left, somehow, feeling further apart. "
      text2="On top of that, we live in divisive times. Everyday feels like a shouting match, where no side is listening to the other. Technology is being used as a barrier to bully others you don’t even know. As a result, empathy for one other is at an all time low. Connect is an experimental, voice activated, phone charging station that aims to promote positive connection and empathy-building between two strangers through technology."
    />
    <section className="connect-video-section">
      <div className="connect-video-container">
        <iframe width="100%" height="100%" src="https://player.vimeo.com/video/259248269" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </section>
    <SegwayBulletList
      title="Our Intention"
      itemOne="If only for a while, motivate individuals to take the device out of their hands."
      itemTwo="Talk to a stranger on a deep and personal level."
      itemThree="Remind individuals of the importance of empathy-building through the action of listening."
      projectBackgroundColor={ConnectBackgroundColor}
      projectColor={ConnectColor}
    />

    <SingleTitledParagraph
      title="How it Works"
      text="Connect is an experimental charging station, activated by voice. While we use technology as a means for the two sides to connect, our goal was to get mobile devices out of the hands of the user and help facilitate a deep and meaningful connection with someone they may never see again.  We provide thought-provoking prompts to promote conversations and make it easier for the speaker to drop their guard. For the sake of our project we chose to have one speaker and one listener to engage in the roles of being vulnerable and empathetic."
    />
    <ParagraphImage
      goofy
      image={TheSpeaker}
      title= "The Speaker"
      text="The Speaker stands in front of our charging station, plugs in their phone, and takes a question card. Once they start answering a question aloud, their phone will begin to charge. From their view, they can see the back of the person listening to them speak. We keep the listener anonymous through this experience to create a feeling of safety around sharing."
    />
    <ParagraphImage
      image={TheListener}
      title= "The Listener"
      text="The Listener sits in the middle of an empty room by themselves. In front of them is a projection of the Speaker in real-time, answering a question. The scale of the Speakers face in the empty room creates an intimacy with the Listener, provoking them to do just that; listen."
    />
    <ParagraphImage
      goofy
      image={WhatTheySaw}
      title= "What They See"
      text="This is a view of what the Speaker sees when talking in front of the charging station. We wanted the Speaker to be able to see themselves talking to a thoughtful listener, while keeping the identity of that person a mystery. We wished to see the experience of a person opening up while talking to a complete stranger and then reflect on how the Listener felt after witnessing that moment."
    />
    <BulletListImage
      image={OurQuestions}
      title= "Our Questions"
      text="1. What makes you feel unstoppable?"
      text2="2. What do you lie the most about?"
      text3="3. What are your beliefs on God?"
      text4="4. How long does it take you to really trust someone?"
      text5="5. What is the craziest thing that you’ve done?"
      text6="6. What are you most grateful for in life?"
      text7="7. What's your relationship like with your parents?"
      text8="8. What emotion do you experience the most?"
    />
    <SegwayBulletList
      title="How We Got Here"
      itemOne="Ideated four ideas, and rapidly paper prototyped for each."
      itemTwo="Tested our prototypes with three participants to get a general understanding of what was working and what was not."
      itemThree="Presented our findings for a final critique that would help us synthesize down to one, final, idea."
      projectBackgroundColor={ConnectBackgroundColor}
      projectColor={ConnectColor}
    />

    <SingleTitledParagraph
      title="Putting Our Ideas to the Test"
      text="Since we were interested in coming up with a way for people to interact by looking up from their phones, we brainstormed and came up with four different ideas that ranged from speculative art pieces, to a simple way to individually manage time spent on their phone. We ended up combining the essence of two of our concepts to make our final Connect prototype."
    />
    <ParagraphImage
      image={ConnectIceBreaker}
      title="Ice Breaker"
      text="Ice Breaker was an application that people would “opt in” to that would disable your phone when you were in proximity to someone else who had also opted in. Your screen would provide you with an ice breaker question to get the conversation started. Unlike our other three ideas, this was a direct push to motivate people to talk to one another."
    />
    <ParagraphImage
      goofy
      image={ConnectPowerOfVoice}
      title="Power Of Voice"
      text="Power of Voice was a charging station powered by voice activation. Your phone would only charge if you were talking. We liked the idea of adding playfulness into this option, thinking it would be interesting to see how people tried to charge their phone while staying within social and cultural norms. We assumed we could get people to step out of their comfort zones with this particular idea, which intrigued us greatly."
    />
    <SingleTitledParagraph
      title="Feedback and Critique"
      text="Our critique with our peers provided us with insightful comments that helped shape our final concept. They commentated that our “Power of Voice” prototype was less intrusive and would be accepted by more people. One classmate also suggested that instead of forcing people to talk to others standing nearby and avoid scenarios where someone was alone, it would be more natural for people to talk to someone on the screen. For example, a person can talk to another person who is at a different charging station through an iPad. Our peers also made comments on how they enjoyed that the “Ice Breaker” idea gave a prompt to break through the awkwardness of starting a conversation. These comments helped us shape the experience for our Speaker and Listener."
    />
      <SingleTitledParagraph
      title="Iterations from Feedback"
      text="After receiving feedback, we sat down and iterated upon our original prototypes. We personally liked the idea of the Speaker being physically by themselves, so we added the prompt cards from the “Ice Breaker” prototype and a live feedback screen of the Listener to make it easier for the Speaker to feel comfortable talking. We also took this moment to define the environment our project would reside in, making sure that we were positioning our project more as a provocative art piece or guerilla project, rather than a feasible and desirable way to charge your phone."
    />

  <SegwayBulletList
      title="Next Steps "
      itemOne="Design the basic physical prototype and the technological intricacies to make our prototype successful."
      itemTwo="Create and build a working prototype through the use of laser cutting."
      itemThree="Test and reflect to see and hear the impact our project had on strangers. "
      projectBackgroundColor={ConnectBackgroundColor}
      projectColor={ConnectColor}
    />
    <ParagraphImage
      image={ConnectDesign}
      title="Design"
      text="Our first step was to understand how our project would work between two rooms. We drew out a diagram of how we foresaw it working, helping us get a grasp on the technology we would need to make this project possible."
    />
    <ParagraphImage
    goofy
      image={ConnectBuild}
      title="Build"
      text="To build our physical structure we designed a box in Illustrator and then laser cut it out of wood. We glued the pieces together and added tacs to the back to fasten our technology onto the station."
    />
    <ParagraphImage
      image={ConnectTest}
      title="Test"
      text="We set up our final prototype in the art building of the University of Washington and asked four strangers to go through our project. We then asked them to reflect on their experiences within their different roles."
    />
    <SegwayQuote
      quote="“The questions are so direct and kind of intimate questions… it kind of pierces your comfort level… You’re conflicted, like do I really want to charge my phone now? Is it worth it?”"
      projectBackgroundColor={ConnectBackgroundColor}
      projectColor={ConnectColor}
      maxWidth={955}
    />
    <SingleTitledParagraph
      title="Participant Reflections"
      text="Our participants stated that although talking about private topics to strangers was a little beyond their comfort level, it was a novel and amazing experience. One participant surprised himself, saying that due to the intimacy of the questions, he didn’t expect himself to be so honest and sincere when answering. He also thought that the private setting provided an “introspective” space that provided safety for the Speaker and Listener to bond."
    />
    <ParagraphImage
      image={ConnectForgettingTheirPhone}
      title="Forgetting Their Phone"
      text="All of our participants noted that they completely forgot they were charging their cell phones during the experience. They were so immersed in telling their stories that they forgot about the things around them. Two participants also noted, however, that while they forgot about their phone, charging was still an essential part of the experience. It was the very fact that this was designed as a charging station, that made them stop and interact with it in the first place."
    />
    <SingleTitledParagraph
      title="Digital Realism"
      text="We questioned our participants about the use of technology in creating intimacy with two people to see if they could still make a meaningful connection through a screen. Participant three stated, "
      text2="“It’s kind of interesting because it's not like you are speaking directly to them,  so you still have a barrier of anonymity…. So it’s like you are opening up, but it still has a digital feel to it in some way, which is interesting… it’s not exactly like standing in front of someone and answering personal questions but it still has that sense of kind of like uncomfortable uneasiness I suppose.”"
    />

    <ProjectReflections
      projectColor={ConnectColor}
      title="What I learned"
      text="This quick project made me practice my skills in grace and flexibility. With only one week to create something, we pushed ourselves to create the best prototype we could, while still being realistic about  our time constraints and scale."
      text2="Overall, we were very pleased with how Connect turned out. The whole point of this project was to create human connection through technology and we believe we were successful in doing so. Our participants forgot about their phones and cared more about the connection they were making with themselves and the person in the other room. They were engaged, felt powerful, and ultimately refreshed from the experience. Our Listeners also felt like they gained something from participating. This project showed the power in what the simple act of talking and listening can do to connect two strangers."
    />
    <NextProject
      projectKey="astraia"
    />
  </div>
);

export default TheWaitPage;
