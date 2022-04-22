import { Project } from "../data/dev-story.d";

export default function ProjectItem(project: Project) {
  const tagsString = project.tags.join(", ");

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
      <div className="text-sm">{project.about}</div>
      <div className="text-xs text-slate-500">{tagsString}</div>
    </div>
  );
}
