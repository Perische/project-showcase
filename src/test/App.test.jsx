// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Import custom Jest matchers like toBeInTheDocument()
import "@testing-library/jest-dom";

// Import the main App component
import App from "../App";

// Group all tests related to the App component
describe("App Component", () => {

  // Test that the application renders successfully
  test("renders the application without crashing", () => {

    // Render the App component
    render(<App />);

    // Verify that the first project is displayed
    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });

  // Test that the Header component is rendered
  test("renders the header component", () => {

    // Render the App component
    render(<App />);

    // Check that the application title from Header is displayed
    expect(
      screen.getByText(/personal project showcase app/i)
    ).toBeInTheDocument();
  });

  // Test that the initial projects are displayed
  test("renders all initial projects", () => {

    // Render the App component
    render(<App />);

    // Verify that all default projects are visible
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

});