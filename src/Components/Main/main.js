import React, { useContext } from "react";
import * as M from "./main_style.js"
import MatrixEffect from "../MatrixEffect/MatrixEffect";
import { UserContext } from "../../context/UserContext";
import { SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Avatar from "../Assets/Avatar.png";
import Ralph from "../Assets/Ralph.png";
import Portflow from "../Assets/Portflow.png";


const translations = {
  home: {
    //hi: "Olá",
    im: "Sou",
    webDeveloper: "desenvolvedor web",
    frontEnd: "Desenvolvedor Front End",
    wordPress: "Estudante de Geologia (UFBA)",
    contactMe: "Entre em Contato!"
  },
  presentation: {
    title: "Quem sou eu?",
    paragraph1: "Olá, meu nome é Yan Gabriel Martins, tenho 25 anos, atualmente, desenvolvo atividades na área da programação com ênfase em aplicações para GeologiaDesenvolvedor de Tecnologias Full Stack, graduando em Geologia pela Universidade Federal da Bahia (UFBA), atuo como estagiário no Serviço Geológico do Brasil (SGB), desenvolvendo métodos de classificação supervisionada em python para gerar Mapas Litológicos Preditivos, com o Gradient Boost. ",
    paragraph2: "Minha jornada na programação começou quando percebi que a paixão pelos jogos eletrônicos não eram somente jogos comuns, mas sim, um tipo de ideia que tinha por trás, coisas minimamente interessantes, daí, resolvi embarcar na jornada do desenvolvimento Front-End, entendendo os principais conceitos para o desenvolvimento de uma aplicação Web durante a pandemia e, posteriormente, decidi unir os dois conhecimentos (programação) e geologia (meu curso de graduação) com a ideia de automatizar/otimizar processo anteriormente manuais"
  }
};

const experiencias = [
  {
    cargo: "Estagiário em Geologia",
    empresa: "Seviço Geológico do Brasil",
    periodo: "2024 - Presente",
    descricao: "No SGB, atuo como estagiário da Gestão de Recursos Minerais (GEREMI), desenvolvendo atividades no Projeto ETR na Folha Amargosa, das atividades desenvolvidas, tivemos: Confecção do mapa base, aquisição de dados aeroogeofísicos e mapa litológico preditivo, utilizando o Gradient Boost."
  },
  {
    cargo: "Desenvolvedor Front-end UI/UX",
    empresa: "Programa de Pós-graduação em Geologia da UFBA",
    periodo: "2022 - Presente",
    descricao: "Desenvolvo a identidade visual do Programa de Pós-graduação em Geologia da Universidade Federal da Bahia utilizando o Figma para criação de layouts que aliam estética e funcionalidade. Aplico princípios de UI/UX com o objetivo de manter a consistência visual nas páginas de comunicação — como Instagram, LinkedIn e o site oficial do Programa — garantindo uma experiência coesa em todas as plataformas. Os layouts são concebidos de forma responsiva, assegurando bom desempenho em diferentes tamanhos de tela, e com atenção à acessibilidade, permitindo que pessoas com deficiência utilizem leitores de tela (como o TalkBack) de forma eficaz na leitura dos cards desenvolvidos. Além disso, sou responsável pelo monitoramento e gestão dos insights gerados na plataforma do Instagram do Programa. A partir da coleta de dados quantitativos, organizados em planilhas no Excel (funcionando como nosso SGBD primário), realizo análises qualitativas e quantitativas no Power BI. Essas análises têm como finalidade otimizar o sistema de entregas das publicações, ampliando o alcance e a efetividade da nossa comunicação científica. Por meio desse trabalho integrado de design, acessibilidade e análise de dados, promovemos o fortalecimento da presença digital do Programa e incentivamos a colaboração com outros Programas de Pós-graduação em Geologia."
  }
];

const projetosFrontEnd = [
  {
    image: Portflow,
    title: "Portflow",
    tech: "JavaScript | HTML | CSS",
    link: "https://github.com/GIT-YanMartins/PortflowChallenge"
  },
  {
    image: Ralph,
    title: "Jogo: Detona Ralph",
    tech: "JavaScript | HTML",
    link: "https://github.com/GIT-YanMartins/Detona_ralph_DIO"
  },
  {
    image: Avatar,
    title: "API de Filmes",
    tech: "JavaScript",
    link: "https://github.com/GIT-YanMartins/DellChallengeAPI"
  }
];

const projetosBackEnd = [
  {
    image: "",
    title: "Calculadora de Juros Compostos",
    tech: "Python",
    link: ""
  },
  {
    image: "",
    title: "Propensão de diabetes ",
    tech: "SQL | Power BI | Excel",
    link: ""
  },
  {
    image: "",
    title: "Em breve...",
    tech: "Python",
    link: "#"
  }
];

const projetosPowerBI = [
  {
    image: "",
    title: "Dashboard de Vendas",
    tech: "Power BI | SQL",
    link: ""
  },
  {
    image: "",
    title: "Análise de Dados para o Programa de Pós-Graduação em Geologia da UFBA",
    tech: "Power BI | Excel",
    link: ""
  },
  {
    image: "",
    title: "Relatórios Financeiros",
    tech: "Power BI | Excel",
    link: ""
  }
];

export default function Appi() {
  const { userName } = useContext(UserContext);
  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.getElementById('contato');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <M.Main>
      <MatrixEffect />
      <M.HeroSection>
        <M.HeroContent>
          <M.Title>
            {translations.home.im} <span>Yan</span>,<br />
            {translations.home.webDeveloper}
          </M.Title>
          <M.TechStack>
            <M.PythonIcon>
              <SiPython size={20} />
            </M.PythonIcon>
            <M.JavaScriptIcon>
              <SiJavascript size={20} />
            </M.JavaScriptIcon>
            <M.HtmlIcon>
              <SiHtml5 size={20} />
            </M.HtmlIcon>
            <M.CssIcon>
              <SiCss3 size={20} />
            </M.CssIcon>
          </M.TechStack>
          <M.Subtitle>{translations.home.frontEnd} / {translations.home.wordPress}</M.Subtitle>
          <M.ContactButton onClick={scrollToContact}>{translations.home.contactMe}</M.ContactButton>
        </M.HeroContent>
      </M.HeroSection>
      <M.PresentationSection>
        <M.PhotoBox>
          <img src="sua-foto.jpg" alt="Yan Gabriel Martins" />
        </M.PhotoBox>
        <M.PresentationContent>
          <h3>Olá <span>{userName}</span>, meu nome é Yan Gabriel Martins, tenho 25 anos, atualmente, desenvolvo atividades na área da programação com ênfase em aplicações para Geologia. Desenvolvedor de Tecnologias Full Stack, graduando em Geologia pela Universidade Federal da Bahia (UFBA), atuo como estagiário no Serviço Geológico do Brasil (SGB), desenvolvendo métodos de classificação supervisionada em python para gerar Mapas Litológicos Preditivos, com o Gradient Boost.</h3>
          <h3>Minha jornada na programação começou quando percebi que a paixão pelos jogos eletrônicos não eram somente jogos comuns, mas sim, um tipo de ideia que tinha por trás, coisas minimamente interessantes, daí, resolvi embarcar na jornada do desenvolvimento Front-End, entendendo os principais conceitos para o desenvolvimento de uma aplicação Web durante a pandemia e, posteriormente, decidi unir os dois conhecimentos (programação) e geologia (meu curso de graduação) com a ideia de automatizar/otimizar processo anteriormente manuais</h3>
        </M.PresentationContent>
      </M.PresentationSection>
      <M.ExperienciasSection>
        <M.SectionTitle>Experiências Profissionais</M.SectionTitle>
        <M.ExperienciasList>
          {experiencias.map((exp, index) => (
            <M.ExperienciaItem key={index}>
              <M.ExperienciaHeader>
                <M.ExperienciaCargo>{exp.cargo}</M.ExperienciaCargo>
                <M.ExperienciaEmpresa>{exp.empresa}</M.ExperienciaEmpresa>
                <M.ExperienciaPeriodo>{exp.periodo}</M.ExperienciaPeriodo>
              </M.ExperienciaHeader>
              <M.ExperienciaDescricao>{exp.descricao}</M.ExperienciaDescricao>
            </M.ExperienciaItem>
          ))}
        </M.ExperienciasList>
      </M.ExperienciasSection>
      <div id="projetos">
        <M.ProjectSectionTitle>Projetos Front-end</M.ProjectSectionTitle>
        <M.ProjectsGrid>
          {projetosFrontEnd.map((projeto, index) => (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" key={index}>
              <M.ProjectCard>
                <M.ProjectImage src={projeto.image} alt={projeto.title} />
                <M.ProjectInfo>
                  <M.ProjectTitle>{projeto.title}</M.ProjectTitle>
                  <M.ProjectLanguage>{projeto.tech}</M.ProjectLanguage>
                </M.ProjectInfo>
              </M.ProjectCard>
            </a>
          ))}
        </M.ProjectsGrid>
        <M.ProjectSectionTitle>Projetos Back-end</M.ProjectSectionTitle>
        <M.ProjectsGrid>
          {projetosBackEnd.map((projeto, index) => (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" key={index}>
              <M.ProjectCard>
                <M.ProjectImage src={projeto.image} alt={projeto.title} />
                <M.ProjectInfo>
                  <M.ProjectTitle>{projeto.title}</M.ProjectTitle>
                  <M.ProjectLanguage>{projeto.tech}</M.ProjectLanguage>
                </M.ProjectInfo>
              </M.ProjectCard>
            </a>
          ))}
        </M.ProjectsGrid>
        <M.ProjectSectionTitle>Projetos Power BI</M.ProjectSectionTitle>
        <M.ProjectsGrid>
          {projetosPowerBI.map((projeto, index) => (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" key={index}>
              <M.ProjectCard>
                <M.ProjectImage src={projeto.image} alt={projeto.title} />
                <M.ProjectInfo>
                  <M.ProjectTitle>{projeto.title}</M.ProjectTitle>
                  <M.ProjectLanguage>{projeto.tech}</M.ProjectLanguage>
                </M.ProjectInfo>
              </M.ProjectCard>
            </a>
          ))}
        </M.ProjectsGrid>
      </div>
    </M.Main>
  );
}