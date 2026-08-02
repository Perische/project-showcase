import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "React portfolio"
  }
];

test("renders projects", () => {
  render(<ProjectList projects={projects} />);

  expect(screen.getByText("Portfolio")).toBeInTheDocument();
});