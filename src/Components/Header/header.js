import React, { useState, useEffect, useContext } from 'react';
import * as S from './header_style.js';
import { UserContext } from '../../context/UserContext';

const translations = {
  header: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato"
  }
};

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

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projetos');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <S.Header>
      <S.Logo>Olá {userName + "!" || ''}</S.Logo>
      <S.Nav menuOpen={menuOpen}>
        <S.NavLink href="#home" onClick={() => setMenuOpen(false)}>{translations.header.home}</S.NavLink>
        <S.NavLink href="#about" onClick={() => setMenuOpen(false)}>{translations.header.about}</S.NavLink>
        <S.NavLink href="#projects" onClick={scrollToProjects}>{translations.header.projects}</S.NavLink>
      </S.Nav>
      <S.MenuButton onClick={toggleMenu} menuOpen={menuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </S.MenuButton>
    </S.Header>
  );
}
