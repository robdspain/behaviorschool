import React, { useEffect } from 'react';
import styled from 'styled-components';

const CallSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CallHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.darkGray};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CalendlyWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  min-width: 320px;
  height: 700px;
`;

const BookCall = () => {
  useEffect(() => {
    // Check if script is already added
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize widget when Calendly is available
    const initWidget = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/robspain/chat-with-rob',
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      }
    };

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      initWidget();
    } else {
      // Wait for script to load
      window.addEventListener('load', initWidget);
    }

    return () => {
      window.removeEventListener('load', initWidget);
    };
  }, []);

  return (
    <CallSection>
      <CallHeader>
        <h1>Book a Call with Rob Spain</h1>
        <p>
          I'm currently in the research phase and would love to hear about your challenges
        </p>
      </CallHeader>
      <CalendlyWrapper>
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/robspain/chat-with-rob"
        />
      </CalendlyWrapper>
    </CallSection>
  );
};

export default BookCall;