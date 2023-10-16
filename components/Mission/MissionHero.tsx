import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MissionHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string[];
  alignment?: "left" | "center" | "right";
}

const MissionHero: React.FC<MissionHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  alignment = "center",
}) => {
  const isRightAligned = alignment === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen flex bg-center bg-cover  justify-center items-center text-white p-2"
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto text-center z-50">
        <motion.div
          className="mb-4 text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className={`flex flex-col p-2 ${
              isRightAligned
                ? "lg:flex-row-reverse text-left item-start"
                : "lg:flex-row text-left"
            }`}
          >
            <div className="w-full lg:w-1/2 p-2 ">
              <h2 className="text-2xl lg:text-4xl font-bold m-2 p-2">
                {title}
              </h2>
              <p className="m-2 p-2 text-xl font-semibold">{subtitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionHero;
