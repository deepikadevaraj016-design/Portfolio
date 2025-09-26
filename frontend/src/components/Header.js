import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-darkbg shadow-md">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Deepika D</h1>
        <nav className="flex space-x-8"> 
          <a href="#about" className="text-2xl md:text-2xl hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="text-2xl md:text-2xl hover:text-primary transition-colors duration-300">
            Projects
          </a>
          <a href="#skills" className="text-2xl md:text-2xl hover:text-primary transition-colors duration-300">
            Skills
          </a>
          <a href="#contact" className="text-2xl md:text-2xl hover:text-primary transition-colors duration-300">
            Contact
          </a>
          <Link to="/admin" className="text-2xl md:text-2xl hover:text-primary transition-colors duration-300">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
