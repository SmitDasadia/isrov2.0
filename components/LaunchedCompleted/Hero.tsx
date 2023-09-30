import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
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
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <p className="text-xl sm:text-2xl  text-white font-semibold">
            {subtitle}
          </p>
          <h2 className="text-4xl sm:text-6xl  text-white pb-2 font-extrabold">
            {title}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
