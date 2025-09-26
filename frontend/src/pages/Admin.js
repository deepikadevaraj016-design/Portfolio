import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [about, setAbout] = useState("");
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [icon, setIcon] = useState(null);
  const [toolName, setToolName] = useState("");
  const [toolIcon, setToolIcon] = useState(null);

  // Project states
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectStack, setProjectStack] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectLive, setProjectLive] = useState("");

  const [contactEmail, setContactEmail] = useState("");

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // About
      if (about) {
        await axios.post("https://portfolio-tfly.onrender.com/api/about", { about }, { headers });
      }

      // Skills
      if (skill) {
        const formData = new FormData();
        formData.append("name", skill);
        formData.append("level", level);
        if (icon) formData.append("icon", icon);

        await axios.post("https://portfolio-tfly.onrender.com/api/skills", formData, {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        });
        setSkill("");
        setLevel("");
        setIcon(null);
      }

      // Tools
      if (toolName) {
        const formData = new FormData();
        formData.append("name", toolName);
        if (toolIcon) formData.append("icon", toolIcon);

        await axios.post("https://portfolio-tfly.onrender.com/api/tools", formData, {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        });
      }

      // Projects
      if (projectName && projectDesc) {
        await axios.post(
          "https://portfolio-tfly.onrender.com/api/projects",
          {
            title: projectName,
            description: projectDesc,
            techStack: projectStack.split(",").map(s => s.trim()),
            githubLink: projectGithub,
            liveLink: projectLive,
          },
          { headers }
        );

        setProjectName("");
        setProjectDesc("");
        setProjectStack("");
        setProjectGithub("");
        setProjectLive("");
      }

      // Contact
      if (contactEmail) {
        await axios.post("https://portfolio-tfly.onrender.com/api/contact", { email: contactEmail }, { headers });
      }

      alert("Details updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <section className="min-h-screen bg-darkbg text-primary flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl bg-black p-6 rounded-xl border border-primary shadow-lg"
      >
        {/* About */}
        <label className="flex flex-col">
          About Me
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        {/* Skills */}
        <label className="flex flex-col">
          Skill Name
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
            placeholder="e.g., React.js"
          />
        </label>

        <label className="flex flex-col">
          Level
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
            placeholder="e.g., Advanced"
          />
        </label>

        <label className="flex flex-col">
          Skill Icon
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setIcon(e.target.files[0])}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        {/* Tools */}
        <label className="flex flex-col">
          Tool / Software Name
          <input
            type="text"
            value={toolName}
            onChange={(e) => setToolName(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        <label className="flex flex-col">
          Tool Icon
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setToolIcon(e.target.files[0])}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        {/* Projects */}
        <h2 className="text-xl font-semibold mt-6 text-center">Project Details</h2>

        <label className="flex flex-col">
          Project Name
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        <label className="flex flex-col">
          Project Description
          <textarea
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        <label className="flex flex-col">
          Project Stack
          <input
            type="text"
            value={projectStack}
            onChange={(e) => setProjectStack(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
            placeholder="e.g., React, Node.js, MongoDB"
          />
        </label>

        <label className="flex flex-col">
          GitHub Link
          <input
            type="url"
            value={projectGithub}
            onChange={(e) => setProjectGithub(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
            placeholder="https://github.com/username/repo"
          />
        </label>

        <label className="flex flex-col">
          Live Link
          <input
            type="url"
            value={projectLive}
            onChange={(e) => setProjectLive(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
            placeholder="https://project-live.com"
          />
        </label>

        {/* Contact */}
        <label className="flex flex-col">
          Contact Email
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="p-3 rounded bg-darkbg text-primary"
          />
        </label>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary transition"
        >
          Save
        </button>
      </form>
    </section>
  );
}
