import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:juwonakande07@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "6rem 2rem 8rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", marginBottom: "4rem" }} />

      <div className="reveal" style={{ marginBottom: "3rem" }}>
        <div className="section-label" style={{ marginBottom: "0.5rem" }}>05. Contact</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.75rem" }}>
          Let's Work Together
        </h2>
        <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--accent-green), transparent)" }} />
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
          I'm open to internships, co-ops, and full-time opportunities. Whether you have a project in mind or just want to say hi — my inbox is open.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", flexWrap: "wrap" }}
        className="reveal">
        {/* Form */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          padding: "2rem",
          gridColumn: "span 1"
        }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <div>
              <label style={{ display: "block", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Name</label>
              <input
                className="contact-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Email</label>
              <input
                className="contact-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Message</label>
              <textarea
                className="contact-input"
                placeholder="Tell me about your project or opportunity..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
                required
                style={{ resize: "vertical", minHeight: "120px" }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              {sent ? "✓ Message Sent!" : <><FiSend size={15} /> Send Message</>}
            </button>
          </form>
        </div>

        {/* Info panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", gridColumn: "span 1" }}>
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            padding: "1.75rem",
          }}>
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>Direct Lines</div>
            {[
              { icon: <HiMail size={18} />, label: "Email", val: "juwonakande07@gmail.com", href: "mailto:juwonakande07@gmail.com" },
              { icon: <HiPhone size={18} />, label: "Phone", val: "+1-204-698-6705", href: "tel:+12046986705" },
            ].map(item => (
              <a key={item.label} href={item.href}
                style={{
                  display: "flex", gap: "1rem", alignItems: "center", padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)", textDecoration: "none",
                  transition: "all 0.2s ease", color: "inherit"
                }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = "0.5rem"}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}>
                <span style={{ color: "var(--accent-green)" }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: "0.15rem" }}>{item.val}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            padding: "1.75rem",
          }}>
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>Find Me Online</div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="https://github.com/Marakanz" target="_blank" rel="noreferrer" className="social-link">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/juwon-akande-0708a7172" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin size={20} />
              </a>
              <a href="https://akanz.netlify.app" target="_blank" rel="noreferrer" className="social-link"
                style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", color: "#94a3b8", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", transition: "all 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)"; e.currentTarget.style.color = "var(--accent-green)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.transform = ""; }}>
                🌐
              </a>
            </div>
          </div>

          {/* Availability */}
          <div style={{
            background: "rgba(74,222,128,0.04)",
            border: "1px solid rgba(74,222,128,0.15)",
            borderRadius: "16px",
            padding: "1.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 8px var(--accent-green)", display: "inline-block" }} />
              <span className="font-display" style={{ fontWeight: 700, color: "var(--accent-green)", fontSize: "0.9rem" }}>Available for Work</span>
            </div>
            <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Open to internships, co-ops, and full-time roles in software engineering. Based in Winnipeg, MB — open to remote or relocation.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          Designed & Built by <span style={{ color: "var(--accent-green)" }}>Oluwajuwon Akande</span> — 2024
        </p>
      </div>
    </section>
  );
};

export default Contact;
