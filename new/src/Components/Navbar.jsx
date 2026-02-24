import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

export default function Navbar() {
  function toggleHandler() {
    document.getElementById("hamburger-list").classList.toggle("show");
  }

  return (
    <>
      <nav className="navbar">
        <ul id="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Project</a>
          </li>
          <li className="nav-item">
            <a href="#github">GitHub</a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1rLXIhLOP8zDVbgiDpnrlMYDVhgMs7oaM/view"
              download
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="hamburger">
        <button id="toggle" onClick={toggleHandler}>
          <GiHamburgerMenu />
        </button>
        <ul id="hamburger-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Project</a>
          </li>
          <li className="nav-item">
            <a href="#github">GitHub</a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/11nVGheK7Pj1ZPa_KAz4lffKOZ5d647Nw/view?usp=drive_link"
              download
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
