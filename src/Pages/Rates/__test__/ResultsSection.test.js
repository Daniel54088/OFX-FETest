import React from "react";
import { render, screen } from "@testing-library/react";
import ResultsSection from "../Components/ResultSection";

jest.mock("../../../Utils/FormatNumber", () => ({
  formatNumberWithCommas: (number) => number.toString(),
}));

describe("ResultsSection", () => {
  it("renders the true and marked-up amounts", () => {
    render(<ResultsSection trueAmount={150.0} markedUpAmount={149.25} />);

    expect(screen.getByText(/true amount:/i)).toBeInTheDocument();
    expect(screen.getByText("$150.00")).toBeInTheDocument();
    expect(screen.getByText(/marked-up amount:/i)).toBeInTheDocument();
    expect(screen.getByText("$149.25")).toBeInTheDocument();
  });
});
