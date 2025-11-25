import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />

      <header id="home" className="hero">
        <div className="container-center">
          <h1 className="hero-title animate-fade-up">Hi — I'm Sameer</h1>
          <p className="hero-sub">
            Frontend developer building responsive, accessible web experiences.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => setCount((c) => c + 1)}
            >
              Say hi ({count})
            </button>
            <a className="btn btn-ghost" href="#projects">
              See projects
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="container-center card">
            <h2 className="text-2xl font-semibold">About me</h2>
            <p className="muted">
              I build clean, responsive interfaces with JavaScript and React. I
              care about accessibility and readable code.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container-center">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="skills-list">
              <li className="skill-pill">JavaScript</li>
              <li className="skill-pill">HTML</li>
              <li className="skill-pill">CSS</li>
              <li className="skill-pill">TailwindCSS</li>
              <li className="skill-pill">MongoDB</li>
              <li className="skill-pill">Express</li>
              <li className="skill-pill">React</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-center">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="projects-grid">
              <article className="project-card">
                {" "}
                <h3 className="font-semibold">Project One</h3>{" "}
                <p className="muted">Placeholder — link will be added later.</p>{" "}
              </article>
              <article className="project-card">
                {" "}
                <h3 className="font-semibold">Project Two</h3>{" "}
                <p className="muted">Placeholder — link will be added later.</p>{" "}
              </article>
              <article className="project-card">
                {" "}
                <h3 className="font-semibold">Project Three</h3>{" "}
                <p className="muted">Placeholder — link will be added later.</p>{" "}
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container-center card">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="muted">Contact details will be added later.</p>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="container-center card">
            <h2 className="text-2xl font-semibold">Resume</h2>
            <p className="muted">Resume will be updated later.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Samir — Built with React + Vite
      </footer>
    </div>
  );
}

export default App;
