import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  backgroundImage: string;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* <img src="/public/AdityaL1/Aditya_L1Lunch2.png" alt="" /> */}
      <motion.div
        className="container mx-auto flex justify-center  items-center h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-4xl sm:text-4xl md:text-6xl text-white pb-2 font-extrabold">
            {title}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
