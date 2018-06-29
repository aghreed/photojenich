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

import "./_the_wait.scss";

import TheWaitBig from "../../images/the_wait/wait_big.png";
import TheWaitWaitingRoom1 from "../../images/the_wait/wait_waitingroom1.png";
import TheWaitWaitingRoom2 from "../../images/the_wait/wait_waitingroom2.png";
import Timeline from "../../images/the_wait/timeline_INFX.png";
import TheWaitInterview from "../../images/the_wait/wait_interview.png";
import TheWaitIdeation from "../../images/the_wait/wait_ideation.png";
import TheWaitExperiencePrototype from "../../images/the_wait/wait_experienceprototype.png";
import JourneyMap from "../../images/the_wait/journey_map.png";
import ThreeWidePhotos from "../../images/the_wait/wait_three_wide.png";
import TheWaitWelcomePacket from "../../images/the_wait/wait_welcomepacket.png";
import TheWaitHomepod from "../../images/the_wait/wait_homepod.png";
import TheWaitInformPic from "../../images/the_wait/wait_Inform_pic.png";

import TheWaitGifStayingInTheLoop from "../../gifs/wait_stayingintheloop.gif";
import TheWaitGifDoubleAuth from "../../gifs/wait_ensuringprivacy.gif";
import TheWaitGifEase from "../../gifs/wait_alleviatingstress.gif";
import TheWaitGifInform from "../../gifs/wait_providingkeyinfo.gif";

const TheWaitColor = '#43A0FF';
const TheWaitBackgroundColor = '#F2F8FF';

const TheWaitPage = ({
  location
}) => (
  <div className="the-wait-container">
    <Header location={location}/>
    <ProjectDetailHero
      image={TheWaitBig}
      title="The Wait"
      duration="5 Weeks"
      role="Research, Design & Illustration"
      projectColor={TheWaitColor}
    />
    <ProjectDetailBrief
      text="Waiting for a loved one during surgery can be mentally draining and can take a toll not just on the patient, but their support system as well. From external environmental stressors like taking off of work, dealing with family, and aftercare-- to the stress of the surgical event itself, the community surrounding the patient is often left in a conflicting state of boredom and anxiety during a procedure."
      text2="We understood early on that we wanted our design to be a provocation of what we see the future of healthcare to be. By creating a three-fold, physical and mobile experience, we attempted to touch loved ones present at the hospital for the surgery as well as those anxiously waiting miles away."
    />
    <section className="the-wait-video-section">
      <div className="the-wait-video-container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QFhvnxvzN40" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </section>
    <SegwayQuote
      quote="We hoped to inform, ease, and streamline the wait experience for the support system of the patient to provide reassurance in a time of uncertainty."
      projectBackgroundColor={TheWaitBackgroundColor}
      projectColor={TheWaitColor}
      maxWidth={1017}
    />
    <SingleTitledParagraph
      title="Observations"
      text="Our team set out to observe the waiting room experience at the University of Washington Medical Center. We took 30-minute shifts sitting in different waiting rooms around the hospital observing, taking notes, and if presented with the opportunity, talking with people about their experience of waiting."
    />
    <BulletListImage
      image={TheWaitWaitingRoom1}
      title="What We Saw"
      text="1. People tried to sit as far away from each other as possible."
      text2="2. Groups spoke in hushed tones, not wanting to disrupt the peace of the room."
      text3="3. In contrast, nurses often yelled, calling out for patients upwards of three times before being noticed."
      text4="4. A phone sat in the middle of the room with a sign reading “please answer if ringing, it may be for you.”"
    />
    <BulletListImage
      goofy
      image={TheWaitWaitingRoom2}
      text="5. One of my teammates spoke to a woman who told him she was “fearful of missing an update if she left the waiting room for a bit” while her mother was with the doctor."
      text2="6. Magazines were months to years out of date and all in english."
      text3="7. While we noticed signal was weak in the hospital, people still relied heavily on their phones to pass the time."
    />
    <section className="segway" style={{ background: `${TheWaitBackgroundColor}`}}>
      <div className="observations-insights-container">
        <h4 className="observations-insights-title">Insights from Observation</h4>
        <div className="bullet-list-container">
          <div className="item">
            <div className="bar"></div>
            <div className="text">People sit far away from each other to try to create privacy in a public space during a vulnerable time.</div>
          </div>
          <div className="item">
            <div className="bar"></div>
            <div className="text">People waiting feel forced to stay in close proximity to the waiting room due to tools and out of date procedures hospitals use to notify loved ones.</div>
          </div>
          <div className="item">
            <div className="bar"></div>
            <div className="text">The reverence of the room needs to be upheld, but that then limits distraction methods for those waiting.</div>
          </div>
        </div>
      </div>
    </section>
    <section className="secondary-research-section">
    <div className="secondary-research-container">
      <div className="article-container">
        <h4>Secondary Research</h4>
        <p className="text">
        We sought to understand the timeline of a surgery through secondary research and the possible stressors the support system may run into along the way. I came up with my own research model to help me better understand the anxieties that come with each phase of the surgery timeline. Once privy to each phase, my team and I decided to streamline the process from “getting there” to the “hospital departure.”
        </p>
      </div>
    </div>
    </section>
    <section>
      <div className="timeline-container">
        <div className="timeline-image" style={{ backgroundImage: `url(${Timeline})`}}></div>
      </div>
    </section>
    <ParagraphImage
      image={TheWaitInterview}
      title="Primary Research"
      text="We conducted semi-structured interviews with people who have recently experienced a loved one going through a surgical procedure to hear about the highs and lows of their experience and to confirm the validity of our first insights."
    />
    <SegwayQuote
      quote="“You have this extreme case of FOMO, when you are waiting… maybe that’s why they put the bathrooms so close… something could happen at any moment.”"
      projectBackgroundColor={TheWaitBackgroundColor}
      projectColor={TheWaitColor}
      maxWidth={955}
    />
    <SingleTitledParagraph
      title="Opportunity Spaces"
      text="Our primary research solidified our original findings. People were scared to move around for fear of missing news about their loved one. There was this feeling of community against a “common enemy” — that enemy being the injury or disease that has taken their loved one into surgery. Yet while, that brings a mutual respect into the waiting room, it doesn’t take away the need for privacy and space from strangers during such a sensitive time. Understanding who we were designing for and what the most important areas to fix were, we came up with three design opportunity areas to explore."
    />
    <SegwayBulletList
      title="Design Opportunities"
      itemOne="Design for privacy with their own community."
      itemTwo="Ease anxiety by informing the support system with regular, detailed information."
      itemThree="Create increased comfort in mobility"
      projectBackgroundColor={TheWaitBackgroundColor}
      projectColor={TheWaitColor}
    />
    <section className="ideation-section">
      <div className="ideation-container">
        <div className="ideation-description">
          <h4 className="ideation-title">Ideation</h4>
          <p className="ideation-text">
          Upon coming up with our insights and better understanding our opportunity area, we began to ideate. We started with 30 ideas, critiquing and voting for our favorites in two different rounds until we got down to 10. Once we had 10 ideas, we created scenarios for each and chose two to go forward with in a three-fold experience.
          </p>
        </div>
        <div className="ideation-image" style={{backgroundImage: `url(${TheWaitIdeation})`}}></div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Understanding our Users"
      text="We wanted to understand not only our user’s needs, but their “be” goals and motivations as well. To create an experience with meaning for the support system, we created personas of our direct stakeholders. We then chose to focus in on one member of the support system that would be experiencing the wait at the hospital. We created a robust journey map of their touchpoints, thoughts, and feelings."
    />
    <section className="journey-map-section">
      <div className="journey-map-container">
        <div className="journey-map-image" style={{ backgroundImage: `url(${JourneyMap})`}}></div>
      </div>
    </section>
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-image" style={{backgroundImage: `url(${TheWaitExperiencePrototype})`}}></div>
        <div className="insights-description">
          <h4 className="insights-title">Creating the Experience</h4>
          <p className="text">
          In order to understand our service concept in a holistic way, we set off on conducting a rapid experience prototype.
          </p>
          <p className="text">
          We had three participants go through the different touchpoints within our service and experience and give us feedback at the end.
          </p>
        </div>
      </div>
    </section>
    <section className="three-wide-photos-section">
      <div className="three-wide-photos-container">
        <div className="three-wide-photos-image" style={{ backgroundImage: `url(${ThreeWidePhotos})`}}></div>
        <div className="three-wide-photos-description">
          <div className="item">
            <span>Reading the Welcome Packet</span>
          </div>
          <div className="item">
            <span>Finding to Parking Spot</span>
          </div>
          <div className="item">
            <span>Learning about surgery in app</span>
          </div>
        </div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Feedback from our Experience Prototype"
      text="Overall our feedback from our service walkthrough was positive; our participants felt comforted by the idea that they would be taken care of during their loved one’s surgery too. Our main source of feedback was to be extra sensitive about the information we were giving to the support system and inform the support system about what to expect, so they are ready for the experience as a whole. With this information we made three iterations upon our first version of our experience design."
    />
    <SegwayBulletList
      title="Iterations"
      itemOne="Care now gives simple, non-sensitive timeline updates that are already part of a hospital’s computer input process."
      itemTwo="A Frequently Asked Questions section was added to help first-time “waiters” navigate their experience."
      itemThree="We added an extra layer of authentification and of a user to the app through the agreement of the patient for more security."
      projectBackgroundColor={TheWaitBackgroundColor}
      projectColor={TheWaitColor}
    />
    <SingleTitledParagraph
      title="Our Solution"
      text="We combined a physical solution with a mobile one to encompass as much as the support system as possible during such a difficult time. Our experience starts pre- surgery, when the patient receives forms to fill out. Within that mailing, the patient would also be sent a Welcome Packet. Once they get to the hospital they are given their own “home pod” to rest and relax. Through this whole experience, our Care app is there to help reassure and relieve the pressures of staying in one spot."
    />
    <section className="streamline-section">
      <div className="streamline-container">
        <div className="streamline-image" style={{backgroundImage: `url(${TheWaitWelcomePacket})`}}></div>
        <div className="streamline-description">
          <h4 className="streamline-title">1. Streamline</h4>
          <p className="streamline-text" style={{ color: `${TheWaitColor}`}}>
          “It would be great to get all of this information and the parking spot, it would make my time getting to the hospital that much easier.” – P2
          </p>
          <p className="streamline-text">
          With other papers normally given sent to patients before a surgery, our system will welcome them to the hospital, explain that they have their own parking spot and give them details on how to download the mobile app Care and invite family and friends.
          </p>
        </div>
      </div>
    </section>
    <section className="ease-section">
      <div className="ease-container">
        <div className="ease-image" style={{backgroundImage: `url(${TheWaitHomepod})`}}></div>
        <div className="ease-description">
          <h4 className="ease-title">2. Ease</h4>
          <p className="ease-text" style={{ color: `${TheWaitColor}`}}>
          “Waiting rooms are a pretty sensitive area, even when people are getting loud, facial expressions get reactionary. Noise is a misfit in the situation.” – Interview 1
          </p>
          <p className="ease-text">
          A physical waiting space for family and loved ones during the waiting experience, each family is given a designated Home Pod to relax and call their own during the duration of the surgery.
          </p>
        </div>
      </div>
    </section>
    <section className="inform-section">
      <div className="inform-container">
        <div className="inform-image" style={{backgroundImage: `url(${TheWaitInformPic})`}}></div>
        <div className="inform-description">
          <h4 className="inform-title">3. Inform</h4>
          <p className="inform-text" style={{ color: `${TheWaitColor}`}}>
          “I would love to be in the loop of what my family is doing. The more information the better.” – P1
          </p>
          <p className="inform-text">
          Families near and far are asked to sign up for Care, a mobile app that tells them more about their loved one’s procedure and keeps them updated throughout the surgery.
          </p>
        </div>
      </div>
    </section>
    <section className="staying-in-the-loop-section">
      <div className="staying-in-the-loop-container">
        <div className="staying-in-the-loop-image" style={{ backgroundImage: `url(${TheWaitGifStayingInTheLoop})`}}></div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Staying in the Loop"
      text="Integrating into healthcare software systems already in use, Care would send updates during major milestones of the surgery experience. With a timeline always on the home page, we show the information the support system will receive so they won’t be surprised or worried about what the next update could be. Push notifications for when doctor check-in’s are going to happen will also be sent, giving waiters the freedom to move around and know they will not miss anything."
    />
    <section className="staying-in-the-loop-section">
      <div className="staying-in-the-loop-container">
        <div className="staying-in-the-loop-image" style={{ backgroundImage: `url(${TheWaitGifInform})`}}></div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Providing Key Information"
      text="Care will help first time waiters, as well as those who have been in a similar situation before to feel more informed by being able to read up on the surgery itself, as well as the visit details right in the palm of their hand."
    />
    <section className="staying-in-the-loop-section">
      <div className="staying-in-the-loop-container">
        <div className="staying-in-the-loop-image" style={{ backgroundImage: `url(${TheWaitGifEase})`}}></div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Alleviating Stress"
      text="To ease the anxiety and worry of waiters near and far, we offer a Frequently Asked Question section, to read more about what to expect. A “Ways to Relax” section is also included with relaxation tips like meditation, for those who need a moment of peace. We also included an “Amenities” section for those at the hospital who want to learn more about what’s available for them to do while they wait."
    />
    <section className="staying-in-the-loop-section">
      <div className="staying-in-the-loop-container">
        <div className="staying-in-the-loop-image" style={{ backgroundImage: `url(${TheWaitGifDoubleAuth})`}}></div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Ensuring Privacy"
      text="Other features, like a two-step authentification process through the patient themselves ensures privacy and security for the application and the patient."
    />
    <UISpecs
      projectKey="the_wait"
      docName="the_wait_uispec"
    />
    <ProjectReflections
      projectColor={TheWaitColor}
      title="What I learned"
      text="Through creating this experience from start to finish, I realized how many different touchpoints and stakeholders go into creating a seemingly simple experience. Learning to take each one into account helped us create a more holistic, desirable and realized experience for not only the support system, but others indirectly affected as well."
      text2="One of the major issues we needed to combat during the design of our service was how we relay information and in what detail. Surgeries are stressful for the support system for a reason and we wanted to make sure that the information we were giving wouldn’t add to their anxieties. Knowing this and the seriousness of what could happen if something was relayed incorrectly through our app during such a high stakes situation, we decided to focus in on a less serious surgery for our scenario, specifically ACL tears."
      secondTitle="Next Steps"
      secondText="Stress and anxiety does not conclude at the end of a surgery, in fact it oftentimes gets more stressful as the support system oftentimes takes on the role as the caregiver. I would foresee extending this app to touch the “post-surgery” section of the timeline as well. I would personally also be interested in learning more about how to relay sensitive information in and effective way, to make this application more fitting for a wide breadth of surgeries."
    />
    <NextProject
      projectKey="allergies"
    />
  </div>
);

export default TheWaitPage;
