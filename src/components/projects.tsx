import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "./project";

type ProjectsProps = {};

function Projects({}: ProjectsProps) {
  return (
    <section id={"projects"} className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
