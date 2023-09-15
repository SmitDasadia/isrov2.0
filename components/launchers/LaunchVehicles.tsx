/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface LaunchVehiclesProps {
  name: string;
  description: string;
  img: string;
  path: string
  alignment: "left" | "center" | "right";
}

const LaunchVehicles: React.FC<LaunchVehiclesProps> = ({
  name,
  description,
  alignment,
  img,
  path
}) => {
  const isRightAligned = alignment === "right";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex justify-center items-center text-white p-2"
      >
        <div className="container mx-auto text-center">
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
              <div className="w-full lg:w-1/2 p-2">
                <h2 className="text-2xl lg:text-4xl font-bold m-2 p-2">
                  {name}
                </h2>
                <p className="m-2 p-2 text-lg">{description}</p>

                <div className="m-2 p-2 space-x-2 flex justify-center items-center sm:justify-start sm:items-start">
                  <Link href={path} >
                    <button
                      
                      className="relative overflow-hidden py-4 px-6 border-2 font-bold text-md group text-white bg-transparent hover:text-black cursor-pointer"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
                    </button>
                  </Link>

                 
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-2 flex justify-center items-center">
                <img
                  src={img}
                  alt={name}
                  className="w-full "
                 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LaunchVehicles;
