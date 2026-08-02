import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        ...project,
      },
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="main-container">
        <Header />
        <ProjectForm addProject={addProject} />

        <div className="project-section">
          <SearchBar setSearch={setSearch} />
          <ProjectList projects={filteredProjects} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;