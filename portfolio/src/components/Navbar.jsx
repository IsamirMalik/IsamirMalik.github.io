
import { useState } from "react";
import img3 from "../assets/3.png";
import "../App.css"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  
 

  return (
    <header className="site-header">
      <nav className="nav container-center">
        <div className="avatar-container">
          <img src={img3} alt="avatar" className="avatar" />
          <a className="brand" href="#home">
            Sameer
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          id="primary-navigation"
          className={`${open ? "nav-open" : "nav-closed"} nav-links`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        >
            <li className="nav-item">
              <a href="/#home" className="nav-link" target="_blank" rel="noreferrer">Home</a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link" target="_blank" rel="noreferrer">About</a>
            </li>
            <li className="nav-item">
              <a href="/#skills" className="nav-link" target="_blank" rel="noreferrer">Skills</a>
            </li>
            <li className="nav-item">
              <a href="/#projects" className="nav-link" target="_blank" rel="noreferrer">Projects</a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link" target="_blank" rel="noreferrer">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/#resume" className="nav-link" target="_blank" rel="noreferrer">Resume</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}
