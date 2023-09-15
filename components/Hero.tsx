// ReusableHeroSection.tsx
"use client";
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ReusableHeroSectionProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const ReusableHeroSection: FC<ReusableHeroSectionProps> = ({
  backgroundImageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
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
          <h2 className="text-lg sm:text-xl md:text-2xl text-white pb-2">{title}</h2>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
            {subtitle}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="self-start ml-8 mb-16 border hover:bg-white hover:text-black text-white py-4 px-16 text-lg font-semibold transition duration-300">
            {buttonText}
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ReusableHeroSection;
