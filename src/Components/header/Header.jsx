import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { NAME_ACCESSIBILITY_PROMPT } from "../../constants/prompts";
import "./Header.css";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const name = prompt(NAME_ACCESSIBILITY_PROMPT);
    if (name) {
      setUserName(name);
      alert(`Olá, ${name}, seja bem-vindo(a)!`);
    }
  }, [setUserName]);

  return (
    <header className="site-header">
      <p className="site-header__logo">
        {userName ? `Olá ${userName}!` : "Olá"}
      </p>
      <nav
        id="site-navigation"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        aria-label="Navegação principal"
      >
        {links.map(({ to, label }) => (
          <Link
            key={to}
            className="site-nav__link"
            to={to}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className={`site-header__menu${menuOpen ? " site-header__menu--open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span className="site-header__menu-bar" />
        <span className="site-header__menu-bar" />
        <span className="site-header__menu-bar" />
      </button>
    </header>
  );
}
