export default function Experience() {
  const workExperiences = [
    {
      company: "Maxima Automation Solutions Pvt Ltd",
      role: "Software Developer",
      duration: "09/2024 – Present | Chennai, India",
      details: [
        "Developed full-stack web application features using the MERN stack with scalable architecture and clean code practices.",
        "Built responsive, mobile-first UI components using React.js, JavaScript, and Material-UI, ensuring accessibility and cross-browser compatibility.",
      ],
    },
    {
      company: "Urbancode Edutech Pvt Solutions",
      role: "React UI Developer",
      duration: "02/2024 – 08/2024",
      details: [
        "Developed interactive, responsive user interfaces using React.js, React Router, and Material-UI.",
        "Optimized performance across devices for smooth and responsive UX.",
      ],
    },
  ];

  const internships = [
    {
      company: "DECATHLON SPORTS INDIA PVT LTD",
      role: "Omni Sports Leader (Internship)",
      duration: "3 Months",
      details: [
        "Maintained customer relationships and implemented customer-centric initiatives, increasing satisfaction scores by 15%.",
        "Drove a 20% surge in sales revenue within the Omni Sports department through strategic merchandising and promotions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto">
      {/* Work Experience */}
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-primary/50 pl-6 space-y-10 mb-16">
        {workExperiences.map((exp, index) => (
          <div key={index} className="relative">
           <span className="absolute left-[-35px] top-7 w-5 h-5 rounded-full bg-primary border-4 border-darkbg"/>


            {/* Card */}
            <div className="bg-darkbg p-6 rounded-lg shadow-md border border-primary/20 hover:shadow-primary/40 transition">
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Internships */}
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Internships
      </h2>
      <div className="relative border-l-2 border-primary/50 pl-6 space-y-10">
        {internships.map((intern, index) => (
          <div key={index} className="relative">
            <span className="absolute left-[-35px] top-7 w-5 h-5 rounded-full bg-primary border-4 border-darkbg"/>
            <div className="bg-darkbg p-6 rounded-lg shadow-md border border-primary/20 hover:shadow-primary/40 transition">
              <h3 className="text-2xl font-semibold text-white">{intern.role}</h3>
              <p className="text-primary font-medium">{intern.company}</p>
              <p className="text-gray-400 text-sm mb-3">{intern.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                {intern.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
            