import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tool from "./components/Tools";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-darkbg">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Tool />
              <Experience />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
