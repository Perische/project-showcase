// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Import custom matchers like toBeInTheDocument()
import "@testing-library/jest-dom";

// Import the component being tested
import ProjectCard from "./ProjectCard";


// Group all ProjectCard tests together
describe("ProjectCard Component", () => {



  // Test that the project title is displayed
  test("renders project title", () => {


    // Arrange:
    // Create sample project data to pass as props
    const project = {
      title: "E-commerce Website",
      description: "A React shopping application",
      image: "https://example.com/image.jpg",
    };


    // Act:
    // Render the ProjectCard component
    render(
      <ProjectCard project={project} />
    );


    // Assert:
    // Check that the title appears on the page
    expect(
      screen.getByText("E-commerce Website")
    ).toBeInTheDocument();


  });





  // Test that the project description is displayed
  test("renders project description", () => {


    const project = {
      title: "Portfolio Website",
      description: "My personal developer portfolio",
      image: "portfolio.png",
    };


    render(
      <ProjectCard project={project} />
    );


    // Verify the description appears
    expect(
      screen.getByText("My personal developer portfolio")
    ).toBeInTheDocument();


  });





  // Test that the project image displays correctly
  test("renders project image with correct alt text", () => {


    const project = {
      title: "Weather App",
      description: "A weather tracking application",
      image: "weather.png",
    };


    render(
      <ProjectCard project={project} />
    );


    // Find image using accessibility text
    const image = screen.getByAltText("Weather App");


    // Confirm image exists
    expect(image)
      .toBeInTheDocument();


  });





  // Test that the ProjectCard component renders a card container
  test("renders project card container", () => {


    const project = {
      title: "Blog Application",
      description: "A blogging platform",
      image: "blog.png",
    };


    render(
      <ProjectCard project={project} />
    );


    // If your ProjectCard uses <article>
    // this confirms the component structure exists
    expect(
      screen.getByRole("article")
    ).toBeInTheDocument();


  });





  // Test that the details button/link exists
  // Remove this test if your ProjectCard does not have one
  test("renders project details link", () => {


    const project = {
      title: "Task Manager",
      description: "A productivity application",
      image: "tasks.png",
    };


    render(
      <ProjectCard project={project} />
    );


    expect(
      screen.getByRole("link", {
        name: /details/i
      })
    ).toBeInTheDocument();


  });


});