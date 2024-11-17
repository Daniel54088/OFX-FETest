import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";
import { numberInputSchema } from "../../Pages/Rates/ValidationSchemas";

jest.mock("../../Pages/Rates/ValidationSchemas", () => ({
  numberInputSchema: {
    safeParse: jest.fn(),
  },
}));

describe("NumberInput Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    jest.clearAllMocks();
    console.error.mockRestore();
  });

  it("should render with the correct label and placeholder", () => {
    render(
      <NumberInput
        value="123"
        onChange={onChangeMock}
        placeholder="Enter a number"
        label="Amount"
        isError={false}
      />
    );

    expect(screen.getByLabelText("Amount")).toBeInTheDocument(); // Should pass now
    expect(screen.getByPlaceholderText("Enter a number")).toBeInTheDocument();
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();
  });

  it("should call onChange with valid input", () => {
    numberInputSchema.safeParse.mockReturnValue({ success: true });

    render(
      <NumberInput
        value="123"
        onChange={onChangeMock}
        placeholder="Enter a number"
        label="Amount"
        isError={false}
      />
    );

    const input = screen.getByPlaceholderText("Enter a number");
    fireEvent.change(input, { target: { value: "456" } });

    expect(numberInputSchema.safeParse).toHaveBeenCalledWith("456");
    expect(onChangeMock).toHaveBeenCalledWith("456");
  });

  it("should disable the input if isError is true", () => {
    render(
      <NumberInput
        value="123"
        onChange={onChangeMock}
        placeholder="Enter a number"
        label="Amount"
        isError={true}
      />
    );

    const input = screen.getByPlaceholderText("Enter a number");
    expect(input).toBeDisabled();
  });

  it("should log an error message for invalid input", () => {
    numberInputSchema.safeParse.mockReturnValueOnce({
      success: false,
      error: { errors: [{ message: "Invalid number format" }] },
    });

    render(
      <NumberInput
        value="123"
        onChange={onChangeMock}
        placeholder="Enter a number"
        label="Amount"
        isError={false}
      />
    );

    const input = screen.getByPlaceholderText("Enter a number");
    fireEvent.change(input, { target: { value: "invalid" } });

    expect(console.error).toHaveBeenCalledWith("Invalid number format");
  });
});
