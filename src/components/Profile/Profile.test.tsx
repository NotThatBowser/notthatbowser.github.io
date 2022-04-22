import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile", () => {
  it("should display header", () => {
    render(<Profile />);
    const name = screen.getByText("Max Bowser");
    expect(name).toBeVisible();
  });
});
