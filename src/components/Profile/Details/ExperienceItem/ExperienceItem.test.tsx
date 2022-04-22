import { render, screen } from "@testing-library/react";
import { Experience } from "../data/dev-story.d";
import ExperienceItem from "./ExperienceItem";

describe("ExperienceItem", () => {
  it("should display all fields", () => {
    const experience: Experience = {
      yearStart: 3000,
      monthStart: 4,
      yearEnd: 5000,
      monthEnd: 11,
      what: "experience-what",
      where: "experience-where",
      tags: ["tag-one", "tag-two"],
    };
    render(<ExperienceItem {...experience} />);

    const yearRange = screen.getByText("3000-5000", { exact: false });
    const what = screen.getByText(experience.what);
    const where = screen.getByText(experience.where);
    const tagOne = screen.getByText(experience.tags[0], { exact: false });
    const tagTwo = screen.getByText(experience.tags[1], { exact: false });

    expect(yearRange).toBeVisible();
    expect(what).toBeVisible();
    expect(where).toBeVisible();
    expect(tagOne).toBeVisible();
    expect(tagTwo).toBeVisible();
  });

  describe("without end date", () => {
    it("should display curtailed date range", () => {
      const experience: Experience = {
        yearStart: 3000,
        monthStart: 4,
        yearEnd: null,
        monthEnd: null,
        what: "experience-what",
        where: "experience-where",
        tags: ["tag-one", "tag-two"],
      };
      render(<ExperienceItem {...experience} />);

      const yearRange = screen.getByText("3000-", { exact: false });

      expect(yearRange).toBeVisible();
    });
  });
});
