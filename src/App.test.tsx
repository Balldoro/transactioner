import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should render welcome text", () => {
    render(<App />);

    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
