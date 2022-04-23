import { render, screen } from "@testing-library/react";
import Tags from "./Tags";

describe("Tags", () => {
  it("should display tag text", () => {
    const tags: string[] = ["tag-one", "tag-two"];

    render(<Tags tags={tags} />);

    const tagOne = screen.getByText("tag-one");
    const tagTwo = screen.getByText("tag-two");

    expect(tagOne).toBeVisible();
    expect(tagTwo).toBeVisible();
  });
});
