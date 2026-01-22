import Contact from "./Contact";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div>
        <Contact />
      </div>
      <div className="footnote">
        <p>Thank you</p>
      </div>
    </footer>
  );
}
