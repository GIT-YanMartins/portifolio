import styled from "styled-components";

export const MatrixBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0,0,0,0.95);
  overflow: hidden;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const MatrixColumn = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0096ff;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  text-shadow: 0 0 10px rgba(0,150,255,0.5);
  animation: matrixRain ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;

  span {
    display: block;
    margin: 2px 0;
    transition: opacity 0.3s ease;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes matrixRain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: rgba(0,0,0,0.95);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0,150,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0,150,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #000000 0%, #001a33 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,50,100,0.4), rgba(0,150,255,0.1));
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0,150,255,0.1) 0%, transparent 70%);
    z-index: 1;
  }
`;

export const LogoText = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 10;
  font-family: 'Poppins', sans-serif;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  position: relative;
  z-index: 2;

  span {
    color: #0096ff;
    text-shadow: 0 0 20px rgba(0,150,255,0.5);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255,255,255,0.8);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  position: relative;
  z-index: 2;
`;

export const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #0096ff;
  color: #0096ff;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  position: relative;
  z-index: 2;
  overflow: hidden;

  &:hover {
    background: #0096ff;
    color: #000000;
    box-shadow: 0 0 20px rgba(0,150,255,0.5);
  }
`;

export const PresentationSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(0,0,0,0.4);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0,150,255,0.3);
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  h3 {
    text-align: justify;
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0,50,100,0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const PhotoBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PresentationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    text-align: justify;
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    span {
      color: #0096ff;
      text-shadow: 0 0 10px rgba(0,150,255,0.3);
    }
  }
`;

export const MainBox = styled.div`
  background: rgba(0,0,0,0.4);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0,150,255,0.3);
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(0,50,100,0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h2 {
    color: #ffffff;
    font-size: 2.5rem;
    margin: 0 0 1.5rem 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    color: #ffffff;
    font-size: 1.2rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    text-align: justify;
    }
  }
`;

export const ProjectSectionTitle = styled.h3`
  color: #ffffff;
  font-size: 2.5rem;
  margin: 2rem 0 1.5rem 0;
  text-align: center;
  position: relative;
  padding: 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(to right, #0096ff, #001a33);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(0,0,0,0.4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0,150,255,0.3);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 12px 40px rgba(0,50,100,0.3);
  }

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #ffffff;
    font-size: 1.8rem;
    margin: 0 0 0.8rem 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  p {
    color: #ffffff;
    font-size: 1.1rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
`;

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.8rem;
  margin: 0 0 0.8rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

export const ProjectLanguage = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

export const TimelineSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(0,0,0,0.2);
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin: 3rem 0;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0,150,255,0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(0,150,255,0.05) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(0,150,255,0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, rgba(0,150,255,0.2), rgba(0,150,255,0.1), rgba(0,150,255,0.2));
    transform: translateX(-50%);
  }
`;

export const TimelineTitle = styled.h2`
  color: #0096ff;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: linear-gradient(to right, 
      transparent,
      rgba(0,150,255,0.3),
      transparent
    );
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 4rem;
    gap: 2rem;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 15px;
    background: rgba(0,150,255,0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    box-shadow: 
      0 0 0 4px rgba(0,0,0,0.3),
      0 0 0 8px rgba(0,150,255,0.1);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

export const TimelineContent = styled.div`
  flex: 1;
  background: rgba(0,0,0,0.8);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(0,150,255,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  z-index: 1;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 15px 40px rgba(0,0,0,0.2),
      inset 0 0 0 1px rgba(0,150,255,0.2);
    background: rgba(0,0,0,0.9);
  }

  h3 {
    color: #0096ff;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    position: relative;
    display: inline-block;
    letter-spacing: 1px;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 2px;
      background: linear-gradient(to right, 
        rgba(0,150,255,0.3),
        transparent
      );
    }
  }

  p {
    color: rgba(255,255,255,0.9);
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
`;

export const TimelineImage = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(0,150,255,0.1);
  position: relative;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 15px 40px rgba(0,0,0,0.2),
      inset 0 0 0 1px rgba(0,150,255,0.2);
    background: rgba(0,0,0,0.9);
  }
`;

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin: 4vh 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
  position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 10vw;
    height: 4px;
    background: linear-gradient(to right, #0096ff, #001a33);
    border-radius: 4px;
  }
`;

export const TecnologiasSection = styled.section`
  padding: 5vh 5vw;
  background: rgba(0,0,0,0.2);
`;

export const TecnologiasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3vw;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TecnologiaBox = styled.div`
  background: rgba(0,0,0,0.4);
  border-radius: 20px;
  padding: 3vh 2vw;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0,150,255,0.3);
`;

export const TecnologiaTitle = styled.h3`
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 2vh;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const TecnologiaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TecnologiaItem = styled.li`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 1.5vh 0;
  display: flex;
  align-items: center;
  gap: 1vw;
  font-family: 'Poppins', sans-serif;

  span {
    font-size: 1.5rem;
  }
`;

export const ExperienciasSection = styled.section`
  padding: 8vh 5vw;
  background: rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0,150,255,0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0,150,255,0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ExperienciasList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      transparent,
      rgba(0,150,255,0.3),
      transparent
    );
    transform: translateX(-50%);
  }
`;

export const ExperienciaItem = styled.div`
  background: rgba(0,0,0,0.4);
  border-radius: 20px;
  padding: 4vh 3vw;
  margin-bottom: 5vh;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,50,100,0.3);
  }

  &:nth-child(even) {
    margin-left: auto;
    width: 90%;
  }
`;

export const ExperienciaHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  margin-bottom: 2vh;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1vh;
    left: 0;
    width: 10vw;
    height: 2px;
    background: linear-gradient(to right, 
      rgba(0,150,255,0.3),
      transparent
    );
  }
`;

export const ExperienciaCargo = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const ExperienciaEmpresa = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  opacity: 0.9;
`;

export const ExperienciaPeriodo = styled.p`
  color: #0096ff;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  background: rgba(0,150,255,0.1);
  padding: 0.5vh 1vw;
  border-radius: 20px;
  display: inline-block;
`;

export const ExperienciaDescricao = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  opacity: 0.9;
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px ${props => props.hoverColor};
  }
`;

export const PythonIcon = styled(TechIcon)`
  color: #3776AB;
  background: rgba(55, 118, 171, 0.1);

  &:hover {
    color: #FFD43B;
    background: rgba(255, 212, 59, 0.1);
  }
`;

export const JavaScriptIcon = styled(TechIcon)`
  color: #F7DF1E;
  background: rgba(247, 223, 30, 0.1);

  &:hover {
    color: #F7DF1E;
    background: rgba(247, 223, 30, 0.2);
  }
`;

export const HtmlIcon = styled(TechIcon)`
  color: #E34F26;
  background: rgba(227, 79, 38, 0.1);

  &:hover {
    color: #E34F26;
    background: rgba(227, 79, 38, 0.2);
  }
`;

export const CssIcon = styled(TechIcon)`
  color: #1572B6;
  background: rgba(21, 114, 182, 0.1);

  &:hover {
    color: #1572B6;
    background: rgba(21, 114, 182, 0.2);
  }
`;