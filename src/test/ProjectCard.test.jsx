// Import testing utilities
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Import component
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard Component", () => {

  test("renders project title", () => {
    const project = {
      title: "E-commerce Website",
      description: "A React shopping application",
    };

    render(<ProjectCard project={project} />);

    expect(
      screen.getByText("E-commerce Website")
    ).toBeInTheDocument();
  });

  test("renders project description", () => {
    const project = {
      title: "Portfolio Website",
      description: "My personal developer portfolio",
    };

    render(<ProjectCard project={project} />);

    expect(
      screen.getByText("My personal developer portfolio")
    ).toBeInTheDocument();
  });

  test("renders the project card container", () => {
    const project = {
      title: "Weather App",
      description: "Weather application",
    };

    const { container } = render(
      <ProjectCard project={project} />
    );

    expect(
      container.querySelector(".project-card")
    ).toBeInTheDocument();
  });

});