import { useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    home: <Home />,
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects />,
    contact: <Contact />,
  };

  const nodeRef = useRef(null); // Add nodeRef

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="main-content">
        <SwitchTransition>
          <CSSTransition
            key={currentPage}
            timeout={400}
            classNames="fade"
            nodeRef={nodeRef} // Pass nodeRef
          >
            <div ref={nodeRef}>{pages[currentPage]}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
