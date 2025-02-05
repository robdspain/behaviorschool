import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.lightGray};
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Behavior School</h3>
          <p>Creating effective behavior systems for school-based BCBAs</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/knowledge-base">Knowledge Base</FooterLink>
          <FooterLink to="/book-call">Book a Call</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <p>Email: rob@behaviorschool.com</p>
          <SocialLinks>
            <a href="https://www.linkedin.com/in/robspain/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?id=61564836345571" target="_blank" rel="noopener noreferrer">Facebook</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
