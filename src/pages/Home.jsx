import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CallToActionButton } from '../components/Button';

const Hero = styled.section`
  background: white;
  color: ${props => props.theme.colors.text};
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.darkGray};
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Feature = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const Home = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <h1>Welcome to Behavior School</h1>
          <p>
            Creating structured, trauma-informed, and compassionate behavior systems
            that actually work—without the stress, frustration, or constant "putting out fires."
          </p>
          <CallToActionButton as={Link} to="/book-call">
            Book a Free Call
          </CallToActionButton>
        </HeroContent>
      </Hero>

      <Section>
        <h2>What is Behavior School?</h2>
        <p>
          A structured system designed to help school-based behavior analysts overcome
          burnout and implement effective, trauma-informed, and assent-based behavior interventions.
        </p>
        <Grid>
          <Feature>
            <h3>Practical Frameworks</h3>
            <p>Easy-to-follow behavior plans and functional assessments</p>
          </Feature>
          <Feature>
            <h3>Streamlined Tools</h3>
            <p>Efficient data collection & intervention tracking</p>
          </Feature>
          <Feature>
            <h3>ACT Training</h3>
            <p>Manage stress effectively for you and your students</p>
          </Feature>
        </Grid>
      </Section>
    </>
  );
};

export default Home;
