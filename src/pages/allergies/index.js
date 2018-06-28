import React from "react";
import Header from "../../components/header";
import ProjectDetailHero from "../../components/project/project.detail.hero";
import ProjectDetailBrief from "../../components/project/project.detail.brief";
import SingleTitledParagraph from "../../components/project/project.detail.single.titled.paragraph";
import BulletListImage from "../../components/project/project.detail.bullet.list.image";
import ParagraphImage from "../../components/project/project.detail.paragraph.image";
import SegwayQuote from "../../components/project/project.detail.segway.quote";
import SegwayBulletList from "../../components/project/project.detail.segway.bullet.list";
import SegwayHero from "../../components/project/project.detail.segway.hero";
import InsightParagraph from "../../components/project/project.detail.insight.paragraph";
import UISpecs from "../../components/project/project.detail.ui.specs";
import NextProject from "../../components/project/project.detail.next.project";
import ProjectReflections from "../../components/project/project.detail.reflections";

import "./_allergies.scss";

import AllergiesBig from "../../images/allergies/allergies_big.png";
import AllergiesBean from "../../images/allergies/allergies_bean.png";
import AllergiesChart from "../../images/allergies/allergies_chart.png";
import AllergiesCrab from "../../images/allergies/allergies_crab.png";
import AllergiesDiaryStudy from "../../images/allergies/allergies_diarystudy.png";
import AllergiesMilk from "../../images/allergies/allergies_milk.png";
import AllergiesPersonalityGraph from "../../images/allergies/allergies_personalitygraph.png";
import AllergiesRelationshipCircle from "../../images/allergies/allergies_relationshipcircle.png";
import AllergiesSemiStructured from "../../images/allergies/allergies_semistructured.png";
import AllergiesSynthesis from "../../images/allergies/allergies_synthesis.png";
import Lisa from "../../images/allergies/lisa.png";
import Stephen from "../../images/allergies/stephen.png";
import Geetu from "../../images/allergies/geetu.png";
import Devra from "../../images/allergies/devra_shiba.png";

const AllergiesGreen = '#03C193';
const AllergiesBackgroundColor = '#EDEDED';
const AllergiesHeroTitleColor = '#077F62';
const AllergiesHeroColor = '#09D3A2';

const AllergiesPage = ({
  location
}) => (
  <div className="allergies-container">
    <Header location={location} />
    <ProjectDetailHero
      image={AllergiesBig}
      title="Allergies"
      duration="10 Weeks (ongoing)"
      role="Research, & Illustration"
      projectColor={AllergiesGreen}
    />
    <ProjectDetailBrief
      text="One in 13 children have been diagnosed with a food allergy, that averages to around two per classroom. With a 106% increase in the diagnosis of severe reactions to allergens in the past two years, it cannot be understated that allergies are affecting our children more and more. But in a world that doesn’t quite understand it’s prevalence, we are left with a dangerous gap in knowledge and space for life threatening mistakes with this oftentimes chronic condition."
    />
    <ParagraphImage
      goofy
      image={AllergiesCrab}
      title="Why Allergies?"
      text="While explanations for the increase in food allergens may be pointing to our environment, studies are slow to invoke change. We realized we could have impact, now, in aiding in the management of food allergies, specifically in preteens."
    />
    <ParagraphImage
      image={AllergiesMilk}
      title="Why Preteens?"
      text="50% of deaths due to anaphylaxis shock happen in teenage years. This comes down to multiple factors, including the increase in independence, peer pressure, and risk taking. We wanted to take a preventative and empowering approach, focusing on preteens ages 9-12 while they get ready for their teenage years."
    />
    <SegwayQuote
      quote="“We strive to support preteens with food allergies to independently manage the contents of their food.”"
      projectColor={AllergiesGreen}
      projectBackgroundColor={AllergiesBackgroundColor}
    />
    <BulletListImage
      goofy
      image={AllergiesBean}
      title="Research Questions"
      text="To get to the root of our challenge statement we set off to answer two questions."
      text2="1. How do food allergies affect interpersonal relationships in both the child’s and guardians lives?"
      text3="2. How do children and parents, prevent, react to, and manage the food allergy?"
    />
    <SingleTitledParagraph
      title="Literature Review"
      text="We explored multiple different avenues to inform our knowledge around food allergies. Understanding that food allergies are a health problem, we studied on a medical and biological level. We also studied allergies on a social and psychological level, reading papers on the the affects allergies have on family relationships as well as psychological ramifications they may have on the child. Our extensive review led us to understand and begin to empathize with the complexities of living with a chronic condition like food allergies."
    />
    <SingleTitledParagraph
      title="Expert Interviews"
      text="To build off of our foundational knowledge built in the secondary research phase, we sought out four experts in a range of fields to shed light on medical, community, and business levels.  We conducted semi-structured interviews with two allergists, a senior manager of nutrition services of a major commercial catering company, Sodexo, and the founder and leader of the online community “No Nuts Moms.”"
    />
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-row">
          <div className="testimonial">
            <div className="image" style={{ backgroundImage: `url(${Lisa})`}}></div>
            <div className="testimony">
              “With the increase in food allergies, communities online and in-person have become invaluable for parents seeking advice when doctors aren’t available.”
            </div>
            <div className="testimony-attribution">
             — Lisa Rutter, founder of No Nuts Moms
            </div>
          </div>
          <div className="testimonial">
            <div className="image" style={{ backgroundImage: `url(${Stephen})`}}></div>
            <div className="testimony" style={{ position: 'relative', top: '-18px' }}>
            “Despite the increase in the prevalence of allergies, death from allergies are rare, but that doesn’t stop the hysteria from manifesting.”
            </div>
            <div className="testimony-attribution">
             — Dr. Stephen Tilles, Allergist
            </div>
          </div>
        </div>
        <div className="testimonials-row">
          <div className="testimonial">
            <div className="image" style={{ backgroundImage: `url(${Geetu})`}}></div>
            <div className="testimony">
            “The biggest pain points for families dealing with food allergies are inconsistent school policies, difficulty in reading food labels, and traveling.”
            </div>
            <div className="testimony-attribution">
             — Dr. Geetu Deogun, Pediatric Allergist
            </div>
          </div>
          <div className="testimonial">
            <div className="image" style={{ backgroundImage: `url(${Devra})`}}></div>
            <div className="testimony">
            “Communication is key when dealing with parent’s of children with food allergies, especially when you are in charge of their food.”
            </div>
            <div className="testimony-attribution">
             — Devra Shiba, Senior Nutrition Manager, Sodexo
            </div>
          </div>
        </div>
      </div>
    </section>
    <SingleTitledParagraph
      title="Recruiting Parents and Children"
      text="In order to get answers to our two research questions we recruited in parent/child dyads. We looked for children ages 9-12 with a range of severity in reactions as well as type of food allergens. We recruited in dyads to gain trust, and see the deep and rich interpersonal relationships parents and their children have. Since we believe the parent/child partnership is essential to managing preteen’s food allergies, we wanted to hear their stories about what it is like managing and dealing with a food allergy."
    />
    <section className="allergies-chart-section">
      <div className="allergies-chart-container">
        <h4 className="allergies-chart-title">Participant Allergen Breakdown</h4>
        <div className="allergies-chart-image" style={{ backgroundImage: `url(${AllergiesChart})`}}></div>
      </div>
    </section>
    <ParagraphImage
      image={AllergiesDiaryStudy}
      title="Diary Study"
      text="To get a rich, contextual look into both parent and preteen’s day-to-day lives, we had out of town participants participate in a Diary Study. We asked them to write down any instance in which they thought of the food allergy during the day for one full week, and how it made them feel. At the end of the week, they sent back their separate diaries. We followed up with one 30-minute phone interview with both parent and child to dig deeper into entries that we found particularly interesting."
    />
    <SingleTitledParagraph
      title="Lessons Learned"
      text="Our diary was a big learning experience for our team. We had the most difficulty retaining participants for this exercise and learned about the delicate balance of relaying enough information to the participants that made them interested in helping, but not enough for them to feel overwhelmed by what we were asking them to do."
      text2="We also learned the importance of the design of the diary itself. Our original design consisted of three blank boxes on each page, with one page for each day. We quickly realized that when we presented them with this design, our participants started to see the diary as more of a food diary and just listed what they were eating. We added more context to our description prompts and added an extra box to each page to help disassociate the diary with only food related experiences."
    />
    <ParagraphImage
      goofy
      image={AllergiesSemiStructured}
      title="Semi Structured Interviews"
      text="We conducted nine 45-75 minute semi-structured interviews. When available, we did it within their homes, to gain rapport more easily and get a better idea of how they organize their lives around food allergies, like their kitchen design."
    />
    <ParagraphImage
      image={AllergiesRelationshipCircle}
      title="Relationship Circle"
      text="Once rapport was built, we asked our participants to engage in our Relationship Circle Exercise to better understand their relationship with their community. We asked preteens to place “face cards” in corresponding rings around the middle circle, which represented themselves. We observed and asked them to think aloud. We then asked if their rings would change in relation to their food allergy. If it did, we asked why, and noted if it did not. We found surprisingly that most children made only slight, to no changes."
    />
    <SegwayBulletList
      title="Finding Insights and Opportunities"
      itemOne="Externalize data from interviews into digestable models and frameworks."
      itemTwo="Create Insights from these models and themes formed."
      itemThree="From our insights, find rich and enlightened opportunity areas for us to explore with our solution."
      projectColor={AllergiesGreen}
      projectBackgroundColor={AllergiesBackgroundColor}
    />
    <ParagraphImage
      goofy
      image={AllergiesPersonalityGraph}
      title="Synthesis Models"
      text="To help us get a better grasp on our overwhelming amount of data, we each created our own synthesis models related to information we found enlightening during the interview process. On the right is a graph that took all 12 of our preteen participants, the severity of their allergy, frequency of reactions, and their attitude towards their allergies into account to help us see if there were patterns. We ended up seeing that children with more mild allergies have more reactions, but engage in riskier eating and live more worry free."
    />
    <ParagraphImage
      image={AllergiesSynthesis}
      title="Synthesizing"
      text="We externalized all of our hard data from our interviews onto sticky notes, then placed them into different categories. Once in categories, we started looking deeper, finding four larger themes; trust awareness, isolation, and fear, in which our final 12 insights encapsulated and stemmed from."
    />
    <SegwayHero
      title="Theme One"
      heroText="Trust"
      heroTitleColor={AllergiesHeroTitleColor}
      backgroundColor={AllergiesGreen}
      heroColor={AllergiesHeroColor}
    />
    <InsightParagraph
      title="Insight One, Trust"
      forward="Trust between the parent and teacher is reliant on the teacher’s proven understanding of how to deal with food allergies."
      text="Because the nature of food at school is vast, encompassing lunchtime, class parties, sharing of snacks between peers, and more, the risk of allergy attacks increases. Unforeseen circumstances that may occur in this relatively uncontrolled environment causes parents to worry. If parents set up preventative measures with teachers at the start of the school year, and teachers prove their loyalty and understanding over time, only then can reassurance take form."
    />
    <InsightParagraph
      title="Insight Two, Trust"
      forward="Trust in the school system is compromised when regulations surrounding allergy education are inconsistent."
      text="National guidelines exist around food allergies in school systems, however, every school district differs from one another even in the same state. We found that most schools did have some set guidelines in place, but they were not necessarily being followed by school staff, students, nor those students’ parents. These inconsistencies proved frustrating for parents, as they believed their child to be in a safe space, only to be reminded by one-off incidents that protocols were not being enforced."
    />
    <InsightParagraph
      title="Insight Three, Trust"
      forward="Parental trust is dependent on their child’s ability to take control of their environment."
      text="Parents’ fear is derived from a distrust in a child’s ability to be emotionally responsible for their food decisions. As heard from the parents we talked to, some children know they can’t have something yet still choose to consume it. This behavior causes parents to remain fearful of their child’s food intake, and the feeling can only be relieved once the child proves their understanding of the severity of their food condition."
    />
    <SegwayHero
      title="Theme Two"
      heroText="Isolation"
      heroTitleColor={AllergiesHeroTitleColor}
      backgroundColor={AllergiesGreen}
      heroColor={AllergiesHeroColor}
    />
    <InsightParagraph
      title="Insight Four, Isolation"
      forward="Children feel isolated with their food allergy because their natural curiosity to try new things is severely restricted, relative to their social circle."
      text="When it comes to a child’s social circle, at the preteen age of 9-12, many interactions are based on experiencing things with their peers together for the first time. Whether it be trying new foods, playing new games, or watching a new movie, there is a natural curiosity in children to absorb new experiences and discuss them with their peers. When that part of their life is so limited such as the case with food allergies, is when children feel most isolated."
    />
    <InsightParagraph
      title="Insight Five, Isolation"
      forward="Because food is a central aspect for social activity, there is a cultural stigma when one cannot participate."
      text="In so many different cultures, and especially in America, the breaking of bread is a core part of social interactions. It’s often the norm to center social gatherings around food and in some cases second nature to offer a share of one’s food in the presence of others. Because the nature of food is a communal contribution or personal offering, it is considered rude to decline and creates a cultural stigma around that parent/child."
    />
    <InsightParagraph
      title="Insight Six, Isolation"
      forward="Parents feel their child is isolated when others do not consider the higher threshold of needs."
      text="Parents of children with food allergies want their kids to be treated with the same level of attention and care as their peers. It is especially difficult for parents to hear that their child was excluded from activities in the classroom or social setting."
    />
    <InsightParagraph
      title="Insight Seven, Isolation"
      forward="The isolating nature of food allergies is the foundation of a tight knit community."
      text="Communities such as Facebook groups or child friend groups are often formed on the basis of isolation. There is a mutual understanding in these communities that other people ‘just don’t get it like we do’ and a frustration that their needs are not cared for. The life and death nature of food allergies creates a mutual discussion point that parents often feel go under-appreciated and disregarded."
    />
    <SegwayHero
      title="Theme Three"
      heroText="Awareness"
      heroTitleColor={AllergiesHeroTitleColor}
      backgroundColor={AllergiesGreen}
      heroColor={AllergiesHeroColor}
    />
    <InsightParagraph
      title="Insight Eight, Awareness"
      forward="The high variability in food allergies causes society to be jaded by the word ‘allergy’."
      text="Because of the varying degrees of severity, and the rise in both food sensitivities and food allergies, society finds it hard to define allergies as a real problem. With the diagnostic tests that are used now, experts can’t even define severity. These limitations cause people outside the allergen community, who understand even less than the people within the community, to think of the word “allergy” as a catch-all for food issues. This, mixed with the varying degree of allergic reactions, makes the outside community view allergies as mild disruption and even an inconvenience in their lives."
    />
    <InsightParagraph
      title="Insight Nine, Awareness"
      forward="Parental trust is dependent on their child’s ability to take control of their environment."
      text="Both doctors and parents agree that unknown environmental triggers are the cause of many food allergies in western culture. Studies like the Israeli Peanut Study and the Hygiene Theory reiterate these sentiments."
      text2="We also found this same thread of truth within our own data when talking with the dyads. P2, who has a soy and fruit allergy that causes skin reactions, went to Taiwan for a summer and saw changes in his skin while there. Once he came back to the United States, his problems came back. P1 is a child who struggles with the new allergy EoE. His parents said “kids are the canaries in the coalmine,” meaning they are sirens telling us we are doing something wrong with our food creation and consumption."
    />
    <SegwayHero
      title="Theme Four"
      heroText="Fear"
      heroTitleColor={AllergiesHeroTitleColor}
      backgroundColor={AllergiesGreen}
      heroColor={AllergiesHeroColor}
    />
    <InsightParagraph
      title="Insight Ten, Fear"
      forward="Heightened anxiety stems from the trauma experienced during a past allergic reaction."
      text="It is a scary moment for families when their child goes through an allergic reaction. Allergic reactions could range from minor hives to difficulty breathing. These traumatic experiences leave an enduring feeling that remains with families for a long period of time. Parents can only do so much when it comes to preparing and keeping their loved ones from an allergic reaction. The loss of control and unpredictability of their child experiencing a reaction drives fear."
    />
    <InsightParagraph
      title="Insight Eleven, Fear"
      forward="Parents assume the worst about their child’s condition due to limitations and ambiguities of diagnostic testing."
      text="Once children are diagnosed with food allergies, parents tend to latch on to the idea of the food allergy being worse than it really is. These diagnostic testing methods are unreliable and lack reassurance that the treatment will do more good than harm."
      text2="Food allergy testing is not black and white, as they are time consuming and can be falsely positive. The anxiety of these food allergies often adds an emotional toll, as some children who are tested negative for some foods, still have a reaction. So they avoid all foods in that specific category."
    />
    <InsightParagraph
      title="Insight Twelve, Fear"
      forward="Distraction is a commonly applied coping mechanism for children experiencing allergy attacks either during or after."
      text="When children experience an allergic reaction, they take epinephrine or generic medication and wait it out until the symptoms lessen. In the meantime, they are in pain and experience anxiety, stomach aches, and restlessness. Through this time, the only thing children are left to do is to shift their attention to something else. Some distraction methods include watching and playing video games, reading books, or applying ice packs to the pained area. Distraction is used as a pain reducer as it keeps their mind occupied from the pain."
    />
    <section className="opportunity-areas-section">
      <div className="opportunity-areas-container">
        <div className="bullet-list-container">
          <div className="title">
            <h4>Opportunity Areas</h4>
          </div>
          <div className="bullet-list-row">
            <div className="item">
              <div className="bar"></div>
              <div className="text">Better educate people on how to properly deal with a reaction while it’s taking place</div>
            </div>
            <div className="item">
              <div className="bar"></div>
              <div className="text">Make the process of determining which foods are safe to consume easier to understand</div>
            </div>
            <div className="item">
              <div className="bar"></div>
              <div className="text">Design for control in an uncontrolled environment</div>
            </div>
          </div>
          <div className="bullet-list-row">
            <div className="item">
              <div className="bar"></div>
              <div className="text">Create a more informed diagnostic experience for children and their parents</div>
            </div>
            <div className="item">
              <div className="bar"></div>
              <div className="text">Build on support of the local community to ease the mourning process for families</div>
            </div>
            <div className="item">
              <div className="bar"></div>
              <div className="text">Alleviate the concern of making mistakes when dealing with a reaction in the moment</div>
            </div>
          </div>
          <div className="bullet-list-row">
            <div className="item">
              <div className="bar"></div>
              <div className="text">Build trust between the parent and school through established expectations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <UISpecs
      docName="allergies_research_report"
      projectColor={`${AllergiesGreen}`}
      text="View Research Report Here"
    />
    <ProjectReflections
      projectColor={AllergiesGreen}
      title="Future Steps"
      text="Next quarter we will be taking these insights, themes and opportunities and start working within different frameworks to come up with concepts. We will prototype four to five concepts that we feel encapsulate the essence of what we are trying to accomplish with our project to prototype. Our goal is to then go back to our participants and interview them about the viability and desire for each of the ideas. The rest of our time will be spent, creating a final solution to help preteen’s manage their food allergies."
    />
    <NextProject
      projectKey="astraia"
    />
  </div>
);

export default AllergiesPage;
