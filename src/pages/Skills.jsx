import { FaReact, FaDatabase, FaServer, FaRobot } from "react-icons/fa";

function Skills() {
  return (
    <div className="page-container">
      <h1>Skills</h1>

      <div className="skills-container">
        <div className="skill-card">
          <FaReact className="skill-icon" color="#61DBFB" />
          <h3>Frontend</h3>
          <p>React.js, HTML, CSS, JavaScript, UI/UX</p>
        </div>

        <div className="skill-card">
          <FaServer className="skill-icon" color="#555" />
          <h3>Backend</h3>
          <p>.NET, C#, ASP.NET Core</p>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" color="#f29111" />
          <h3>Database</h3>
          <p>MySQL, SQL Server</p>
        </div>

        <div className="skill-card">
          <FaRobot className="skill-icon" color="#00bfff" />
          <h3>AI / ML</h3>
          <p>AI & ML Concepts</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
