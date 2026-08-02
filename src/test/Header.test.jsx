import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../components/Header";

describe("Header Component", () => {
  test("renders the application title", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        name: /personal project showcase app/i,
      })
    ).toBeInTheDocument();
  });

  test("renders a header element", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});