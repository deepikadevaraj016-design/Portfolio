import { useEffect, useState } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/api/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Skills</h2>
     <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-6xl mx-auto">
      {skills.map(skill => (
        <div
          key={skill._id}
          className="w-45 p-5 text-center hover:scale-105 transition-transform duration-300">
          <div className="mb-4">
            {skill.icon && (
              <img
                src={`http://localhost:5500${skill.icon}`} // prepend server URL
                alt={skill.name}
                className="mx-auto mb-4 h-16"
              />
            )}
          </div>
          <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
          <p className="text-gray-300">{skill.level}</p>
        </div>
      ))}
</div>

    </section>
  );
}
