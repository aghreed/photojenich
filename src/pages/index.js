import React from 'react';
import { findDOMNode } from 'react-dom';
import Helmet from 'react-helmet';
import { Parallax, ParallaxLayer } from 'react-spring';

import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import ProjectOverview from '../components/project/project.overview';

import AstraiaImage from '../images/astraia/astraia.png';
import TheWaitImage from '../images/the_wait/the_wait.png';
import OlympicsImage from '../images/olympics.png';
import ConnectImage from '../images/connect.png';
import AllergiesImage from '../images/allergies/allergies.png';

// <ProjectOverview
//   goofy
//   title="Connect"
//   vertical="Prototyping Experiment"
//   text="Taking phones out of hands practicing the act of talking and listening."
//   image={ConnectImage}
// />

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.parallax;
    this.state = {
      width: 0,
      height: 0,
      hideHeader: true,
      hideHero: true,
      hideScrollDown: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePageLoad = this.handlePageLoad.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.handlePageLoad();
    window.addEventListener('resize', this.updateWindowDimensions);
    findDOMNode(this.parallax).addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    findDOMNode(this.parallax).removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleScroll() {
    if (this.state.hideHeader && this.parallax.current >= window.innerHeight) {
      this.setState({ hideHeader: false });
    } else if (!this.state.hideHeader && this.parallax.current < window.innerHeight) {
      this.setState({ hideHeader: true });
    }
  }

  handlePageLoad() {
    setTimeout(() => {
      this.setState({ hideHero: false });
    }, 250);

    setTimeout(() => {
      this.setState({ hideScrollDown: false });
    }, 750);
  }

  render() {
    return (
      <div className="tk-nimbus-sans">
        <Helmet title="Whitney Jenich">
          <link rel="stylesheet" href="https://use.typekit.net/jlq6hrz.css" />
        </Helmet>
        <Header location={this.props.location} hideHeader={this.state.hideHeader} />
        <Parallax id="parllax" pages={4} ref={node => this.parallax = node}>
          <ParallaxLayer offset={0}>
            <Hero hideHero={this.state.hideHero} hideScrollDown={!this.state.hideHeader || this.state.hideScrollDown} />
          </ParallaxLayer>
          <ProjectOverview
            title="Astraia"
            vertical="Research & Ideation"
            text="Project managment application for the court, streamlining processes and communication."
            image={AstraiaImage}
            offset={1.2}
          />
          <ProjectOverview
            goofy
            title="The Wait"
            vertical="Experience Design"
            text="Redesigning the wait experience for patients and loved ones during a surgery or procedure."
            image={TheWaitImage}
            offset={1.2}
          />
          <ProjectOverview
            title="Allergies"
            vertical="Capstone Project"
            text="Capstone project mentored by Artefact on helping preteens manage their food allergies."
            image={AllergiesImage}
            offset={1.2}
          />
          <Footer />
        </Parallax>
      </div>
    )
  }
}

export default BlogIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `
