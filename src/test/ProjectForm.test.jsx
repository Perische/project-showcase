// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Import userEvent to simulate user interactions
import userEvent from "@testing-library/user-event";

// Import the ProjectForm component
import ProjectForm from "../components/ProjectForm";

// Test that submitting the form calls the addProject function
test("submits a new project", async () => {

  // Create a mock function to replace addProject
  const mockAddProject = jest.fn();

  // Render the ProjectForm component
  render(<ProjectForm addProject={mockAddProject} />);

  // Find the project name input
  const input = screen.getByPlaceholderText(/project name/i);

  // Find the Add Project button
  const button = screen.getByRole("button", {
    name: /add project/i,
  });

  // Simulate the user typing a project name
  await userEvent.type(input, "Portfolio Website");

  // Simulate clicking the Add Project button
  await userEvent.click(button);

  // Verify that addProject was called with the entered project name
  expect(mockAddProject).toHaveBeenCalledWith("Portfolio Website");
});