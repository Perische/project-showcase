import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "React portfolio"
  }
];

describe("ProjectList Component", () => {
  test("renders project title", () => {
    render(<ProjectList projects={projects} />);

    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  test("renders project description", () => {
    render(<ProjectList projects={projects} />);

    expect(screen.getByText("React portfolio")).toBeInTheDocument();
  });
});