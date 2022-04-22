import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should display name", () => {
    render(<Header />);
    const name = screen.getByText("Max Bowser");
    expect(name).toBeVisible();
  });
});
