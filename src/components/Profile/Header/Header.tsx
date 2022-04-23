import Tags from "../../common/Tags";
import { devStory } from "../../../data/dev-story";
import { ReactComponent as GitHubLogo } from "./github-brands.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-brands.svg";
import { useMemo } from "react";
import { getFrequencyByTag } from "../../../data/dev-story-helpers";

export default function Header() {
  const frequencyByTag = useMemo(() => getFrequencyByTag(devStory), []);

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
      <Tags
        className="mt-4 px-4"
        tags={Array.from(frequencyByTag.keys())}
        frequencyByTag={frequencyByTag}
      />
    </header>
  );
}
