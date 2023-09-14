import React, { useState } from "react";
import { motion } from "framer-motion";
import { Chandrayaan3 } from "@/lib/data/Chandrayaan3";
import Link from "next/link";

const Info = () => {
  return (
    <motion.section className="min-h-screen bg-black text-white">
      <div className="container mx-auto md:px-5 pt-16 flex flex-col items-center">
        <div className="container mx-auto p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Chandrayaan3
          </h1>
          <p className="py-2 text-lg text-start">{Chandrayaan3.description1}</p>
        </div>
        <div className="pb-10">
          <Link href={Chandrayaan3.moreInfo} target="_">
            <button className="flex justify-center items-center border hover:bg-white hover:text-black  py-4 px-16 text-lg font-semibold transition duration-300">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Info;
