import {
  projetosFrontEnd,
  projetosBackEnd,
  projetosPowerBI,
} from "../data/portfolioData";
import "./ProjectsPage.css";

const projectSections = [
  { title: "Projetos Front-end", projects: projetosFrontEnd },
  { title: "Projetos Back-end", projects: projetosBackEnd },
  { title: "Projetos Databases", projects: projetosPowerBI },
];

const projectActions = [
  { key: "deployLink", label: "Deploy" },
  { key: "repoLink", label: "Repositório" },
];

const hasValidLink = (link) => Boolean(link) && link !== "#";

function isComingSoon({ image, deployLink, repoLink }) {
  const noImage = !image;
  const noLink = !hasValidLink(deployLink) && !hasValidLink(repoLink);
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
          <article className="project-card" key={`${slug}-${index}`}>
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
              <div className="project-card__actions">
                {projectActions.map(({ key, label }) =>
                  hasValidLink(projeto[key]) ? (
                    <a
                      key={label}
                      className="project-card__button"
                      href={projeto[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ) : (
                    <span
                      key={label}
                      className="project-card__button project-card__button--disabled"
                      aria-disabled="true"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div id="projetos" className="projects-page">
      {projectSections.map(({ title, projects }) => (
        <ProjectGroup key={title} title={title} projects={projects} />
      ))}
    </div>
  );
}
