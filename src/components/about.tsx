"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

type AboutProps = {};

function About({}: AboutProps) {
  const { ref } = useSectionInView({ sectionName: "About" });

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-justify leading-8 sm:mb-40"
      ref={ref}
      id={"about"}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Intrigued by the potential of computers and captivated by their ability
        to address real-world challenges, my passion for software development
        ignited during my formative years. The allure of unraveling the
        intricacies of computer software, coupled with a budding interest in
        crafting animations and games, propelled me towards exploring
        programming and design tools like{" "}
        <span className="italic">Adobe Flash</span>,{" "}
        <span className="italic">Blender3D</span>, and{" "}
        <span className="italic">Unity</span>. As I delved deeper into the
        realms of algorithms, <span className="code">HTML</span>,{" "}
        <span className="code">CSS</span>,{" "}
        <span className="code">JavaScript</span>, and other languages during my
        school years, the profound satisfaction of logical problem-solving
        beckoned me. This passion solidified my decision to pursue Computer
        Science for my Bachelor's at{" "}
        <span className="font-bold">DA-IICT Gandhinagar</span>, enabling me to
        dive into diverse sub-disciplines such as computer networks,
        programming, and database management. Furthering my academic journey
        with a Masters in Computer Science at{" "}
        <span className="font-bold">IIT Madras</span>, I delved deeply into
        various facets of the field, particularly immersing myself in the world
        of machine learning.
        <br />
        <br />
        Commencing my professional odyssey at{" "}
        <span className="font-bold">Cisco Systems</span>, where I had the
        privilege of interning and later securing my first job, was a pivotal
        experience that propelled me into contributing to intricate software
        systems, setting the stage for my career in software engineering. My
        subsequent role at <span className="font-bold">Leap Wallet</span>{" "}
        affirmed my penchant for creating and owning products from inception,
        honing my expertise in{" "}
        <span className="font-bold">JavaScript/TypeScript</span>,{" "}
        <span className="font-bold">React.js</span>,{" "}
        <span className="font-bold">Go</span>, and{" "}
        <span className="font-bold">Python</span>. Engaging with cutting-edge
        technologies like <span className="font-bold">Next.js</span>,{" "}
        <span className="font-bold">GraphQL</span>,{" "}
        <span className="font-bold">Docker/Kubernetes</span>, and{" "}
        <span className="font-bold">Blockchains</span> further fueled my
        enthusiasm for crafting impactful solutions, each one aimed at
        simplifying users' lives—a sentiment that continues to drive my
        programming journey.
      </p>
      <br />
      <div className="flex w-full flex-row items-center justify-center">
        <div className="my-3 hidden h-1 w-32 rounded-full bg-gray-200 sm:block"></div>
      </div>
      <br />
      <p>
        In my leisure moments, you'll find me reveling in the harmonious world
        of music, a source of{" "}
        <span className="italic">perpetual inspiration</span>.{" "}
        <span className="underline">Traveling to new places</span>, with each
        journey a tapestry of experiences and cultures, enriches my perspective
        and fuels my creativity. These endeavors complement my profound love for
        coding, providing a dynamic balance between technology and life's
        vibrant tapestry.
        <br />
        <br />
        My interests extend beyond the realm of code, encompassing an{" "}
        <span className="italic">insatiable curiosity</span> for the latest
        technological advancements shaping our daily lives. The fusion of
        technology and culture fascinates me, prompting a continuous exploration
        of diverse histories and societal landscapes. I find solace in the
        immersive realms of SciFi, Fantasy, and Adventure genres, immersing
        myself in{" "}
        <span className="italic">
          thought-provoking movies, books, and series
        </span>{" "}
        that challenge and expand our notions of existence.
        <br />
        <br />
        In the quest for <span className="font-bold">perpetual growth</span>, my
        spare moments are dedicated to mastering the language of the piano—a
        pursuit that mirrors my approach to life and learning. The{" "}
        <span className="italic">melody of progress</span> and the{" "}
        <span className="italic">harmony of new knowledge</span> fuel my desire
        to continually evolve and adapt, both as a software developer and an
        enthusiast for life's boundless discoveries.
      </p>
    </motion.section>
  );
}

export default About;
