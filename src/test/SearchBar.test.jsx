import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  test("renders the search input", () => {
    const mockSetSearch = vi.fn(); // use jest.fn() if using Jest

    render(<SearchBar setSearch={mockSetSearch} />);

    expect(
      screen.getByPlaceholderText(/search projects/i)
    ).toBeInTheDocument();
  });

  test("calls setSearch with the typed value", async () => {
    const mockSetSearch = vi.fn(); // use jest.fn() if using Jest

    render(<SearchBar setSearch={mockSetSearch} />);

    const input = screen.getByPlaceholderText(/search projects/i);

    await userEvent.type(input, "Project");

    expect(mockSetSearch).toHaveBeenLastCalledWith("Project");
  });
});