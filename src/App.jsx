import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  // Initial project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and CSS.",
      technology: "React, CSS, Vite",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application that fetches live weather data using an API.",
      technology: "React, API, JavaScript",
    },
    {
      id: 3,
      title: "Glow Beauty Skincare",
      description:
        "An e-commerce skincare website with product listings and search features.",
      technology: "React, CSS, JavaScript",
    },
  ]);

  // Stores the search input value
  const [search, setSearch] = useState("");

  // Adds a new project to the project list
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

  // Filters projects based on title or description
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase().trim()) ||
    project.description.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="app">
      <div className="main-container">

        {/* Page header */}
        <Header />

        {/* Form for adding new projects */}
        <ProjectForm addProject={addProject} />

        <div className="project-section">

          {/* Search projects */}
          <SearchBar setSearch={setSearch} />

          {/* Display filtered projects */}
          <ProjectList projects={filteredProjects} />

        </div>

        {/* Page footer */}
        <Footer />

      </div>
    </div>
  );
}

export default App;