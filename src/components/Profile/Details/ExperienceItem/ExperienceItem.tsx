import { Experience } from "../data/dev-story.d";

export default function ExperienceItem(experience: Experience) {
  const yearsString = `${experience.yearStart}-${experience.yearEnd ?? ""}`;
  const tagsString = experience.tags.join(", ");

  return (
    <div data-testid="experience-item" className="mb-2">
      <div>
        <div>
          <span className="font-inter">{experience.what}</span>
          <span className="text-xs"> ({yearsString})</span>
        </div>
        <div className="text-xs">{experience.where}</div>
      </div>
      <div className="text-xs text-slate-500">{tagsString}</div>
    </div>
  );
}
