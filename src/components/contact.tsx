"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

type ContactProps = {};

function Contact({}: ContactProps) {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:jivanikaran@gmail.com" className="underline">
          jivanikaran@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form action="" className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="borderBlack h-14 rounded-lg px-4"
        />
        <textarea
          placeholder="Your message"
          className="borderBlack my-3 h-52 rounded-lg p-4"
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-100 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:-translate-y-1 
          group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
