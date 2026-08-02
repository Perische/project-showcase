// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Import custom Jest matchers
import "@testing-library/jest-dom";

// Import the App component
import App from "../App";

describe("App Component", () => {

  test("renders the application without crashing", () => {
    render(<App />);

    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
  });

  test("renders the header component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /personal project showcase app/i,
      })
    ).toBeInTheDocument();
  });

  test("renders all initial projects", () => {
    render(<App />);

    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.getByText("Glow Beauty Skincare")).toBeInTheDocument();
  });

});