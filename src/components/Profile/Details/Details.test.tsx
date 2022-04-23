import { render, screen } from "@testing-library/react";
import { devStory } from "../../../data/dev-story";
import Details from "./Details";

describe("Details", () => {
  it("should display projects", () => {
    render(<Details />);

    const projectsTitle = screen.getByText("Projects");
    const allProjectItems = screen.getAllByTestId("project-item");
    const projectsItem = screen.getByText("Randomap");

    expect(projectsTitle).toBeVisible();
    expect(allProjectItems.length).toBe(devStory.projects.length);
    expect(projectsItem).toBeVisible();
  });

  it("should display experiences", () => {
    render(<Details />);

    const experiencesTitle = screen.getByText("Experience");
    const allExperienceItems = screen.getAllByTestId("experience-item");
    const experiencesItem = screen.getByText("Pizza Delivery Boy");

    expect(experiencesTitle).toBeVisible();
    expect(allExperienceItems.length).toBe(devStory.experiences.length);
    expect(experiencesItem).toBeVisible();
  });
});
