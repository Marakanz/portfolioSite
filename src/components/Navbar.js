import React, { useState, useEffect } from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Experience", "Projects", "Contact"];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{ fontFamily: "'DM Mono', monospace", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: scrolled ? "1rem 3rem" : "1.5rem 3rem",
          background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease"
        }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <RiCodeSSlashFill style={{ fontSize: "1.8rem", color: "var(--accent-green)" }} />
          <span className="font-display" style={{ color: "var(--text-primary)", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em" }}>
            JA
          </span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                style={{ color: "var(--text-secondary)", fontSize: "0.82rem", letterSpacing: "0.1em",
                  textDecoration: "none", transition: "color 0.2s ease", textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace" }}
                onMouseEnter={e => e.target.style.color = "var(--accent-green)"}
                onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
                <span style={{ color: "var(--accent-green)", marginRight: "0.3rem", opacity: 0.7 }}>0{i+1}.</span>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="/OLUWAJUWON_AKANDE_resume.pdf" target="_blank" rel="noreferrer"
          className="btn-outline hidden md:inline-flex"
          style={{ padding: "0.55rem 1.25rem", fontSize: "0.78rem" }}>
          Resume
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", fontSize: "1.4rem" }}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none",
            cursor: "pointer", color: "var(--text-primary)", fontSize: "1.6rem" }}>
          <IoClose />
        </button>
        {navLinks.map((link, i) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 700,
              color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseEnter={e => e.target.style.color = "var(--accent-green)"}
            onMouseLeave={e => e.target.style.color = "var(--text-primary)"}>
            <span style={{ color: "var(--accent-green)", fontSize: "0.9rem", marginRight: "0.5rem" }}>0{i+1}.</span>
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
