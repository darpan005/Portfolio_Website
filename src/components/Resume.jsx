import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume">
      <h2 className="section-title">
        My <span>Resume</span>
      </h2>

      <motion.div
        className="resume-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Explore my education, technical skills, internship experience,
          projects, and achievements in one place. Download my resume to learn
          more about my journey and qualifications.
        </p>
        <a className="btn btn-primary" href="/resume.pdf" download>
          Download Resume <FiDownload />
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;
