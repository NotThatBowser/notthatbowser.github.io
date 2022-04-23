import Tags from "../../../common/Tags";
import { Experience } from "../../../../data/dev-story";

export default function ExperienceItem(experience: Experience) {
  const yearsString = `${experience.yearStart}-${experience.yearEnd ?? ""}`;

  return (
    <div data-testid="experience-item" className="mb-4">
      <div>
        <div>
          <span className="font-inter">{experience.what}</span>
          <span className="text-xs"> ({yearsString})</span>
        </div>
        <div className="text-sm text-slate-700 mb-1">{experience.where}</div>
      </div>
      <Tags tags={experience.tags} />
    </div>
  );
}
