import Avatar from "../assets/images/Avatar.png";
import Ralph from "../assets/images/Ralph.png";
import Portflow from "../assets/images/Portflow.png";
import BI from "../assets/images/BIDIO.png";
import PGGEOL from "../assets/images/pggeol.png";
import FrontDevelopment from "../assets/images/frontDevelopment.png";
import BackDevelopment from "../assets/images/back_development.png";

function createProject({
  image = "",
  title,
  tech,
  deployLink = "",
  repoLink = "",
}) {
  return { image, title, tech, deployLink, repoLink };
}

export const projetosFrontEnd = [
  createProject({
    image: Portflow,
    title: "Portflow",
    tech: "JavaScript | HTML | CSS",
    repoLink: "https://github.com/GIT-YanMartins/PortflowChallenge",
  }),
  createProject({
    image: Ralph,
    title: "Jogo: Detona Ralph",
    tech: "JavaScript | HTML",
    repoLink: "https://github.com/GIT-YanMartins/Detona_ralph_DIO",
    deployLink: "https://git-yanmartins.github.io/Detona_ralph_DIO/",
  }),
  createProject({
    image: Avatar,
    title: "API de Filmes",
    tech: "JavaScript",
    repoLink: "https://github.com/GIT-YanMartins/DellChallengeAPI",
  }),
  createProject({
    image: FrontDevelopment,
    title: "Noronhaverso",
    tech: "React | JavaScript | CSS",
    deployLink: "https://git-yanmartins.github.io/Noronhaverso/",
    repoLink: "https://github.com/GIT-YanMartins/Noronhaverso",
  }),
];

export const projetosBackEnd = [
  createProject({
    image: BackDevelopment,
    title: "Calculadora de Juros Compostos",
    tech: "Python",
  }),
  createProject({
    image: BackDevelopment,
    title: "Propensão de diabetes",
    tech: "SQL | Power BI | Excel",
  }),
  createProject({
    image: BackDevelopment,
    title: "Em breve...",
    tech: "Python",
  }),
];

export const projetosPowerBI = [
  createProject({
    image: BI,
    title: "Dashboard de Vendas",
    tech: "Power BI | SQL",
    repoLink: "https://github.com/GIT-YanMartins/PowerBIChallenger",
  }),
  createProject({
    image: PGGEOL,
    title:
      "Análise de Dados para o Programa de Pós-Graduação em Geologia da UFBA",
    tech: "Power BI | Excel",
    repoLink: "https://github.com/GIT-YanMartins/Monitoramento_socialPG",
  }),
  createProject({
    title: "Relatórios Financeiros",
    tech: "Power BI | Excel",
  }),
];
