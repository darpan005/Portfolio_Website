import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
    {
    title: "JobTrack",
    description:
      "A full-stack web application with a secure ASP.NET Core Web API backend and React frontend. Implements full CRUD operations, database management using Entity Framework Core, and complete API testing via Swagger and Postman.",
    github: "https://github.com/darpan005/JobTrack-.NET-",
    image: "/projects/Job-app-track.png",
  },

  {
    title: "Library Management REST API",
    description:
      "A backend REST API designed for managing library records and resources. Built with clean architecture, robust CRUD endpoints, relational data handling via EF Core, and documented with Swagger.",
    github: "https://github.com/darpan005/LibraryAPI-.NET",
    image: "/projects/library-management.png",
  },

  {
    title: "Rewind AI",
    description:
      "An AI-powered web application built using React, Node.js, and Express.js that generates intelligent responses using AI APIs with a clean and responsive user interface.",
    github: "https://github.com/darpan005/Rewind_AI",
    demo: "https://rewindai-ivory.vercel.app/",
    image: "/projects/rewind-ai.png",
  },

  {
    title: "Job Application Tracker(MERN)",
    description:
      "A React application that helps users organize and track job applications. Users can add, edit, delete, and manage application status using Local Storage.",
    github: "https://github.com/darpan005/Job_Application_Tracker",
    demo: "https://job-application-tracker-team-sage.vercel.app/",
    image: "/projects/job-tracker.png",
  },

  {
    title: "Movie Search App(MERN)",
    description:
      "A React application that fetches movie information from the OMDb API. Users can search movies and view posters, ratings, release year, and other details.",
    github: "https://github.com/darpan005/Mern_Stack",
    demo: "",
    image: "/projects/movie-search.png",
  },

  {
    title: "Expense Tracker(MERN)",
    description:
      "A React expense tracker that allows users to add, categorize, filter, and manage expenses while storing data locally in the browser.",
    github: "https://github.com/darpan005/Mern_Stack",
    demo: "",
    image: "/projects/expense-tracker.png",
  },

  {
    title: "Weather Dashboard(MERN)",
    description:
      "A responsive weather dashboard built with React that displays current weather information using a weather API with a clean and modern interface.",
    github: "https://github.com/darpan005/Weather-Dashboard",
    demo: "",
    image: "/projects/weather-dashboard.png",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;