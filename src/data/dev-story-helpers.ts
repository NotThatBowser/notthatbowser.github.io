import { DevStory } from "./dev-story";

export function getFrequencyByTag(devStory: DevStory): Map<string, number> {
  const allTags = getAllTags(devStory);
  const uniqueTags = getUniqueTags(allTags);
  const frequencyByTag = new Map<string, number>(
    uniqueTags.map((tag) => [tag, allTags.filter((t) => t === tag).length])
  );
  return frequencyByTag;
}

function getAllTags(devStory: DevStory): string[] {
  const experienceTags: string[] = devStory.experiences
    .map((experience) => experience.tags)
    .reduce((a, b) => a.concat(b));
  const projectTags: string[] = devStory.projects
    .map((project) => project.tags)
    .reduce((a, b) => a.concat(b));
  const allTags = experienceTags.concat(projectTags);
  return allTags;
}

function getUniqueTags(allTags: string[]): string[] {
  const uniqueTags = Array.from(new Set(allTags)).sort((a, b) =>
    a.localeCompare(b)
  );
  return uniqueTags;
}
