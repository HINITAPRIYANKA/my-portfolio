function Projects() {
  const projects = [
    {
      name: "Sentiment and Emotion Analysis Framework",
      desc:
        "A project that detects and analyzes unstructured data from hate speech on Facebook using AI techniques. It classifies text for sentiment (positive, negative, neutral) and identifies emotions to help with social media monitoring.",
      tech: [
        "Python",
        "NLP (Natural Language Processing)",
        "AI / ML concepts",
        "Data preprocessing",
        "Text classification",
      ],
      duration: "Feb 2023 – Apr 2023",
      role: "AI/ML Developer",
      learnings: [
        "Gained hands-on experience in NLP for text classification.",
        "Learned to preprocess unstructured social media data effectively.",
        "Implemented ML and deep learning models for sentiment & emotion detection.",
        "Improved skills in Python, TensorFlow, and PyTorch.",
        "Learned to evaluate model performance using metrics like F1-score and accuracy.",
      ],
    },
    {
      name: "KGV Sales Part No Configurator",
      desc: "Migrated legacy ASP.NET configurator to React + .NET Core platform. Redesigned UI, built REST APIs, validated migrated data.",
      tech: ["React.js", ".NET Core Web API", "SQL Server"],
      duration: "Jun 2024 – Aug 2024",
      role: "Full-stack Developer",
      learnings: ["Migration experience", "Performance tuning"],
    },
    {
      name: "Quick Config",
      desc: "Developed quick configurator to test actuator options in imperial & metric units.",
      tech: ["React.js", ".NET Core", "SQL Server"],
      duration: "Sep 2024 – Nov 2024",
      role: "Developer & Tester",
      learnings: ["Engineering data mapping", "Testing workflows"],
    },
    {
      name: "Engineering Part No Configurator",
      desc: "Built engineering-specific configurator to generate part numbers with all configurable options.",
      tech: ["React.js", ".NET Core", "SQL Server"],
      duration: "Dec 2024 – Feb 2025",
      role: "Full-stack Developer",
      learnings: ["Rule-driven backend design", "Validation handling"],
    },
    {
      name: "Master Data Management",
      desc: "Developed module to manage dropdowns, permissions, and sub-component data.",
      tech: ["React.js", ".NET Core", "SQL Server"],
      duration: "Feb 2025 – Mar 2025",
      role: "Backend + Admin Module Developer",
      learnings: ["Scalable data management", "Admin tools experience"],
    },
    {
      name: "Bill of Materials (BOM) Roadmap",
      desc: "Built BOM history module to track part numbers and historical usage across components.",
      tech: ["React.js", ".NET Core", "SQL Server"],
      duration: "Mar 2025 – Apr 2025",
      role: "Developer",
      learnings: ["BOM structuring", "SQL tracing"],
    },
    {
      name: "HR and Active Directory Integration",
      desc: "Automated HR–AD synchronization. Built APIs to fetch HR data, compare with AD, and auto-update mismatches.",
      tech: ["React.js", "HTML", "CSS", ".NET Core Web API", "MySQL", "LDAP"],
      duration: "May 2025 – Aug 2025",
      role: "Backend & Integration Developer",
      learnings: ["Enterprise integration", "Data sync", "Security"],
    },
  ];

  return (
    <div className="page-container projects-page">
      <h1>Projects</h1>
      {projects.map((proj, i) => (
        <div key={i} className="project-card">
          <h3>{proj.name}</h3>
          <p>{proj.desc}</p>
          <p>
            <strong>Tech:</strong> {proj.tech.join(", ")}
          </p>
          <p>
            <strong>Duration:</strong> {proj.duration}
          </p>
          <p>
            <strong>Role:</strong> {proj.role}
          </p>
          {proj.learnings && (
            <div className="project-learnings">
              <strong>Learnings:</strong>
              <ul>
                {proj.learnings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;


