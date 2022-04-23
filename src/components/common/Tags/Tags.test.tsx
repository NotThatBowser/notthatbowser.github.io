import { render, screen } from "@testing-library/react";
import Tags from "./Tags";

describe("Tags", () => {
  describe("when frequency is provided", () => {
    it("should display tags", () => {
      const tags: string[] = ["tag-one", "tag-two"];

      render(<Tags tags={tags} />);

      const tagOne = screen.getByText("tag-one");
      const tagTwo = screen.getByText("tag-two");

      expect(tagOne).toBeVisible();
      expect(tagTwo).toBeVisible();
    });
  });

  describe("when frequency provided", () => {
    it("should display tags", () => {
      const tags: string[] = ["tag-one", "tag-two"];

      render(<Tags tags={tags} />);

      const tagOne = screen.getByText("tag-one");
      const tagTwo = screen.getByText("tag-two");

      expect(tagOne).toBeVisible();
      expect(tagTwo).toBeVisible();
    });
  });
});
