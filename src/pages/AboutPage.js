import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import profilePhoto from "../assets/images/yan.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  const { userName } = useContext(UserContext);

  return (
    <section className="presentation" id="sobre">
      <div className="presentation__photo">
        <img src={profilePhoto} alt="Yan Gabriel Martins" />
      </div>
      <div className="presentation__content">
        <p className="presentation__text">
          Olá <span className="presentation__name">{userName}</span>, meu nome é
          Yan Gabriel Martins, tenho 25 anos, atualmente, desenvolvo atividades na
          área da programação com ênfase em aplicações para Geologia. Desenvolvedor
          de Tecnologias Full Stack, graduando em Geologia pela Universidade Federal
          da Bahia (UFBA), atuo como estagiário no Serviço Geológico do Brasil
          (SGB), desenvolvendo métodos de classificação supervisionada em python
          para gerar Mapas Litológicos Preditivos, com o Gradient Boost.
        </p>
        <p className="presentation__text">
          Minha jornada na programação começou quando percebi que a paixão pelos
          jogos eletrônicos não eram somente jogos comuns, mas sim, um tipo de ideia
          que tinha por trás, coisas minimamente interessantes, daí, resolvi
          embarcar na jornada do desenvolvimento Front-End, entendendo os principais
          conceitos para o desenvolvimento de uma aplicação Web durante a pandemia e,
          posteriormente, decidi unir os dois conhecimentos (programação) e geologia
          (meu curso de graduação) com a ideia de automatizar/otimizar processo
          anteriormente manuais.
        </p>
      </div>
    </section>
  );
}
