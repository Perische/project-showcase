// Import useState to manage form input values
import { useState } from "react";

// Component responsible for adding new projects
function ProjectForm({addProject}){

  // Stores project title input
  const [title, setTitle] = useState("");

  // Stores project description input
  const [description, setDescription] = useState("");

  // Runs when the form is submitted
  function handleSubmit(e){

    // Prevents page refresh
    e.preventDefault();
    // Sends project information to parent component
    addProject({
      title,
      description,
    });
    // Clears form after submission
    setTitle("");
    setDescription("");
  }
  return (
    <form 
      className="project-form"
      onSubmit={handleSubmit}
    >
      {/* Section heading */}
      <h2>
        Add Project
      </h2>
      {/* Project title label */}
      <label>
        Title
      </label>
      {/* Input for project title */}
      <input
        type="text"
        value={title}
        // Updates title state when user types
        onChange={(e)=>setTitle(e.target.value)}
      />
      {/* Description label */}
      <label>
        Description
      </label>
      {/* Text area for project details */}
      <textarea
        value={description}
        // Updates description state
        onChange={(e)=>setDescription(e.target.value)}
      />
      {/* Submit button */}
      <button>
        Add
      </button>
    </form>

  );

}


// Export ProjectForm component
export default ProjectForm;