/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface UpdateProps {
  image: string;
  title: string;
  subtitle: string;
}

const Update: React.FC<UpdateProps> = ({ image, title, subtitle }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.article className="relative min-h-screen flex">
      <div className="p-10">
        <div className="p-5">
          <img src={image} alt="" className="h-72 max-w-full" />
        </div>

        <div className="w-1/2 bg-gray-800 p-10 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold mb-4">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-white font-semibold">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default Update;
