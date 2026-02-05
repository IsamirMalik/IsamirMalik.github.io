import projectOne from "../assets/project-one.png";
import projectTwo from "../assets/project-two.png";
import projectThree from "../assets/project-three.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="project-card first-project">
          <img src={projectOne} alt="" />
          <span className="project-description first">
            <h3 className="project-title">Tic-Tac-Toe</h3>
            <p>
              The Tic-Tac-Toe is a modern, interactive web-based implementation
              of the classic Tic-Tac-Toe game built with React. This project
              showcases advanced React concepts including component composition,
              state management with hooks, and event handling. Two players can
              compete against each other in a 3×3 grid, with full player name
              customization, move history tracking, win detection, and draw
              identification.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/IsamirMalik/Projects/tree/main/Tic-Tac-Toe"
                target="_blank"
              >
                GitHub
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
              <a
                href="https://tic-tac-toe-eta-seven-29.vercel.app/"
                target="_blank"
              >
                Let's Play
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </span>
        </div>
        <div className="project-card second-project">
          <span className="project-description second">
            <h3 className="project-title">Expense Tracker</h3>
            <p>
              The Expense Tracker is a simple yet powerful web application
              designed to help users manage their personal finances. It allows
              users to track income and expenses in real-time, calculate their
              current balance, and maintain a complete history of all
              transactions. The application uses local storage to persist data,
              ensuring that user transactions are saved even after the browser
              is closed.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/IsamirMalik/Projects/tree/main/expense-tracker"
                target="_blank"
              >
                GitHub
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
              <a
                href=" https://projects-one-orpin-50.vercel.app/"
                target="_blank"
              >
                Manage Expenses
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </span>
          <img src={projectTwo} alt="" />
        </div>
        <div className="project-card third-project">
          <img src={projectThree} alt="" />
          <span className="project-description third">
            <h3 className="project-title">Calculator</h3>
            <p>
              The Calculator is a fully functional web-based calculator
              application designed to perform basic arithmetic operations. Built
              with vanilla HTML, CSS, and JavaScript, this calculator provides a
              user-friendly interface for performing mathematical calculations
              with real-time display updates. The calculator supports addition,
              subtraction, multiplication, division, and decimal operations with
              a clean, intuitive design.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/IsamirMalik/Projects/tree/main/calculator"
                target="_blank"
              >
                GitHub
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
              <a href=" https://projects-fbz1.vercel.app/" target="_blank">
                Calculate
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </span>
        </div>
        <div className="project-card fourth-project">
          <span className="project-description fourth">
            <h3 className="project-title">Todo</h3>
            <p>
              This is an simple todo web-app with minimal and attractive UI . it offers the functionality to add / update / mark as complete and delete a todo . It use Local storage so that the data does persist across the page reload .
            </p>
            <div className="project-links">
              <a
                href="https://github.com/IsamirMalik/Projects/tree/main/todo"
                target="_blank"
              >
                GitHub
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
              <a
                href="https://todo-gilt-theta.vercel.app/"
                target="_blank"
              >
                Manage Todo
                <span className="link">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </span>
          <img src={projectTwo} alt="" />
        </div>
      </div>
    </section>
  );
}
