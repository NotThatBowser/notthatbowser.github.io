import React from "react";
import { DevStory } from "../../../data/dev-story";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";

type HeaderProps = {
  devStory: DevStory;
}

export default function Header(props: HeaderProps) {
  return (
    <main className="mt-8 md:flex md:px-4 md:pb-4">
      <div className="mx-4 flex-1">
        <SectionTitle title="Projects" />
        <div>
          {props.devStory.projects.map((project, i) => (
            <React.Fragment key={i}>
              <ProjectItem {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mx-4 flex-1 mt-8 md:mt-0">
        <SectionTitle title="Experience" />
        <div>
          {props.devStory.experiences.map((experience, i) => (
            <React.Fragment key={i}>
              <ExperienceItem {...experience} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-2xl font-inter mb-2">{title}</h2>;
}
