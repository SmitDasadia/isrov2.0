/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Lunches/Hero";
import { lunches } from "@/lib/data/lunches"; // Import your lunch data

const Lunches = () => {
  return (
    <div>
      <Head>
        <title>Isro  - Launches</title>
      </Head>
      <Hero backgroundImage="lunches/lunches.jpg" title="Launches" />

      <div className="p-4">
        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 p-5">
          {lunches.map((launch) => (
            <Link href={launch.path} key={launch.title}>
              <motion.div className="p-4  ">
                <div className="flex justify-center items-center p-2 h-full ">
                  <img
                    src={launch.img}
                    alt={launch.title}
                    className="mt-4 h w-full sm:h-2/3"
                  />
                </div>
                <div className="text-white p-2 pt-5">
                  <h1 className="font-semibold text-lg text-slate-400">
                    {launch.launchDate}
                  </h1>
                  <h2 className="text-3xl font-bold">{launch.title}</h2>
                </div>
                <div className="pt-5 ml-2">
                  <Link href={launch.path}>
                    <button className="flex justify-center items-center border hover:bg-white hover:text-black text-white py-4 px-16 text-lg font-semibold transition duration-300">
                      More Info
                    </button>
                  </Link>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lunches;
