import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Typewriter from "./components/Typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />

      <header id="home" className="hero">
        {/* <div className="container-center"> */}
        <h1 className="hero-title animate-fade-up">
          <Typewriter
            text={"Welcome !"}
            speed={55}
            pause={5000}
            cursor={false}
            loop={true}
          />
        </h1>
        <p className="hero-sub">
          I am Sameer, a full stack web developer. Seeking an opportunity to
          utilize my skills and abilities, in a value driven company that offers
          professional growth while being resourceful, innovative and flexible.
          Driving myself towards the development of cutting-edge technologies
          for future Indian technologic landscape.
        </p>

        {/* <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => setCount((c) => c + 1)}
            >
              Say hi ({count})
            </button>
            <a className="btn btn-ghost" href="#projects">
              See projects
            </a>
          </div> */}
        {/* </div> */}
      </header>

      <main>
        <section className="mid-section">
          <section id="about" className="section about-section">
            <h2 className="section-title">About me</h2>

            <div className="container-center card">
              <img
                src="./../public/myImage.jpg"
                alt="myImage"
                className="myImage"
              />
              <p className="about-text">
                I am a curious and passionate learner who embraces new
                challenges with enthusiasm. I take responsibility seriously,
                ensuring reliability and commitment in everything I do. With a
                friendly and approachable nature, I enjoy building positive
                connections while continuously growing both personally and
                professionally.
              </p>
            </div>
          </section>

          <section id="skills" className="section skills-section">
            <h2 className="section-title">Technical-Skills</h2>
            <div className="container-center card">
              <ul className="skills-list">
                <li className="skill-pill">JavaScript</li>
                <li className="skill-pill">HTML</li>
                <li className="skill-pill">CSS</li>
                <li className="skill-pill">TailwindCSS</li>
                <li className="skill-pill">React</li>
                <li className="skill-pill">MongoDB</li>
                <li className="skill-pill">Express</li>
                <li className="skill-pill">Firebase</li>
                <li className="skill-pill">Git</li>
                <li className="skill-pill">GitHub</li>
                <li className="skill-pill">Node.js</li>
                <li className="skill-pill">Postman</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="projects" className="section projects-section">
          <h2 className="section-title projects-title">Projects</h2>
          {/* <div className="container-center"> */}
          <div className="projects-grid">
            <article className="project-card">
              <img
                src="./../public/alertify.png"
                alt=""
                className="project-image"
              />
              <button>
                <a
                  href="https://backend-unit-5.vercel.app/"
                  className="project-btn"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/IsamirMalik/Backend-unit---5-/tree/main/project/alertify"
                  className="project-btn"
                >
                  GitHub
                </a>
              </button>
            </article>
            <article className="project-card">
              <img
                src="./../public/smart-home.png"
                className="project-image"
                alt=""
              />
              <button>
                <a
                  href="https://react-6g1vsdtw2-sameer-maliks-projects-c323985c.vercel.app/"
                  className="project-btn"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/IsamirMalik/React/tree/main/Project/smart-home-management"
                  className="project-btn"
                >
                  GitHub
                </a>
              </button>
            </article>
            {/* </div> */}
          </div>
        </section>
        <br />

        <div className="last-section">
          <section id="contact" className="section contact-section">
            <div className="container-center card socials-only">
              <h2 className="section-title">Contact :</h2>
              <div className="socials" aria-label="Social links">
                <a
                  className="social-btn"
                  href="https://www.linkedin.com/in/sameer-malik-907076169"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin aria-hidden />
                </a>

                <a
                  className="social-btn"
                  href="https://github.com/IsamirMalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub aria-hidden />
                </a>

                <a
                  className="social-btn"
                  href="mailto:samirmalik591@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope aria-hidden />
                </a>

                <a
                  className="social-btn"
                  href="tel:+919015040631"
                  aria-label="Phone"
                >
                  <FaPhone aria-hidden />
                </a>
              </div>
            </div>
          </section>

          <section id="resume" className="section resume-section">
            <div className="container-center card">
              <h2 className="section-title">
                <a
                  className="resume-link"
                  href="https://drive.google.com/file/d/18jkI-WUWCJfAoq-k4ptHNQYwjFHRSDih/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf aria-hidden />
                  <span>Resume</span>
                </a>
              </h2>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Made by Sameer
      </footer>
    </div>
  );
}

export default App;
