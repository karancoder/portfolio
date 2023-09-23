import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useSectionInViewProps = { sectionName: SectionName; threshold?: number };

export function useSectionInView({
  sectionName,
  threshold = 0.5,
}: useSectionInViewProps) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);

  return { ref };
}
