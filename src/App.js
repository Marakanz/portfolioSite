import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import './index.css';

function App() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", position: "relative" }}>
      {/* Ambient background gradients */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 10%, rgba(74,222,128,0.03) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 80%, rgba(96,165,250,0.03) 0%, transparent 60%)
        `,
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Intro />
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Vertical line accent */}
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
