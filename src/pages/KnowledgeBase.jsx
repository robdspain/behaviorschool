import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ComparisonTable = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 3rem 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  
  h3 {
    margin: 0;
    text-align: center;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ProblemSolution = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "${props => props.type === 'problem' ? '❌' : '✅'}";
      position: absolute;
      left: 0;
    }
  }
`;

const CenteredContent = styled.div`
  text-align: center;
  margin-top: 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const KnowledgeBase = () => {
  return (
    <StyledSection>
      <IntroSection>
        <h1>Behavior School Knowledge Base</h1>
        <p>
          Everything You Need to Know Before Booking a Call with Rob Spain, BCBA, IBA
        </p>
      </IntroSection>

      <h2>What Makes Behavior School Different?</h2>
      <ComparisonTable>
        <TableHeader>
          <h3>Traditional Behavior Training</h3>
          <h3>Behavior School</h3>
        </TableHeader>
        <TableRow>
          <div>Generic, one-size-fits-all advice</div>
          <div>Custom strategies tailored for school environments</div>
        </TableRow>
        <TableRow>
          <div>Focuses only on student behavior</div>
          <div>Addresses BOTH student behavior and YOUR burnout</div>
        </TableRow>
        <TableRow>
          <div>Limited teacher involvement</div>
          <div>Strategies to get full teacher buy-in</div>
        </TableRow>
        <TableRow>
          <div>No focus on professional well-being</div>
          <div>Uses ACT techniques to help YOU manage stress</div>
        </TableRow>
        <TableRow>
          <div>Rigid, outdated behavior plans</div>
          <div>Flexible, assent-based, student-centered approaches</div>
        </TableRow>
      </ComparisonTable>

      <ProblemSolution>
        <div>
          <h2>Common Challenges</h2>
          <List type="problem">
            <li>Teachers ignore behavior plans or push back on implementation</li>
            <li>Students' challenging behaviors persist despite traditional strategies</li>
            <li>Overwhelming caseloads & endless paperwork lead to burnout</li>
            <li>Lack of structured systems makes it hard to track progress</li>
            <li>Resistance from others when trying to implement changes</li>
            <li>Feeling isolated with no real support system in place</li>
          </List>
        </div>
        
        <div>
          <h2>How We Help</h2>
          <List type="solution">
            <li>Structured, easy-to-follow behavior systems that actually get implemented</li>
            <li>Trauma-informed, student-centered behavior plans that work long-term</li>
            <li>Teacher buy-in strategies that make your job easier</li>
            <li>ACT-based stress management techniques for yourself and your students</li>
            <li>Clear framework for conducting functional assessments</li>
            <li>Reduced burnout and increased professional confidence</li>
          </List>
        </div>
      </ProblemSolution>

      <CenteredContent>
        <h2>Ready to Transform Your Practice?</h2>
        <p>Book a call to discuss how we can help you create lasting change in your school.</p>
        <Button as={Link} to="/book-call">
          Schedule Your Free Call
        </Button>
      </CenteredContent>
    </StyledSection>
  );
};

export default KnowledgeBase;
