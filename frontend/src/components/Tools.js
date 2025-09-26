import { useEffect, useState } from "react";
import axios from "axios";

export default function Tools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/api/tools")
      .then(res => setTools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="tools" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Tools & Software</h2>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-6xl mx-auto">
        {tools.map(tool => (
          <div key={tool._id} className="w-45 p-5 text-center hover:scale-105 transition-transform duration-300">
            {tool.icon && <img src={`http://localhost:5500${tool.icon}`} alt={tool.name} className="mx-auto mb-4 h-16" />}
            <h3 className="text-xl font-semibold text-primary">{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
