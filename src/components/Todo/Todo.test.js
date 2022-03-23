import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo testing", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Default 3 object must be tested!", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("Input and button must be on document", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("input a string to Input and submit button must be add list an object", () => {
     //fill the input 
    const name = "Khan";
    userEvent.type(input, name);
    // click on button
    userEvent.click(button);

    //assetion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
