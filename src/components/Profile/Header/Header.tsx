import Tags from "../../common/Tags";
import { devStory, DevStory } from "../../../data/dev-story";
import { ReactComponent as GitHubLogo } from "./github-brands.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-brands.svg";
import { useMemo } from "react";

export default function Header() {
  const uniqueTags = useMemo(() => getUniqueTags(devStory), []);

  return (
    <header className="text-center">
      <h1 className="mt-8 text-4xl font-inter">Max Bowser</h1>
      <div className="mt-4 flex justify-center gap-8">
        <a href="https://github.com/NotThatBowser">
          <GitHubLogo title="GitHub" width={32} height={32} />
        </a>
        <a href="https://linkedin.com/in/maxbowser">
          <LinkedInLogo title="LinkedIn" width={32} height={32} />
        </a>
      </div>
      <Tags className="mt-4 px-4" tags={uniqueTags} />
    </header>
  );
}

function getUniqueTags(devStory: DevStory): string[] {
  const experienceTags: string[] = devStory.experiences
    .map((experience) => experience.tags)
    .reduce((a, b) => a.concat(b));
  const projectTags: string[] = devStory.projects
    .map((project) => project.tags)
    .reduce((a, b) => a.concat(b));
  const allTags = experienceTags.concat(projectTags);
  const uniqueTags = Array
    .from(new Set(allTags))
    .sort((a, b) => a.localeCompare(b));
  return uniqueTags;
}
