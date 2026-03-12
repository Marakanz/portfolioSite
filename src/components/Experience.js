import React, { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Student Paddy",
    period: "May 2021 – Aug 2021",
    location: "Lagos, Nigeria",
    url: "https://www.studentpaddy.com",
    bullets: [
      "Rebuilt frontend architecture using React.js, Redux, and Tailwind CSS — improving responsiveness and reducing UI load time by 40%.",
      "Diagnosed and resolved 15+ critical bugs, accelerating product launch by 3 weeks and improving overall system stability by 40%.",
      "Collaborated with backend engineers, product managers, and UX designers to deliver user-centric features on tight deadlines.",
    ],
    tags: ["React.js", "Redux", "Tailwind CSS", "Socket.io", "REST APIs"],
    impact: ["40% faster load", "3 weeks saved", "15+ bugs fixed"],
  },
];

const clubActivities = [
  {
    org: "University of Manitoba DevClub",
    role: "Coach & Organizer",
    desc: "Coached and prepared 50+ students for hackathons and coding competitions through LeetCode prep sessions and weekly Zoom meetings.",
  },
  {
    org: "ColorStack",
    role: "Member",
    desc: "Active member in a community supporting Black and Latinx students in tech.",
  },
  {
    org: "U of M CSSA",
    role: "Member",
    desc: "Engaged in Computer Science Student Association events and networking.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", marginBottom: "4rem" }} />

      <div className="reveal" style={{ marginBottom: "3rem" }}>
        <div className="section-label" style={{ marginBottom: "0.5rem" }}>03. Experience</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.75rem" }}>
          Where I've Worked
        </h2>
        <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--accent-green), transparent)" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card reveal">
            <div className="accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
              <div>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.3rem" }}>
                  {exp.role}{" "}
                  <a href={exp.url} target="_blank" rel="noreferrer"
                    style={{ color: "var(--accent-green)", textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.target.style.opacity = "0.7"}
                    onMouseLeave={e => e.target.style.opacity = "1"}>
                    @ {exp.company}
                  </a>
                </h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--text-muted)" }}>{exp.period}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--text-muted)" }}>📍 {exp.location}</span>
                </div>
              </div>
              {/* Impact pills */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {exp.impact.map(imp => (
                  <span key={imp} style={{
                    padding: "0.3rem 0.75rem",
                    background: "rgba(74,222,128,0.08)",
                    border: "1px solid rgba(74,222,128,0.2)",
                    borderRadius: "20px",
                    fontSize: "0.72rem",
                    color: "var(--accent-green)",
                    fontFamily: "'DM Mono', monospace"
                  }}>{imp}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              {exp.bullets.map((b, j) => (
                <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.7rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "0.2rem", fontSize: "0.85rem" }}>▸</span>
                  <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>{b}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {exp.tags.map(tag => (
                <span key={tag} className="skill-badge">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Community */}
      <div className="reveal" style={{ marginTop: "3rem" }}>
        <div className="section-label" style={{ marginBottom: "1.25rem" }}>Community & Leadership</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {clubActivities.map((c, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              transition: "all 0.25s ease"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
              <div className="font-display" style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>{c.org}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--accent-green)", marginBottom: "0.65rem", letterSpacing: "0.08em" }}>{c.role}</div>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
