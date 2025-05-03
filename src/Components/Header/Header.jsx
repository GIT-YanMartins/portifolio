import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import { HeaderContainer, Nav, NavList, NavItem, NavLink, ThemeButton } from './header_style';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contato</NavLink>
          </NavItem>
          <NavItem>
            <ThemeButton onClick={toggleTheme} aria-label="Alternar tema">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeButton>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 