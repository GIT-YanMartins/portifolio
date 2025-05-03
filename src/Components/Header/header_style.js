import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(0,0,0,0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0,150,255,0.1);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100,255,218,0.3);
        transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: ${props => props.menuOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(10,25,47,0.95);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(100,255,218,0.1);
  }
`;

export const NavLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
    position: relative;
  padding: 0.5rem 0;
    transition: all 0.3s ease;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
    background-color: #64ffda;
        transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(100,255,218,0.3);
    }
    
    &:hover {
    color: #ffffff;
        &::after {
            width: 100%;
        }
    }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #64ffda;
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: left center;
    box-shadow: 0 0 10px rgba(100,255,218,0.3);

    &:nth-child(1) {
      transform: ${props => props.menuOpen ? 'rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.menuOpen ? '0' : '1'};
      transform: ${props => props.menuOpen ? 'translateX(-10px)' : 'none'};
    }

    &:nth-child(3) {
      transform: ${props => props.menuOpen ? 'rotate(-45deg)' : 'none'};
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 300px;
  background: rgba(10,25,47,0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(${props => props.show ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;
  border-left: 1px solid rgba(100,255,218,0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  background: rgba(100,255,218,0.1);
  border: 1px solid rgba(100,255,218,0.2);

  &:hover {
    background: rgba(100,255,218,0.2);
    color: #64ffda;
    transform: translateX(10px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: rotate(90deg);
  }
`;

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-left: 1rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.cardBackground};

  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 35px;
    height: 35px;
  }
`;