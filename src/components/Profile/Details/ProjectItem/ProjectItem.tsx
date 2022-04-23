import Tags from "../../../common/Tags";
import { Project } from "../data/dev-story.d";

export default function ProjectItem(project: Project) {
  return (
    <div data-testid="project-item" className="mb-2">
      <div>
        <span className="font-inter">{project.what}</span>
        {project.link && (
          <a href={project.link} title={project.link}>
            <sup>*</sup>
          </a>
        )}
        <span className="text-xs"> ({project.year})</span>
      </div>
      <div className="text-sm text-slate-800">{project.about}</div>
      <Tags tags={project.tags} />
    </div>
  );
}
