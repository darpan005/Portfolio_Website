import "./Skills.css";
import { motion } from "framer-motion";
import {FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiVercel, SiNpm, SiDotnet, SiDependencycheck} from "react-icons/si";
import { FaNetworkWired, FaLayerGroup} from "react-icons/fa";
import { TbBrandCSharp,TbBrandLinqpad } from "react-icons/tb";
import { DiMsqlServer,DiDotnet } from "react-icons/di";
import { LiaObjectGroup } from "react-icons/lia";
import { IoMdCreate } from "react-icons/io";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      {name:"C#", icon: <TbBrandCSharp/>},
      {name:"ASP.NET", icon: <SiDotnet/>},
      {name:"LINQ", icon: <TbBrandLinqpad/>},
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    skills: [
      {name: "SQL Server", icon:<DiMsqlServer/>},
      { name: "SQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      
      
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "npm", icon: <SiNpm  /> },      
    ],
  },
  {
    title : "Core Concepts",
    skills: [
      {name: "REST APIs", icon: <FaNetworkWired />  },    
      {name: "Entity Framework Core", icon: <DiDotnet />},
      {name: "CRUD Operations", icon: < IoMdCreate />},
      {name: "Object-Oriented Programming ", icon: <LiaObjectGroup />},
      {name: "Dependency Injection", icon: <SiDependencycheck />},
      {name: "Layered Architecture", icon: <FaLayerGroup />},
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div
            className="skill-category"
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
