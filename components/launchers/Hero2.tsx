import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  info: string;
}

const Hero2: React.FC<HeroProps> = ({ info }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center relative"
      
    >
      <motion.div
        className="container mx-auto p-4 sm:p-10 md:p-10 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h2 className="text-xl sm:text-3xl md:text-2xl text-white font-semibold">
          {info}
        </h2>
      </motion.div>
    </motion.section>
  );
};

export default Hero2;
