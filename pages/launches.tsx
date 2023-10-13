/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Launches/Hero";
import { lunches } from "@/lib/data/lunches";
import Image from "next/image";

const Lunches = () => {
  return (
    <div>
      <Head>
        <title>Isro - Launches</title>
        <link rel="icon" href="/Isro.png" sizes="any" />
      </Head>
      <Hero backgroundImage="/lunches/bg4.png" title="Launches" subtitle={""} />

      <div className="p-4">
        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 p-2">
          {lunches.map((launch) => (
            <Link
              href={`/lanuches/LaunchDetails?title=${encodeURIComponent(
                launch.title
              )}`}
              key={launch.title}
            >
              <motion.div className="p-4">
                <div className="flex justify-center items-center p-2 h-full">
                  <Image
                    src={launch.img}
                    alt={launch.title}
                    width={600}
                    height={400}
                    className="mt-4 h-48 sm:h-80 w-full "
                  />
                </div>
                <div className="text-white p-2 pt-5">
                  <h1 className="font-semibold text-lg text-slate-400">
                    {launch.launchDate}
                  </h1>
                  <h2 className="text-3xl font-bold">{launch.title}</h2>
                </div>
                <div className="pt-5 ml-2 flex justify-center items-center sm:justify-start sm:items-start ">
                  <Link
                    href={`/lanuches/LaunchDetails?title=${encodeURIComponent(
                      launch.title
                    )}`}
                  >
                    <button className="border hover:bg-white hover:text-black text-white py-4 px-16 text-lg font-semibold transition duration-300 ">
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
