"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

type ProjectsProps = {};

function Projects({}: ProjectsProps) {
  const { ref } = useSectionInView({ sectionName: "Projects" });

  return (
    <section id={"projects"} className="scroll-mt-28" ref={ref}>
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
