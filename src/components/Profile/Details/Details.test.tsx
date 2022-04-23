import { render, screen } from "@testing-library/react";
import { DevStory } from "../../../data/dev-story";
import Details from "./Details";

describe("Details", () => {
  it("should display projects", () => {
    const devStory: DevStory = {
      projects: [
        {
          year: 3000,
          month: 4,
          what: "project-one-what",
          about: "project-one-about",
          link: "https://example.com/one",
          tags: ["project-one-tag"],
        },
        {
          year: 5000,
          month: 11,
          what: "project-two-what",
          about: "project-two-about",
          link: "https://example.com/two",
          tags: ["project-two-tag"],
        },
      ],
      experiences: [],
    };
    render(<Details devStory={devStory} />);

    const projectsTitle = screen.getByText("Projects");
    const allProjectItems = screen.getAllByTestId("project-item");
    const experienceItem = screen.queryByTestId("experience-item");
    const projectOneWhat = screen.getByText(devStory.projects[0].what);
    const projectTwoTag = screen.getByText(devStory.projects[1].tags[0]);

    expect(projectsTitle).toBeVisible();
    expect(allProjectItems.length).toBe(2);
    expect(experienceItem).not.toBeInTheDocument();
    expect(projectOneWhat).toBeVisible();
    expect(projectTwoTag).toBeVisible();
  });

  it("should display experiences", () => {
    const devStory: DevStory = {
      projects: [],
      experiences: [
        {
          yearStart: 3000,
          monthStart: 4,
          yearEnd: 5000,
          monthEnd: 11,
          what: "experience-one-what",
          where: "experience-one-where",
          tags: ["experience-one-tag"],
        },
        {
          yearStart: 3000,
          monthStart: 4,
          yearEnd: 5000,
          monthEnd: 11,
          what: "experience-two-what",
          where: "experience-two-where",
          tags: ["experience-two-tag"],
        },
      ],
    };
    render(<Details devStory={devStory} />);

    const experiencesTitle = screen.getByText("Experience");
    const allExperienceItems = screen.getAllByTestId("experience-item");
    const projectItem = screen.queryByTestId("project-item");
    const experienceOneWhat = screen.getByText(devStory.experiences[0].what);
    const experienceTwoTag = screen.getByText(devStory.experiences[1].tags[0]);

    expect(experiencesTitle).toBeVisible();
    expect(allExperienceItems.length).toBe(2);
    expect(projectItem).not.toBeInTheDocument();
    expect(experienceOneWhat).toBeVisible();
    expect(experienceTwoTag).toBeVisible();
  });

  it("should display project & experience", () => {
    const devStory: DevStory = {
      projects: [
        {
          year: 3000,
          month: 4,
          what: "project-one-what",
          about: "project-one-about",
          link: "https://example.com/one",
          tags: ["project-one-tag"],
        },
      ],
      experiences: [
        {
          yearStart: 3000,
          monthStart: 4,
          yearEnd: 5000,
          monthEnd: 11,
          what: "experience-one-what",
          where: "experience-one-where",
          tags: ["experience-one-tag"],
        },
      ],
    };
    render(<Details devStory={devStory} />);

    const projectsTitle = screen.getByText("Projects");
    const projectItem = screen.getByTestId("project-item");
    const experiencesTitle = screen.getByText("Experience");
    const experienceItem = screen.getByTestId("experience-item");

    expect(projectsTitle).toBeVisible();
    expect(projectItem).toBeInTheDocument();
    expect(experiencesTitle).toBeVisible();
    expect(experienceItem).toBeInTheDocument();
  });
});
