import { render, screen } from "@testing-library/react";
import { Project } from "../../../../data/dev-story";
import ProjectItem from "./ProjectItem";

describe("ProjectItem", () => {
  it("should display all fields", () => {
    const project: Project = {
      year: 3000,
      month: 4,
      what: "project-what",
      about: "project-about",
      tags: ["tag-one", "tag-two"],
      link: "https://example.com",
    };
    render(<ProjectItem {...project} />);

    const year = screen.getByText(project.year, { exact: false });
    const what = screen.getByText(project.what);
    const about = screen.getByText(project.about);
    const tagOne = screen.getByText(project.tags[0], { exact: false });
    const tagTwo = screen.getByText(project.tags[1], { exact: false });
    const linkByRole = screen.getByRole("link");
    const linkByText = screen.getByText("*");
    const linkByTitle = screen.getByTitle(project.link!);

    expect(year).toBeVisible();
    expect(what).toBeVisible();
    expect(about).toBeVisible();
    expect(tagOne).toBeVisible();
    expect(tagTwo).toBeVisible();
    expect(linkByRole).toBeVisible();
    expect(linkByText).toBeVisible();
    expect(linkByTitle).toBeVisible();
  });

  describe("without link", () => {
    it("should not display a link", () => {
      const project: Project = {
        year: 3000,
        month: 4,
        what: "project-what",
        about: "project-about",
        tags: ["tag-one", "tag-two"],
        link: null,
      };
      render(<ProjectItem {...project} />);

      const linkByRole = screen.queryByRole("link");
      const linkByText = screen.queryByText("*");

      expect(linkByRole).not.toBeInTheDocument();
      expect(linkByText).not.toBeInTheDocument();
    });
  });
});
