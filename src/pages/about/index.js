import React from "react";
import Header from "../../components/header";
import SingleTitledParagraph from "../../components/project/project.detail.single.titled.paragraph";

const AboutPage = () => (
  <div className="about-container">
    <Header />
    <section>
      <SingleTitledParagraph
        title="Hi, I'm Whitney"
        text="I have things to say about myself but not right now."
      />
    </section>
  </div>
);

export default AboutPage;
