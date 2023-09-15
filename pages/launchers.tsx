/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/Lunches/Hero";
import Head from "next/head";
import { lunchers } from "@/lib/data/lunchers";
import { motion } from "framer-motion";

const Launchers = () => {
  return (
    <div>
      <Head>
        <title>Isro - Launchers</title>
      </Head>
      <Hero backgroundImage="/Lunchers/lunchers.png" title="Launchers" />

      <motion.section className=" bg-black text-white">
      <div className="container mx-auto  flex flex-col items-center">
        <div className="container mx-auto p-10">
          
          <p className="py-2 text-2xl text-center font-bold">{lunchers.desc}</p>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default Launchers;
