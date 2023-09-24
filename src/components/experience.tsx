"use client";
import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";

type ExperienceProps = {};

function Experience({}: ExperienceProps) {
  const { ref } = useSectionInView({ sectionName: "Experience" });

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        <VerticalTimelineElement></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
