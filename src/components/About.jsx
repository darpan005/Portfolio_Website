import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I'm a Computer Engineering student with a strong interest in web
          development and problem-solving. I enjoy building responsive and
          user-friendly web applications using React, JavaScript, and the MERN
          stack. Over the past few months, I've completed multiple frontend
          projects to strengthen my React skills and I'm currently expanding
          into full-stack development with Node.js, Express.js, and MongoDB. I'm
          actively looking for internship opportunities where I can contribute
          to real-world projects, learn from experienced developers, and
          continue growing as a software engineer.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h3>2 Week</h3>
            <p>Full Stack Internship</p>
          </div>
          <div className="stat-card">
            <h3>6+</h3>
            <p>React Mini Projects</p>
          </div>
          <div className="stat-card">
            <h3>7th</h3>
            <p>Semester, Comp. Engg.</p>
          </div>

          <div className="stat-card">
            <h3>1</h3>
            <p>Hackathon Participated</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
