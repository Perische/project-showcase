// Import useState to manage form input values
import { useState } from "react";

// Component responsible for adding new projects
function ProjectForm({ addProject }) {

  // Stores project title input
  const [title, setTitle] = useState("");

  // Stores project description input
  const [description, setDescription] = useState("");

  // Runs when the form is submitted
  function handleSubmit(e) {

    // Prevents page refresh
    e.preventDefault();

    // Prevents adding empty projects
    if (!title.trim() || !description.trim()) {
      return;
    }

    // Sends project information to parent component
    addProject({
      id: Date.now(), // Creates a unique project id
      title: title.trim(),
      description: description.trim(),
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
      <label htmlFor="title">
        Title
      </label>


      {/* Input for project title */}
      <input
        id="title"
        type="text"
        value={title}

        // Updates title state when user types
        onChange={(e) => setTitle(e.target.value)}

        // Prevents empty submission
        required
      />


      {/* Description label */}
      <label htmlFor="description">
        Description
      </label>


      {/* Text area for project details */}
      <textarea
        id="description"
        value={description}

        // Updates description state when user types
        onChange={(e) => setDescription(e.target.value)}

        // Prevents empty submission
        required
      />


      {/* Submit button */}
      <button type="submit">
        Add Project
      </button>


    </form>
  );
}


// Export ProjectForm component
export default ProjectForm;