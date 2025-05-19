import React, { useState, useEffect, useContext } from 'react';
import * as S from './header_style.js';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const name = prompt('Para teste de uma funcionalidade com ênfase em acessibilidade, insira o seu nome (prometo não roubar os seus dados :p ):');
    if (name) {
      setUserName(name);
      alert(`Olá, ${name}, seja bem-vindo(a)!`);
    }
  }, [setUserName]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <S.Header>
      <S.Logo>Olá {userName + "!" || ''}</S.Logo>
      <S.Nav menuOpen={menuOpen}>
        <S.NavLink href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Início</S.NavLink>
        <S.NavLink href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre</S.NavLink>
        <S.NavLink href="#projetos" onClick={(e) => scrollToSection(e, 'projetos')}>Projetos</S.NavLink>
      </S.Nav>
      <S.MenuButton onClick={toggleMenu} menuOpen={menuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </S.MenuButton>
    </S.Header>
  );
}
