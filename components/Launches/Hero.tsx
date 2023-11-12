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
        position: "relative", // Ensure relative positioning for absolute child
      }}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
       
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-5"></div>

      {/* Content */}
      <motion.div
        className="container mx-auto flex justify-center items-center h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="p-5">
          <h2 className="text-5xl sm:text-6xl md:text-6xl text-white pb-2 font-extrabold text-center">
            {title}
          </h2>
          <h2 className="text-2xl text-center text-white pb-2 font-semibold">
            {subtitle}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
