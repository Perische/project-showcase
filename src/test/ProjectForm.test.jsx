import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ProjectForm from "../components/ProjectForm";

test("submits a new project", async () => {
  const mockAddProject = jest.fn();

  render(<ProjectForm addProject={mockAddProject} />);

  const titleInput = screen.getByLabelText(/title/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const button = screen.getByRole("button", {
    name: /add/i,
  });

  await userEvent.type(titleInput, "Portfolio Website");
  await userEvent.type(
    descriptionInput,
    "A personal portfolio website built with React."
  );

  await userEvent.click(button);

  expect(mockAddProject).toHaveBeenCalledWith({
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.",
  });
});