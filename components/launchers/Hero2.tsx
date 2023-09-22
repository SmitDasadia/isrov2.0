import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  info: string;
}

const Hero2: React.FC<HeroProps> = ({  info }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-left bg-center bg-cover bg-opacity-100"
      style={{
        position: "relative", // Ensure relative positioning for absolute child
      }}
    >
      <motion.div
        className="container mx-auto p-10 sm:p-52"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h2 className="text-xl text-white font-semibold">{info}</h2>
      </motion.div>
    </motion.section>
  );
};

export default Hero2;
