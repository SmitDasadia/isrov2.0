import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MainheroProps {
  backgroundImageUrl: string;
  title: string;
  title2?: string;
}

const Mainhero: FC<MainheroProps> = ({
  backgroundImageUrl,
  title,
  title2
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const sectionStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
      className="flex justify-center items-center h-screen"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <motion.div
        className="container mx-auto flex flex-col justify-center h-full relative z-10 pb-10 text-center"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <div className="p-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
            {title}
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
            {title2}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Mainhero;
