import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-darkbg">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
        Hi, I'm Deepika
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
        Full Stack MERN Developer | Building modern web applications with a focus on UI/UX.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="mailto:deepikadevaraj016@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-3xl hover:text-purple-500 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/_.__deepi__._?igsh=Mmw1NGZpMGthcDdq"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-3xl hover:text-purple-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/deepika-mern-dev/"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-3xl hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/deepikadevaraj016-design"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-3xl hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <a
          href="#projects"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition"
        >
          See My Work
        </a>

        {/* Resume Button */}
        <a
          href="/Deepika_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
        >
          <FaFileAlt /> View Resume
        </a>
      </div>
    </section>
  );
} 