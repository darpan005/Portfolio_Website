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
          I am a Computer Engineering student focused on building robust backend
          systems and RESTful APIs using C# and ASP.NET Core. Experienced in
          working with Entity Framework Core, SQL Server, and integrating modern
          frontends with React. Seeking opportunities to contribute as a .NET /
          Backend Developer.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h3>2 Week</h3>
            <p>Full Stack Internship</p>
          </div>
          <div className="stat-card">
            <h3>4+</h3>
            <p>.NET & Web API Projects</p>
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
