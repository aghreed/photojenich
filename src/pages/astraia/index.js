import React from 'react';
import Header from '../../components/header';
import ProjectDetailHero from '../../components/project/project.detail.hero';
import ProjectDetailBrief from '../../components/project/project.detail.brief';
import UISpecs from "../../components/project/project.detail.ui.specs";
import NextProject from "../../components/project/project.detail.next.project";
import ProjectReflections from "../../components/project/project.detail.reflections";

import './_astraia.scss';

import AstraiaBigImage from '../../images/astraia/astraia_big.png';
import AstraiaNBGImage from '../../images/astraia/astraia_nbg.png';
import SystemMapImage from '../../images/astraia/system_map.png';
import AstraiaIdeationImage from '../../images/astraia/astraia_ideation.png';
import AstraiaPaperPrototypingImage from '../../images/astraia/astraia_paperprototyping.png';
import AstraiaWireframingImage from '../../images/astraia/astraia_wireframing.png';
import FlowOneImage from '../../images/astraia/flow_one_desktop.png';
import FlowTwoImage from '../../images/astraia/flow_two_desktop.png';
import FlowThreeImage from '../../images/astraia/flow_three_desktop.png';
import FlowFourImage from '../../images/astraia/flow_four_desktop.png';

const AstraiaPurple = '#8338EC';

const AstraiaPage = ({
  location
}) => (
    <div className="astraia-page-container">
      <Header location={location} />
      <ProjectDetailHero
        image={AstraiaBigImage}
        title="Astraia"
        duration="10 Weeks"
        role="designer & researcher"
        projectColor={AstraiaPurple}
      />
      <ProjectDetailBrief
        text="The judicial system in America is one of the slowest movers towards the integration of technology.
                  Having the weight of someone's future in your hands is arduous. We aimed to alleviate the burden
                   of day-to-day tasks on judges and clerks in the municipal court system to help keep focus
                   directed towards the important things. Astraia is a task and schedule management application
                   for clerks and judges."
      />
      <section className="segway">
         <div className="astraia-nbg-image" style={{backgroundImage: `url(${AstraiaNBGImage})`}}></div>
      </section>
      <section className="court-system-section">
        <div className="court-system-container">
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
        </div>
      </section>
      <section className="segway">
        <div className="streamline-container">
          {/*<div className="diagonal-line high"></div>*/}
          <div className="streamline-text">
            <h2>We aimed to streamline these processes to help prioritize the level of care and time spent on each case.</h2>
          </div>
          {/*<div className="diagonal-line low"></div>*/}
        </div>
      </section>
      <section className="hangry-section">
        <div className="article-container">
          <h4>Hangry Judges and Unfair Sentences</h4>
          <p className="text">
            Our initial interest in the Court system was piqued by a <a href="https://www.wired.com/2011/04/judges-mental-fatigue/" target="_blank">study</a> done in 2009 with 1,000 trial judges. This study stated that Prisoners were 65% more likely to receive parole in the morning. In contrast, prisoners that were seen right before lunch were less that 10% likely to get parole. That statistic bounced back to 65% after lunch and breaks throughout the day. Judges were hangry and we wanted to fix it.
          </p>
          <h4>Secondary Research</h4>
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
      <section className="drawing-board-section">
        <div className="drawing-board-container">
          <div className="article-container">
            <h4>Back to the Drawing Board</h4>
            <p className="text">
              We conducted continuous secondary research and decided the only way we would get the valuable information we needed would be through primary research. We talked to judges, lawyers, court clerks, and law clerks. After learning all of this new information and synthesizing our insights, our final design solution seemed clear and we bagan paper prototyping different types of project management and checklist applications to test with users.
            </p>
          </div>
        </div>
      </section>
      <section className="insights-section">
        <div className="insights-container">
          <div className="insights-image" style={{backgroundImage: `url(${AstraiaWireframingImage})`}}></div>
          <div className="insights-description">
            <h4 className="insights-title">Insights from Primary Research</h4>
            <div className="insights-bullet-list">
            <p className="text">
            / Task management is essential to unloading the burden of information off the judges and clerks for better efficiency
            </p>
            <p className="text">
            / Judges and clerks are not on the same page
            </p>
            <p className="text">
            / Courts are trying to digitize their systems, but it’s taking a while and often their systems are clunky, expensive, and difficult to use
            </p>
            <p className="text">
            / Clerks and Judges are juggling a lot, leading to time being wasted and them having to frequently acquaint themselves with the facts pertinent to the cases at hand.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="paperprototype-section">
        <div className="paperprototype-container">
          <div className="paperprototype-description">
            <h4 className="paperprototype-title">Paper Prototyping</h4>
            <p className="paperprototype-text">
              Paper prototyping was essential to us understanding what needed to go into our task magment system. We conducted user testing with law librarians, lawyers and clerks to understand what day-to-day tasks look like. From these sessions we were able to extract findings as to where and when the failure happened in the analog systems they use presently, and designed to aid in those specific flows.
            </p>
          </div>
          <div className="paperprototype-image" style={{backgroundImage: `url(${AstraiaPaperPrototypingImage})`}}></div>
        </div>
      </section>
      <section className="segway">
        <div className="finding-container">
          <h4 className="finding-title">Finding One</h4>
          <div className="finding-quote">
          “It’s hard to manage and remember all that’s happening with cases”
          </div>
        </div>
      </section>
      <section className="flow-section one">
        <div className="flow-container">
          <div className="flow-image" style={{backgroundImage: `url(${FlowOneImage})`}}></div>
          <div className="flow-description">
            <h4 className="flow-title">Flow One: Adding a Case</h4>
            <div className="flow-text">
            <p>
            Court clerks can work be working on upwards of 10 cases at a time and judges are working with multiple different court clerks all working on different cases. Both stakeholders are juggling multiple new cases as well as those that have been going on for years. This complex system of organizing and remembering multiple different cases, all at different parts of a trial, leads to forgetfulness and confusion between judges and court clerks. Which means valuable moments are being wasted, searching through files, remembering what the case is about, and figuring out where each case is on the timeline of a trial.
            </p>
            <p>
            We made it easy and accessible for court clerks to add a case to Astraia. They can add references, tasks, notes, attach lawyers to the case and also give the ability to Judges to assign new cases to clerks of their choice.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="segway">
        <div className="finding-container">
          <h4 className="finding-title">Finding Two</h4>
          <div className="finding-quote" style={{ maxWidth: '943px'}}>
          “It’s such a great way to communicate with my staff without having to send memos and paper back and forth while creating a really good trail so things don’t fall through the cracks.”
          </div>
        </div>
      </section>
      <section className="flow-section two">
        <div className="flow-container">
          <div className="flow-image" style={{backgroundImage: `url(${FlowTwoImage})`}}></div>
          <div className="flow-description">
            <h4 className="flow-title">Flow Two: Adding a Task</h4>
            <div className="flow-text">
            <p>
            Creating a case is only part of the system of seamless communication and cutting down on wasted minutes. Some courts have already realized their need for checklist-like technology and have asked their IT departments to make custom checklist systems for them. The above quote is from Janet T. Neff, U.S. Western Michigan District Judge, explaining what a checklist helps her court accomplish. Out taks system allows tasks to be assigned to different stakeholders, prioritized, given due dates and added to specific cases so important information doesn’t fall through the cracks.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="segway">
        <div className="finding-container">
          <h4 className="finding-title">Finding Three</h4>
          <div className="finding-quote">
          “Keeping track of references is essential because the use of reference databases are so expensive.”
          </div>
        </div>
      </section>
      <section className="flow-section three">
        <div className="flow-container">
          <div className="flow-image" style={{backgroundImage: `url(${FlowThreeImage})`}}></div>
          <div className="flow-description">
            <h4 className="flow-title">Flow Three: Adding a Reference to a Case</h4>
            <div className="flow-text">
            <p>
            Interviewing a law clerk gave us insight into into their daily lives. Duties of a law clerk include researching cases and statutes, organizing that research into legal documents and then using those documents to write drafts with the corresponding judge. Learning that so much of their day involves researching on databases like LexisNexis and Westlaw, meant that it was imperative we gave law clerks the ability to add these references to cases and checklists. Searching on reference databases is one of the highest costs of the law and court system. By adding the ability to add a reference to a case, we assure that these references don’t get swept up in other trials, filings and memos, saving money for all parties involved.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="segway">
        <div className="finding-container">
          <h4 className="finding-title">Finding Four</h4>
          <div className="finding-quote">
          “Not everyone is on the same page, meetings get changed or cancelled and people aren’t notified.”
          </div>
        </div>
      </section>
      <section className="flow-section four">
        <div className="flow-container">
          <div className="flow-image" style={{backgroundImage: `url(${FlowFourImage})`}}></div>
          <div className="flow-description">
            <h4 className="flow-title">Flow Four: Adding an Event to the Calendar</h4>
            <div className="flow-text">
            <p>
            Communication was a common pain point that we frequently heard about in our primary research phase. One clerk told us that meetings often get changed, but not all parties are notified, meaning people showed up to wrong rooms, on different days or not at all. This confusion is yet another stressor within an already environment, adding to the decision fatigue judges and clerks already face during their long and tedious days.
            </p>
            <p>
            Astraia gives clerks and judges the ability to add events to their calendar, notify stakeholders within the system of the event and also send invites to lawyers or other parties not within the system through the integration of email platforms like Microsoft Outlook. By having the calendar integrated into Astraia, judges and clerks can be reminded of what tasks need to be done before a meeting, be easily reminded what the case is corresponding to the specific meeting and update all parties involved seamlessly when something is changed.
            </p>
            </div>
          </div>
        </div>
      </section>
      <UISpecs
        docName="astraia_uispec"
        projectColor={AstraiaPurple}
      />
      <ProjectReflections
        projectColor={AstraiaPurple}
        title="Future Steps"
        text="There are barriers and obstacles when it comes to getting technology to be accepted in the court systems, and we we would address that by going to court coordinators and telling them about the benefit of our software, since they are the managers of their respective courts."
        text2="We would also push for this to become responsive for tablets and phones, as well as automate case filings into the system so efficiency is maximized and manual input would no longer be required. The integration of LexisNexis, the premier reference database for lawyers and clerks would be an essential add to Astraia’s reference widget as well."
        text3="Finally, we would add new roles to the system, for the court coordinator to oversee everything and help simplify their management tasks. Our goal would be to make a more robust communication application for the municipal courts."
        secondTitle="Reflections"
        secondText="My team and I set off in a very broad and intimidating challenge space and were able to find our way and create something we were proud of. Ideally, I wish we would have realized we were trying to tackle both a wicked problem, and a policy problem (implicit bias and decision fatigue) right away so we could have invested more time in interviewing and doing field study observations of court and law clerks. We were able to easily pivot when we realized we were looking in the wrong area, however, and made up for lost time."
        secondText2="I personally loved this project space. I am interested in complex sociotechnical systems and how responsible design can help us incrementally change and respond to the historical problems we face in our society. This challenge space pushed me out of my comfort zone and forced me to understand how the sub system of the municipal court works within the larger judicial system of the United States."
      />
      <NextProject
        projectKey="the_wait"
      />
    </div>
);


export default AstraiaPage;
