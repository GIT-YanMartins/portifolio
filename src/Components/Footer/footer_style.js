import styled from "styled-components";

export const Footer = styled.footer`
  background: rgba(0,0,0,0.95);
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(0,150,255,0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 100;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterTitle = styled.h2`
  color: #0096ff;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0,150,255,0.3);
`;

export const FooterText = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: #64ffda;
    font-size: 24px;
    transition: all 0.3s ease;

    &:hover {
      color: #ffffff;
      transform: translateY(-5px);
    }
  }
`;

export const Copyright = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  margin: 0;
`;