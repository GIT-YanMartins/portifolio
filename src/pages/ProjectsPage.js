import {
  projetosFrontEnd,
  projetosBackEnd,
  projetosPowerBI,
} from "../data/portfolioData";
import "./ProjectsPage.css";

function isComingSoon({ image, link }) {
  const noImage = !image || image === "";
  const noLink = !link || link === "" || link === "#";
  return noImage && noLink;
}

function sectionSlug(title) {
  return title.replace(/\s+/g, "-").toLowerCase();
}

function ProjectGroup({ title, projects }) {
  const slug = sectionSlug(title);

  return (
    <section className="projects-group" aria-labelledby={`${slug}-heading`}>
      <h3 className="projects-group__title" id={`${slug}-heading`}>
        {title}
      </h3>
      <div className="projects-grid">
        {projects.map((projeto, index) => (
          <a
            key={`${slug}-${index}`}
            href={projeto.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="project-card">
              {isComingSoon(projeto) ? (
                <div className="project-card__placeholder">
                  <span>Em breve</span>
                </div>
              ) : (
                <img
                  className="project-card__image"
                  src={projeto.image}
                  alt={projeto.title}
                />
              )}
              <div className="project-card__body">
                <h3 className="project-card__title">{projeto.title}</h3>
                <p className="project-card__tech">{projeto.tech}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div id="projetos" className="projects-page">
      <ProjectGroup title="Projetos Front-end" projects={projetosFrontEnd} />
      <ProjectGroup title="Projetos Back-end" projects={projetosBackEnd} />
      <ProjectGroup title="Projetos Databases" projects={projetosPowerBI} />
    </div>
  );
}
