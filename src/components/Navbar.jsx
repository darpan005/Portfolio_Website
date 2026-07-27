import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logo" onClick={() => scrollTo("hero")}>
        Darpan<span>.</span>
      </h2>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.id} onClick={() => scrollTo(link.id)}>
            {link.label}
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
