// Import testing utilities
import { render, screen } from "@testing-library/react";

// Import userEvent to simulate typing
import userEvent from "@testing-library/user-event";

// Import custom Jest matchers
import "@testing-library/jest-dom";

// Import the SearchBar component
import SearchBar from "../components/SearchBar";

// Test that the search input is displayed
test("renders the search input", () => {

  // Create a mock function for setSearch
  const mockSetSearch = vi.fn();

  // Render the SearchBar component
  render(<SearchBar setSearch={mockSetSearch} />);

  // Verify the search input is present
  expect(
    screen.getByPlaceholderText(/search projects/i)
  ).toBeInTheDocument();
});

// Test that typing in the search bar updates the search value
test("calls setSearch when typing", async () => {

  // Create a mock function
  const mockSetSearch = vi.fn();

  // Render the component
  render(<SearchBar setSearch={mockSetSearch} />);

  // Locate the search input
  const input = screen.getByPlaceholderText(/search projects/i);

  // Simulate typing
  await userEvent.type(input, "Project");

  // Verify the callback was called
  expect(mockSetSearch).toHaveBeenCalled();
});