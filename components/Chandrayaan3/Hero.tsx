/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `url('/Chandrayaan3/chandrayann3lunch.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-4xl sm:text-4xl md:text-6xl text-white pb-2 font-extrabold">
            Chandrayaan-3
          </h2>
          <p className="text-3xl sm:text-3xl md:text-5xl text-white font-semibold">
            Bringing the Moon closer to us.
          </p>
        </div>
        <div className="pt-5 pb-10">
          <Link href="https://www.youtube.com/watch?v=DLA_64yz8Ss" target="_">
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
