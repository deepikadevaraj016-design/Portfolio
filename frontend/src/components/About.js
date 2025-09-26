
export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 max-w-6xl mx-auto ">
      <h2 className="text-4xl font-bold text-primary mb-8 text-center">Introduction</h2>
      <p className="text-gray-300 text-lg leading-relaxed text-justify mb-8">
        I am a Full Stack Developer with 1.6 years of proven experience in building scalable and efficient web applications. I am skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js), REST APIs, Next.js, and Tailwind CSS. I am passionate about designing clean, responsive user interfaces and developing robust backend systems to deliver seamless end-to-end solutions. One of my favorite technologies to work with is React.js, especially when combined with Node.js and MongoDB to create impactful full-stack applications.
      </p>
     
      {/* Roles Section */}
      <h3 className="text-3xl font-semibold text-primary text-center mb-8 mt-2 ">My Roles</h3>
      <div className="flex flex-wrap justify-center gap-4">
        
        <span className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Web Developer
        </span>
        <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          React Developer
        </span>
        <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Backend Developer
        </span>
        <span className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Full Stack Developer
        </span>
      </div>

    </section>
  );
}
