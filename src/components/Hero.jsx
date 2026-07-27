import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="greeting">Hi, I'm</p>
        <h1>Darpan Patel</h1>
        <h2>Aspiring MERN Stack Developer</h2>
        <br></br>
        <p className="subtitle">Passionate about <b>React</b>, <b>JavaScript</b> & <b>Full Stack</b> Development</p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View Projects <FiArrowRight />
          </button>
          <a className="btn btn-outline" href="/resume.pdf" download>
            Download Resume <FiDownload />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src="/profile.png" alt="Darpan Patel" />
      </motion.div>
    </section>
  );
}

export default Hero;
