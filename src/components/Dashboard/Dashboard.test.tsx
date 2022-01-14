import { render, screen } from "@testing-library/react";
import Dashboard from "components/Dashboard";

describe("<Dashboard />", () => {
  it("should render welcome text", () => {
    render(<Dashboard />);

    const title = screen.getByRole("button");
    expect(title).toBeInTheDocument();
  });
});
