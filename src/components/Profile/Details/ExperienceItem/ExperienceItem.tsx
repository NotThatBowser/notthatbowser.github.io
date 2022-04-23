import Tags from "../../../common/Tags";
import { Experience } from "../../../../data/dev-story";

export default function ExperienceItem(experience: Experience) {
  const yearsString = `${experience.yearStart}-${experience.yearEnd ?? ""}`;

  return (
    <div data-testid="experience-item" className="mb-2">
      <div>
        <div>
          <span className="font-inter">{experience.what}</span>
          <span className="text-xs"> ({yearsString})</span>
        </div>
        <div className="text-xs text-slate-800">{experience.where}</div>
      </div>
      <Tags tags={experience.tags} />
    </div>
  );
}
