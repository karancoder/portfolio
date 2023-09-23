import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useSectionInViewProps = { sectionName: SectionName };

export function useSectionInView({ sectionName }: useSectionInViewProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, timeOfLastClick, setActiveSection]);

  return { ref };
}
