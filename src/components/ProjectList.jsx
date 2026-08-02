import ProjectCard from "./ProjectCard";


// Component displays all projects
function ProjectList({projects}){
  return (
    <div className="project-list">
      {/* Loop through projects array
          and create a card for each project */}
      {
        projects.map(project => (
          <ProjectCard
            // Unique key required by React
            key={project.id}
            // Sends project data to card
            project={project}
          />
        ))
      }

    </div>
  );

}

export default ProjectList;