import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(div).render(<App />);
    });
  });

  it("should display some content", () => {
    render(<App />);
    const profileTitle = screen.getByText("Max Bowser");
    expect(profileTitle).toBeInTheDocument();
  });
});
