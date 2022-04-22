import { devStory } from "./dev-story";

export default function Header() {
  return (
    <main className="text-center">
      <h2 className="mt-8 text-2xl font-inter">Projects</h2>
      <div>
        {devStory.projects.map((project) => (
          <div>{project.what}</div>
        ))}
      </div>
      <h2 className="mt-8 text-2xl font-inter">Experience</h2>
      <div>
        {devStory.experiences.map((experience) => (
          <div>{experience.what}</div>
        ))}
      </div>
    </main>
  );
}
