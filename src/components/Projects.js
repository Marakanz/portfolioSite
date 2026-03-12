import React, { useEffect, useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "./data";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", marginBottom: "4rem" }} />

      <div className="reveal" style={{ marginBottom: "3rem" }}>
        <div className="section-label" style={{ marginBottom: "0.5rem" }}>04. Projects</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.75rem" }}>
          Things I've Built
        </h2>
        <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--accent-green), transparent)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <div key={i} className={`project-card reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
            {/* Image */}
            <div className="project-img-wrap" style={{ overflow: "hidden", position: "relative" }}>
              <img src={project.img} alt={project.name} />
              {/* Overlay with links */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(17,24,39,0.95) 100%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "1rem",
                gap: "0.75rem"
              }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "0.4rem",
                      color: "var(--text-secondary)", fontSize: "0.8rem",
                      textDecoration: "none", fontFamily: "'DM Mono', monospace",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent-green)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}>
                    <FiGithub size={14} /> GitHub
                  </a>
                )}
                <a href={`https://${project.url}`} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    color: "var(--text-secondary)", fontSize: "0.8rem",
                    textDecoration: "none", fontFamily: "'DM Mono', monospace",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent-green)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}>
                  <FiExternalLink size={14} /> Live
                </a>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem" }}>
              {/* Number + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--accent-green)", opacity: 0.6 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display" style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                {project.desc}
              </p>

              {/* Impact metrics
              {project.metrics && (
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  
                </div>
              )} */}

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tools.map(tool => (
                  <span key={tool} className="skill-badge">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
