import React from 'react';
import Header from '../../components/header';

import './_astraia.scss';

import AstraiaBigImage from '../../images/astraia_big.png';
import AstraiaNBGImage from '../../images/astraia_nbg.png';
import SystemMapImage from '../../images/system_map.png';
import AstraiaIdeationImage from '../../images/astraia_ideation.png';
import AstraiaPaperPrototypingImage from '../../images/astraia_paperprototyping.png';
import AstraiaWireframingImage from '../../images/astraia_wireframing.png';
import FlowOneImage from '../../images/flow_one_desktop.png';
import FlowTwoImage from '../../images/flow_two_desktop.png';
import FlowThreeImage from '../../images/flow_three_desktop.png';
import FlowFourImage from '../../images/flow_four_desktop.png';

const AstraiaPage = () => (
    <div className="astraia-page-container">
      <Header />
      <section className="project-section">
        <div className="project-container">
          <div className="project-image" style={{backgroundImage: `url(${AstraiaBigImage})`}}></div>
          <h1 className="project-title">Astraia</h1>
          <div className="project-description"><span>Duration: 10 Weeks</span> <span style={{ marginLeft: '0.5em'}}>Role: designer & researcher</span></div>
          <div className="scrolldown">
            <div className="scrolldown-text">Scroll Down</div>
            <div className="scrolldown-line"></div>
          </div>
        </div>
      </section>
      <section className="in-brief-section">
        <div className="in-brief-container">
          <span className="title">In Brief</span>
          <span className="horizontal-line"></span>
          <p className="text">
          The judicial system in America is one of the slowest movers towards the integration of technology.
          Having the weight of someone's future in your hands is arduous. We aimed to alleviate the burden
           of day-to-day tasks on judges and clerks in the municipal court system to help keep focus
           directed towards the important things. Astraia is a task and schedule management application
           for clerks and judges.
           </p>
        </div>
      </section>
      <section className="segway">
         <div className="astraia-nbg-image" style={{backgroundImage: `url(${AstraiaNBGImage})`}}></div>
      </section>
      <section className="court-system-section">
        <h4 className="court-system-title">How The Court System works</h4>
        <div className="article-container">
          <div className="left">
            <p>
            Within a court system, a case is filed with a Court Coordinator who gives the information to the Court Clerk who is in charge of the scheduling, filing and assigning cases to specific Judges. When the judge receives a case, he assigns one of his law clerks to the case. Law clerks can manage anywhere from 1-10 cases at a time. Their tasks for a case include researching cases and statutes, organizing research into legal documents, and writing rulings with their respective judges.
            </p>
          </div>
          <div className="right">
            <p>
            Oftentimes, court clerks don’t work for just one judge; they work for multiple at a time. Meaning you have one court clerk who manages the schedules and assignment of multiple judges, and those judges have multiple different law clerks under their jurisdiction each working upwards of 10 cases at a time.
            </p>
            <p>
            But the complexity doesn’t stop there, law clerks can work with multiple different cases, creating a stressful and difficult to maintain system of memo’s, archaic filing systems, and paperwork.
            </p>
          </div>
        </div>
        <div className="court-system-image" style={{backgroundImage: `url(${SystemMapImage})`}}></div>
      </section>
      <section className="segway">
        <div className="streamline-container">
          <div className="diagonal-line high"></div>
          <div className="streamline-text">
            <h2>We aimed to streamline these processes to help prioritize the level of care and time spent on each case.</h2>
          </div>
          <div className="diagonal-line low"></div>
        </div>
      </section>
      <section className="hangry-section">
        <div className="article-container">
          <h3>Hangry Judges and Unfair Sentences</h3>
          <p className="text">
            Our initial interest in the Court system was piqued by a <a href="https://www.wired.com/2011/04/judges-mental-fatigue/" target="_blank">study</a> done in 2009 with 1,000 trial judges. This study stated that Prisoners were 65% more likely to receive parole in the morning. In contrast, prisoners that were seen right before lunch were less that 10% likely to get parole. That statistic bounced back to 65% after lunch and breaks throughout the day. Judges were hangry and we wanted to fix it.
          </p>
          <h3>Secondary Research</h3>
          <p className="text">
            Through secondary research we focused on three different areas; Social Justice, Municipal Courts and Judges. Our findings from our research brought us to make certain assumptions based on what we found.
          </p>
        </div>
      </section>
      <section className="segway">
        <div className="early-assumptions-container">
          <h4 className="early-assumptions-title">Early Assumptions</h4>
          <div className="bullet-list-container">
            <div className="item">
              <div className="title">1.</div>
              <div className="text">Judges suffer from decision fatigue and implicit bias.</div>
            </div>
            <div className="item">
              <div className="title">2.</div>
              <div className="text">Decision fatigue and implicit bias affect rulings on court cases</div>
            </div>
            <div className="item">
              <div className="title">3.</div>
              <div className="text">If judges are aware of their fatigue and implicit bias, they will be motivated to change thier behavior</div>
            </div>
          </div>
        </div>
      </section>
      <section className="ideation-section">
        <div className="ideation-container">
          <div className="ideation-description">
            <h4 className="ideation-title">Ideation</h4>
            <p className="ideation-text">
              We ideated on our assumptions and came up with a wide variety of different ideas, from changing the lighting of the room to keep the judges attention alert, to a daily data visualization application to self-reflect on trends that may happen throughout the day. However, we realized part way through our ideation process that we needed to dig deeper.
            </p>
          </div>
          <div className="ideation-image" style={{backgroundImage: `url(${AstraiaIdeationImage})`}}></div>
        </div>
      </section>
      <section className="segway">
      <div className="did-not-know-container">
        <h4 className="did-not-know-title">We Didn't Know Enough</h4>
        <div className="bullet-list-container">
          <div className="item">
            <div className="bar"></div>
            <div className="text">Our ideas were often not feasible, desirable or viable for a court system to implement in 1-3 years.</div>
          </div>
          <div className="item">
            <div className="bar"></div>
            <div className="text">We were straddling the line between design and policy.</div>
          </div>
          <div className="item">
            <div className="bar"></div>
            <div className="text">We were working within a vast and complex sociotechnical system and we needed more information.</div>
          </div>
        </div>
      </div>
      </section>
      <section>
        <div className="article-container">
          <div className="center">
            <h4>Back to the Drawing Board</h4>
            <p className="text">
              We conducted continuous secondary research and decided the only way we would get the valuable information we needed would be through primary research. We talked to judges, lawyers, court clerks, and law clerks. After learning all of this new information and synthesizing our insights, our final design solution seemed clear and we bagan paper prototyping different types of project management and checklist applications to test with users.
            </p>
          </div>
        </div>
        <div className="insights-container">
          <div className="insights-image" style={{backgroundImage: `url({AstraiaWireframingImage})`}}></div>
          <div className="insights-description">
            <h4>Insights from Primary Research</h4>
            <p className="text">
            / Task management is essential to unloading the burden of information off the judges and clerks for better efficiency

            / Judges and clerks are not on the same page

            / Courts are trying to digitize their systems, but it’s taking a while and often their systems are clunky, expensive, and difficult to use

            / Clerks and Judges are juggling a lot, leading to time being wasted and them having to frequently acquaint themselves with the facts pertinent to the cases at hand.
            </p>
          </div>
        </div>
        <div className="paperprototype-container">
          <div className="paperprototype-description">
            <h4>Paper Prototyping</h4>
            <p className="text">
              Paper prototyping was essential to us understanding what needed to go into our task magment system. We conducted user testing with law librarians, lawyers and clerks to understand what day-to-day tasks look like. From these sessions we were able to extract findings as to where and when the failure happened in the analog systems they use presently, and designed to aid in those specific flows.
            </p>
          </div>
          <div className="paperprototype-image" style={{backgroundImage: `url({AstraiaPaperPrototypingImage})`}}></div>
        </div>
      </section>
      <section className="segway">
      </section>
    </div>
);


export default AstraiaPage;
