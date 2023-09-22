
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface VideoHeroProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const VideoHero: FC<VideoHeroProps> = ({
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
        position: "relative", // Ensure relative positioning for absolute child
      }}
    >
      <Image
        src={backgroundImageUrl}
        alt="Background"
        layout="fill"
        objectFit="cover"
       
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto h-full relative z-10 flex items-end p-4">
        <motion.div
          className="flex flex-col"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white pb-2">
              {title}
            </h2>
            <p className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
              {subtitle}
            </p>
          </div>
          <Link href={buttonLink} className="pb-12">
            <button className="border hover:bg-white hover:text-black text-white py-4 px-16 text-lg font-semibold transition duration-300">
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoHero;
