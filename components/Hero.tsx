// ReusableHeroSection.tsx
import React, { FC, useEffect, useState } from "react";
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

  const sectionStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the animation after a delay (e.g., 500ms)
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 500);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"} // Trigger animation when  initial="hidden"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-lg sm:text-xl md:text-2xl text-white pb-2">
            {title}
          </h2>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
            {subtitle}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="self-start ml-8 mb-16 border-2 hover:bg-white hover:text-black text-white py-3 px-10 text-lg font-semibold transition duration-300">
            {buttonText}
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ReusableHeroSection;
