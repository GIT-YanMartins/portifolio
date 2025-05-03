import React from "react";
import * as F from "./footer_style.js";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <F.Footer id="contato">
      <F.SocialLinks>
        <a href="https://www.linkedin.com/in/0yanmartins/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/yaaanxp/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:yanmartins-@outlook.com">
          <FaEnvelope size={24} />
        </a>
      </F.SocialLinks>
      <F.Copyright>&copy; 2024 Yan Gabriel Martins. Todos os direitos reservados.</F.Copyright>
    </F.Footer>
  );
}