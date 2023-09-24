"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { Project } from "./project";
import SectionHeading from "./section-heading";

type ProjectsProps = {};

function Projects({}: ProjectsProps) {
  const { ref } = useSectionInView({ sectionName: "Projects" });

  return (
    <section id={"projects"} className="mb-28 scroll-mt-28" ref={ref}>
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
