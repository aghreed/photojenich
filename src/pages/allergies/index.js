import React from "react";
import Header from "../../components/header";
import ProjectDetailHero from "../../components/project/project.detail.hero";
import ProjectDetailBrief from "../../components/project/project.detail.brief";
import SingleTitledParagraph from "../../components/project/project.detail.single.titled.paragraph";
import BulletListImage from "../../components/project/project.detail.bullet.list.image";
import ParagraphImage from "../../components/project/project.detail.paragraph.image";
import SegwayQuote from "../../components/project/project.detail.segway.quote";

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

const AllergiesGreen = '#03C193';
const AllergiesBackgroundColor = '#EDEDED';

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
  </div>
);

export default AllergiesPage;
