import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title, subtitle }) => {
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
      
      <motion.div
        className="container mx-auto flex justify-center  items-center h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        
        <div className="p-5">
          <h2 className="text-6xl sm:text-9xl md:text-9xl text-white pb-2 font-extrabold">
            {title}
          </h2>
          <h2 className="text-6xl sm:text-5xl md:text-6xl text-white pb-2 font-extrabold">
            {subtitle}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
