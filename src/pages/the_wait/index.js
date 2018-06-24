import React from "react";
import Header from '../../components/header';
import ProjectDetailHero from "../../components/project/project.detail.hero";
import ProjectDetailBrief from "../../components/project/project.detail.brief";

import "./_the_wait.scss";

import TheWaitBig from "../../images/wait_big.png";
import TheWaitWaitingRoom1 from "../../images/wait_waitingroom1.png";
import TheWaitWaitingRoom2 from "../../images/wait_waitingroom2.png";
import Timeline from "../../images/timeline_INFX.png";
import TheWaitInterview from "../../images/wait_interview.png";

const TheWaitColor = '#43A0FF';
const TheWaitBackgroundColor = '#F2F8FF';

const TheWaitPage = () => (
  <div className="the-wait-container">
    <Header />
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
    <section className="segway">
      <div className="informed-hope-container">
        <div className="informed-hope-quote">
          We hoped to inform, ease, and streamline the wait experience for the support system of the patient to provide reassurance in a time of uncertainty.
        </div>
      </div>
    </section>
    <section className="observations-section">
      <div className="observations-container">
        <div className="article-container">
          <h4>Observations</h4>
          <p className="text">
          Our team set out to observe the waiting room experience at the University of Washington Medical Center. We took 30-minute shifts sitting in different waiting rooms around the hospital observing, taking notes, and if presented with the opportunity, talking with people about their experience of waiting.
          </p>
        </div>
      </div>
    </section>
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-image" style={{backgroundImage: `url(${TheWaitWaitingRoom1})`}}></div>
        <div className="insights-description">
          <h4 className="insights-title">What We Saw</h4>
          <div className="insights-bullet-list">
            <p className="text">
            1. People tried to sit as far away from each other as possible.
            </p>
            <p className="text">
            2. Groups spoke in hushed tones, not wanting to disrupt the peace of the room.
            </p>
            <p className="text">
            3. In contrast, nurses often yelled, calling out for patients upwards of three times before being noticed.
            </p>
            <p className="text">
            4. A phone sat in the middle of the room with a sign reading “please answer if ringing, it may be for you.”
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="insights-two-section">
      <div className="insights-two-container">
        <div className="insights-two-description">
          <div className="insights-two-bullet-list">
            <p className="text">
            5. One of my teammates spoke to a woman who told him she was “fearful of missing an update if she left the waiting room for a bit” while her mother was with the doctor.
            </p>
            <p className="text">
            6. Magazines were months to years out of date and all in english.
            </p>
            <p className="text">
            7. While we noticed signal was weak in the hospital, people still relied heavily on their phones to pass the time.
            </p>
          </div>
        </div>
        <div className="insights-two-image" style={{backgroundImage: `url(${TheWaitWaitingRoom2})`}}></div>
      </div>
    </section>
    <section className="segway">
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
    <section className="primary-research-section">
      <div className="primary-research-container">
        <div className="primary-research-description">
          <h4 className="primary-research-title">Primary Research</h4>
          <p className="primary-research-text">
          We conducted semi-structured interviews with people who have recently experienced a loved one going through a surgical procedure to hear about the highs and lows of their experience and to confirm the validity of our first insights.
          </p>
        </div>
        <div className="primary-research-image" style={{backgroundImage: `url(${TheWaitInterview})`}}></div>
      </div>
    </section>
    <SegwayQuote
      quote="“You have this extreme case of FOMO, when you are waiting… maybe that’s why they put the bathrooms so close… something could happen at any moment.”"
      projectBackgroundColor={TheWaitBackgroundColor}
      projectColor={TheWaitColor}
    />
  </div>
);

export default TheWaitPage;
