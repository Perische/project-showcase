import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and CSS."
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that fetches live weather data using an API."
  },
  {
    id: 3,
    title: "Glow Beauty Skincare",
    description: "An e-commerce skincare website with product listings and search features."
  }
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