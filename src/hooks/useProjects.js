import { useState } from "react";
import projectsData from "../data/projects";

function useProjects() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new project
  function addProject(project) {
    setProjects((prevProjects) => [
      ...prevProjects,
      project
    ]);
  }

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return {
    projects: filteredProjects,
    addProject,
    setSearchTerm
  };
}

export default useProjects;