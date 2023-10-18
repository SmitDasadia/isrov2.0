import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface InfoProps {
  isBgImg: boolean;
  backgroundImage: string;
  title: string;
  desc: string[];
}

const Info: React.FC<InfoProps> = ({
  backgroundImage,
  title,
  desc,
  isBgImg,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.section
      className="min-h-screen text-white"
      style={{
        background: isBgImg ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto md:px-5 pt-16 flex flex-col items-center">
        <div className="container mx-auto p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h1>

          <p className="py-2 text-lg text-start text-white font-semibold">{desc}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Info;
