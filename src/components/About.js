import React, { useEffect, useRef } from "react";
import photo from "../images/photo.jpeg";

const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "R"],
  "Frontend": ["React.js", "Redux", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Express.js", "FastAPI", "Django", "GraphQL"],
  "Databases": ["MongoDB", "PostgreSQL", "Redis"],
  "Cloud & DevOps": ["AWS EC2", "Docker", "CI/CD", "Linux"],
  "Tools": ["Git/GitHub", "Postman", "Figma", "WebSockets"],
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Divider line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", marginBottom: "4rem" }} />

      <div className="reveal" style={{ marginBottom: "3rem" }}>
        <div className="section-label" style={{ marginBottom: "0.5rem" }}>02. About</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.75rem" }}>
          Who I Am
        </h2>
        <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--accent-green), transparent)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
        {/* Top row: photo + bio */}
        <div style={{ display: "flex", flexDirection: "row", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Photo */}
          <div className="reveal-left" style={{ flexShrink: 0 }}>
            <div style={{
              position: "relative",
              display: "inline-block",
              padding: "3px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent-green), var(--accent-blue))",
              animation: "float 5s ease-in-out infinite"
            }}>
              <img src={photo} alt="Juwon Akande" style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                border: "4px solid var(--bg-primary)"
              }} />
            </div>
            {/* Status badge */}
            <div style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--accent-green)",
              letterSpacing: "0.1em"
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "var(--accent-green)",
                boxShadow: "0 0 8px var(--accent-green)"
              }} />
              Open to Opportunities
            </div>
          </div>

          {/* Bio */}
          <div className="reveal" style={{ flex: 1, minWidth: "280px" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", margin: "0 0 1.25rem" }}>
              I'm a Computer Science student at the <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>University of Manitoba</span> (expected July 2027), passionate about building software that's both technically robust and genuinely delightful to use.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", margin: "0 0 1.25rem" }}>
              My experience spans from rebuilding frontend architectures at startups to engineering distributed systems that handle <span style={{ color: "var(--accent-green)", fontWeight: 500 }}>large scale concurrent tasks.</span>. I enjoy the full stack — from crafting pixel-perfect UIs to designing fault-tolerant backends.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", margin: 0 }}>
              Beyond code, I coach fellow students in competitive programming through the <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>U of M DevClub</span>, and stay connected with communities like ColorStack and CSSA.
            </p>

            {/* Education */}
            <div style={{
              marginTop: "1.75rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <span style={{ fontSize: "1.2rem" }}>🎓</span>
              </div>
              <div>
                <div className="font-display" style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                  B.Sc. Computer Science
                </div>
                <div style={{ color: "var(--accent-green)", fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", margin: "0.2rem 0" }}>
                  University of Manitoba — Expected July 2027
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.3rem" }}>
                  DSA · OOP · Distributed Systems · ML · OS · Database Management · Computer Graphics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="reveal">
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>Technical Arsenal</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "1.25rem",
                transition: "all 0.25s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.15)"; e.currentTarget.style.background = "rgba(74,222,128,0.02)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--accent-green)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
                  {category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {items.map(item => (
                    <span key={item} style={{
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      background: "rgba(255,255,255,0.04)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "5px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      fontFamily: "'DM Mono', monospace"
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
