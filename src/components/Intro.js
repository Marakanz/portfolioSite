import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import photo from "../images/photo.jpeg";

const roles = [
  "Full-Stack Engineer",
  "Systems Designer",
  "CS @ U of Manitoba",
  "Open Source Builder",
];

const Intro = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "8rem 2rem 4rem",
      overflow: "hidden"
    }}>
      {/* Grid BG */}
      <div className="hero-grid" />
      {/* Glow orbs */}
      <div style={{
        position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)",
        top: "-100px", right: "-100px", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)",
        bottom: "-50px", left: "-100px", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "680px",
          animation: "fadeInUp 0.9s ease forwards" }}>

          <div className="section-label" style={{ opacity: 0, animation: "fadeInUp 0.8s ease 0.1s forwards" }}>
            Hello, world — I'm
          </div>

          <h1 className="font-display" style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            margin: 0,
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.2s forwards"
          }}>
            Juwon<br />
            <span className="gradient-text">Akande</span>
          </h1>

          <div style={{
            height: "2.2rem",
            display: "flex",
            alignItems: "center",
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.35s forwards"
          }}>
            <span className="font-mono-custom" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "var(--accent-blue)"
            }}>
              {displayed}
              <span className="animate-blink" style={{ color: "var(--accent-green)", marginLeft: "2px" }}>|</span>
            </span>
          </div>

          <p style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "520px",
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.45s forwards"
          }}>
            I build fast, reliable, and beautiful software — from real-time distributed systems to 
            pixel-perfect UIs. Currently studying Computer Science at the University of Manitoba, 
            always pushing boundaries.
          </p>

          {/* Stats */}
          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            opacity: 0, animation: "fadeInUp 0.8s ease 0.55s forwards"
          }}>
            {[
              { val: "40%", label: "UI load time ↓" },
              { val: "70%", label: "API latency ↓" },
              { val: "1000+", label: "concurrent tasks" },
              { val: "99.9%", label: "uptime achieved" },
            ].map(s => (
              <div key={s.label} className="stat-pill">
                <div className="font-display" style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-green)" }}>{s.val}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center",
            opacity: 0, animation: "fadeInUp 0.8s ease 0.65s forwards"
          }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
            <div style={{ display: "flex", gap: "0.75rem", marginLeft: "0.5rem" }}>
              <a href="https://github.com/Marakanz" target="_blank" rel="noreferrer" className="social-link">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/juwon-akande-0708a7172" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        color: "var(--text-muted)",
        animation: "float 2s ease-in-out infinite",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
        transition: "color 0.2s ease"
      }}
        onMouseEnter={e => { e.currentTarget.style.color = "var(--accent-green)"; }}
        onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
        <HiArrowDown size={16} />
      </a>
    </section>
  );
};

export default Intro;
