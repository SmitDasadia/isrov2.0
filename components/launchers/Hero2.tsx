import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  backgroundImage: string;
  info: string;
}

const Hero2: React.FC<HeroProps> = ({ backgroundImage, info }) => {
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
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Adjust image quality as needed
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

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
