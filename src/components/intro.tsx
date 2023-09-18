"use client";

import React from "react";
import MyImage from "@/../public/my-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

type IntroProps = {};

function Intro({}: IntroProps) {
  return (
    <section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex flex-row items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={MyImage}
              width={192}
              height={192}
              quality={95}
              priority={true}
              alt="my-image"
              className="h-24 w-24 object-cover rounded-full shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="bottom-0 right-0 absolute text-2xl"
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="!leading-[1.5] mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Karan,</span> a passionate{" "}
        <span className="font-bold">full-stack engineer </span>
        with <span className="font-bold">2+ years of experience.</span> I enjoy
        building <span className="italic">softwares</span>. My focus is on{" "}
        <span className="underline">Web Development (JavaScript)</span>.
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
          Download CV <HiDownload />
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full">
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}

export default Intro;
