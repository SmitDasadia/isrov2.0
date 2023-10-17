/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface UpdateProps {
  image: string;
  title: string;
  subtitle: string;
  desc: string[] | string;
}

const Update: React.FC<UpdateProps> = ({ image, title, subtitle,desc }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.article className="relative min-h-screen flex border-b-[0.2px]">
      <div className="p-3">
        <div className="p-2">
          <img src={image} alt="" className="w-full h-1/2" />
        </div>

        <div className="p-2 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <p className="text-lg sm:text-xl text-gray-300 font-semibold pb-2">
              {subtitle}
            </p>
            <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-semibold">
              {desc}
            </p>
            
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default Update;
