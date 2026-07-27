import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/darpan930/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/darpan005"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:darpanapatel2003@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Darpan Patel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;