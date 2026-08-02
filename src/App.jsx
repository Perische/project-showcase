import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import initialProjects from "./data/project";

function App() {
  // Stores all projects
  const [projects, setProjects] = useState(initialProjects);

  // Stores search text
  const [search, setSearch] = useState("");

  // Adds a new project
  function addProject(project) {
    // Prevent empty submissions
    if (!project.title.trim() || !project.description.trim()) {
      return;
    }

    setProjects((previousProjects) => [
      ...previousProjects,
      {
        id: Date.now(),
        ...project,
      },
    ]);
  }

  // Filter projects by title or description
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase().trim()) ||
    project.description.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="app">
      <div className="main-container">
        <Header />

        <ProjectForm addProject={addProject} />

        <div className="project-section">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <ProjectList projects={filteredProjects} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;