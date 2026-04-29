import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/0yanmartins/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://github.com/GIT-YanMartins",
    label: "GitHub",
    Icon: FaGithub,
    external: true,
  },
  {
    href: "mailto:yanmartins-@outlook.com",
    label: "E-mail",
    Icon: FaEnvelope,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="site-footer__social">
        {socialLinks.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon size={24} aria-hidden />
          </a>
        ))}
      </div>
      <p className="site-footer__copyright">
        &copy; 2024 Yan Gabriel Martins. Todos os direitos reservados.
      </p>
    </footer>
  );
}
