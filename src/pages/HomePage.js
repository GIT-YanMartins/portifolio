import { SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import "./HomePage.css";

const techIcons = [
  { Icon: SiPython, mod: "python", title: "Python" },
  { Icon: SiJavascript, mod: "js", title: "JavaScript" },
  { Icon: SiHtml5, mod: "html", title: "HTML5" },
  { Icon: SiCss3, mod: "css", title: "CSS3" },
];

export default function HomePage() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <h1 className="hero__title">
          Sou <span className="hero__title-accent">Yan</span>,<br />
          Desenvolvedor
        </h1>
        <div className="hero__tech" aria-label="Tecnologias">
          {techIcons.map(({ Icon, mod, title }) => (
            <span
              key={mod}
              className={`hero__tech-icon hero__tech-icon--${mod}`}
              title={title}
            >
              <Icon size={20} aria-hidden />
            </span>
          ))}
        </div>
        <p className="hero__subtitle">
          Desenvolvedor Front End / Estudante de Geologia (UFBA)
        </p>
        <a href="#contato" className="hero__cta" onClick={scrollToContact}>
          Entre em Contato!
        </a>
      </div>
    </section>
  );
}
