import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#resume", label: "Resume" },
  ];

  return (
    <header className="site-header">
      <nav className="nav container-center">
        <a className="brand" href="#home">
          Sameer
        </a>

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
          {links.map((l, i) => (
            <li key={l.href} className="nav-item" style={{ ["--i"]: i }}>
              <a className="nav-link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
