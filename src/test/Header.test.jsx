// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Import custom matchers like toBeInTheDocument()
import "@testing-library/jest-dom";

// Import BrowserRouter because Header may contain navigation links
import { BrowserRouter } from "react-router-dom";

// Import the Header component
import Header from "../components/Header";


// Group all Header component tests together
describe("Header Component", () => {


  // Test that the Header displays the title received through props
  test("renders the application title", () => {


    // Render Header and pass a title prop
    render(
      <Header title="Project Showcase" />
    );


    // Check that the title appears as a heading
    // This confirms props are being received and displayed
    expect(
      screen.getByRole("heading", {
        name: "Project Showcase"
      })
    ).toBeInTheDocument();


  });



  // Test that the semantic header element exists
  test("renders a header element", () => {


    render(
      <Header title="Project Showcase" />
    );


    // The <header> element has an accessibility role of "banner"
    expect(
      screen.getByRole("banner")
    ).toBeInTheDocument();


  });



  // Test that navigation links appear
  test("renders navigation links", () => {


    render(
      <BrowserRouter>
        <Header title="Project Showcase" />
      </BrowserRouter>
    );


    // Check that Home link exists
    expect(
      screen.getByText(/home/i)
    ).toBeInTheDocument();



    // Check that Projects link exists
    expect(
      screen.getByText(/projects/i)
    ).toBeInTheDocument();



    // Check that Contact link exists
    expect(
      screen.getByText(/contact/i)
    ).toBeInTheDocument();


  });


});