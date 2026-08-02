import ProjectCard from "./ProjectCard";

// Component displays all projects
function ProjectList({ projects }) {
  return (
    <section className="project-list">
      <h2>Projects</h2>

      {/* Grid container for project cards */}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;