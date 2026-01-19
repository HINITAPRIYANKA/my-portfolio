import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Inject keyframes for typing and fade animations
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes typing {
        from { width: 0; }
        to { width: 48ch; }
      }
      @keyframes blink {
        50% { border-color: transparent; }
      }
      @keyframes fadeInTop {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInBottom {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes moveParticles {
        0% { background-position: 0 0; }
        100% { background-position: 100px 100px; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Inline styles
  const pageStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    overflow: "hidden",
    background: "linear-gradient(to right, #eaf6ff, #f7fbff)", // pastel icy background
    padding: "0 20px",
  };

  const particlesStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundImage: "radial-gradient(#cce6ff 1.5px, transparent 1.5px)", // softer pastel dots
    backgroundSize: "50px 50px",
    animation: "moveParticles 30s linear infinite",
  };

  const heroStyle = { position: "relative", zIndex: 1 };

  const h1Style = { 
    fontSize: "48px", 
    marginBottom: "10px", 
    color: "#1a1a1a",
    animation: "fadeInTop 1s ease forwards"
  };

  const typingStyle = { 
    fontSize: "28px",
    color: " #74086c",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "3px solid #74086c",
    width: "48ch",
    animation: "typing 4s steps(48, end) forwards, fadeInBottom 1s ease forwards",
    marginBottom: "20px",
  };

  const pStyle = {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#333",
    animation: "fadeInBottom 1s ease forwards",
    animationDelay: "0.5s",
  };

  return (
    <div style={pageStyle}>
      <div style={particlesStyle}></div>
      <div style={heroStyle}>
        <h1 style={h1Style}>Hi, Welcome to my portfolio</h1>
        <h2 style={typingStyle}>
          I am Hinita Priyanka S | Full Stack Developer
        </h2>
        <p style={pStyle}>
          Passionate Software Engineer with 2 years of experience building
          scalable web applications. Currently exploring AI and ML to enhance
          data-driven solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;
