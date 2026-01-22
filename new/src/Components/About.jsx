import sideImg from "../assets/side-img2.png";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
    <div className="about-header">
      <h2>About Me</h2>
    </div>

    <div className="about-section">
      <div className="side-img2">
        <img src={sideImg} alt="" />
      </div>
      <section className="about-content">
        <p className="about-description">
          I'm a passionate <span id="mern">MERN Stack</span> Web Developer with hands-on experience building real-world applications and solving complex problems using Data Structures and Algorithms.
        </p>
        <p>
           I thrive on learning new technologies, writing clean and efficient code, and crafting impactful digital experiences. I'm eager to grow through meaningful collaborations and contribute to projects that make a difference.
        </p>
      </section>
    </div>
    </section>
  );
}