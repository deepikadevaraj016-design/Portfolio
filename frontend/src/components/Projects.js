import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-tfly.onrender.com/api/projects")
      .then((res) => setProjects(res.data.reverse()))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-secondary">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-darkbg p-6 rounded-xl shadow-lg border border-primary/20 hover:shadow-primary/40 transition"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              {project.title}
            </h3>
            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack &&
                (Array.isArray(project.techStack)
                  ? project.techStack
                  : project.techStack.split(",")
                ).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-justify">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-purple-400 transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-purple-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
