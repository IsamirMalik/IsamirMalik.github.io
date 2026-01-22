import "../styles/Contact.css";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  function visibilityHandler(id) {
    // document.getElementById(id).style.transform = "scale(1)";
    let ele = document.getElementById(id).style;
    ele.transition = "all 0.8s ease-in-out";
    ele.visibility = "visible";
  }

  function hideElement(id) {
    let ele = document.getElementById(id).style;
    ele.transition = "all 0.2s ease-in-out";
    ele.visibility = "hidden";
    // document.getElementById(id).style.transform = "scale(0)";
  }
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
      </div>
      <div className="contact-container">
        <p className="contact-description">
          For any queries or collaboration opportunities, feel free to
          contact me at:
        </p>
        <ul className="contact-list">
          <li>
            <a
              href="tel: +919015040631"
              className="contact-item phone"
              onMouseEnter={() => visibilityHandler("contact-details-phone")}
              onMouseLeave={() => hideElement("contact-details-phone")}
            >
              <FaSquarePhone />
            </a>
          </li>
          <li>
            <a
              className="contact-item"
              target="_blank"
              onMouseEnter={() => visibilityHandler("contact-details-email")}
              onMouseLeave={() => hideElement("contact-details-email")}
              href="mailto:samirmalik591@gmail.com"
            >
              <FaSquareEnvelope />
            </a>
          </li>
          <li>
            <a
              className="contact-item"
              onMouseEnter={() => visibilityHandler("contact-details-whatsApp")}
              onMouseLeave={() => hideElement("contact-details-whatsApp")}
              href=""
            >
              <FaSquareWhatsapp />
            </a>
          </li>
          <li>
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/sameer-malik-907076169/"
              target="_blank"
              onMouseEnter={() => visibilityHandler("contact-details-linkedIn")}
              onMouseLeave={() => hideElement("contact-details-linkedIn")}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              className="contact-item"
              target="_blank"
              href="https://github.com/IsamirMalik"
              onMouseEnter={() => visibilityHandler("contact-details-gitHub")}
              onMouseLeave={() => hideElement("contact-details-gitHub")}
            >
              <FaGithubSquare />
            </a>
          </li>
        </ul>
        <ul className="contact-details">
          <li id="contact-details-phone">+91-901-504-0631</li>
          <li id="contact-details-email">samirmalik591@gmail.com</li>
          <li id="contact-details-whatsApp">+91-901-504-0631</li>
          <li id="contact-details-linkedIn">
            https://www.linkedin.com/in/sameer-malik-907076169/
          </li>
          <li id="contact-details-gitHub">https://github.com/IsamirMalik</li>
        </ul>
      </div>
    </section>
  );
}
