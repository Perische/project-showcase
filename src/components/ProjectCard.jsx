function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image"></div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;