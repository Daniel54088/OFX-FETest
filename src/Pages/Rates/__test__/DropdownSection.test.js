import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DropdownSection from "../Components/DropDownSection";

jest.mock(
  "../../../Components/DropDown",
  () =>
    ({ leftIcon, label, selected, options, setSelected }) =>
      (
        <div>
          <label>{label}</label>
          <select
            aria-label={label}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.key} value={option.key}>
                {option.option}
              </option>
            ))}
          </select>
        </div>
      )
);

describe("DropdownSection", () => {
  const mockHandleCountryChange = jest.fn();

  it("renders dropdowns and loader correctly", () => {
    render(
      <DropdownSection
        fromCountry="AU"
        toCountry="US"
        handleCountryChange={mockHandleCountryChange}
        exchangeRate={1.5}
        isFetching={true}
      />
    );

    expect(screen.getByLabelText("From")).toBeInTheDocument();
    expect(screen.getByLabelText("To")).toBeInTheDocument();
  });

  it("calls handleCountryChange when dropdown value changes", () => {
    render(
      <DropdownSection
        fromCountry="AU"
        toCountry="US"
        handleCountryChange={mockHandleCountryChange}
        exchangeRate={1.5}
        isFetching={false}
      />
    );

    fireEvent.change(screen.getByLabelText("From"), {
      target: { value: "NZ" },
    });
    expect(mockHandleCountryChange).toHaveBeenCalledWith("from", "NZ");

    fireEvent.change(screen.getByLabelText("To"), { target: { value: "GB" } });
    expect(mockHandleCountryChange).toHaveBeenCalledWith("to", "GB");
  });

  it("displays the correct exchange rate when not fetching", () => {
    render(
      <DropdownSection
        fromCountry="AU"
        toCountry="US"
        handleCountryChange={mockHandleCountryChange}
        exchangeRate={1.5}
        isFetching={false}
      />
    );

    expect(screen.getByText("1.5000")).toBeInTheDocument();
  });
});
