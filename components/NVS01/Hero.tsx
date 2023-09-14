
"use client";
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `url('/NVS-01/NVS-O1BG.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* <img src="/public" alt="" /> */}
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-4xl sm:text-4xl md:text-6xl text-white pb-2 font-extrabold">
            NVS-01
          </h2>
        </div>
        <div className="pt-5 pb-10">
          <Link href="https://www.youtube.com/watch?v=zYVvY4D4MKA" target="_">
            <button className="self-start ml-8 mb-16 bg-white hover:bg-black hover:text-white text-black py-4 px-16 text-lg font-semibold transition duration-300">
              ReWatch
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
